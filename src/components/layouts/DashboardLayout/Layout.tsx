import { useState, useEffect } from "react";
import { Layout, Image, Button, Menu } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "./menu";
import useLayoutStore from "./hooks/useLayoutStore";
import Navbar from "./Navbar";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import ButtonUISetting from "../UISetting/components/ButtonUISetting";
import useUISettingStore from "../UISetting/hooks/useUISettingStore";
import ContainerLayout from "./components/Container";

const { Header, Content, Sider } = Layout;

export default function DashboardLayout() {
	const location = useLocation();
	const navigate = useNavigate();
	const uiSettingStore = useUISettingStore();

	const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
	const [isMobile, setIsMobile] = useState(false);

	const { sidebarCollapse, setSidebarCollapse, setSidebarCollapseWidth } =
		useLayoutStore();

	useEffect(() => {
		const currentPath = location.pathname.slice(1);
		setSelectedKeys([currentPath]);
	}, [location.pathname]);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1024);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleMenuClick = (e: { key: string }) => {
		if (isMobile) {
			setSidebarCollapse(true);
		}
		setSelectedKeys([e.key]);
		navigate(`/${e.key}`);
	};

	// Adjust padding for Content and Navbar dynamically
	const getPaddingLeft = () => {
		if (uiSettingStore.layout == "horizontal" || isMobile) return 0;
		return sidebarCollapse ? 80 : 220;
	};

	useEffect(() => {
		document.body.className = uiSettingStore.theme || "light";
	}, [uiSettingStore.theme]);

	return (
		<Layout style={{ minHeight: "100vh" }}>
			{uiSettingStore.layout == "horizontal" && <Navbar />}
			{uiSettingStore.layout == "horizontal" && (
				<Header style={{ padding: 0 }}>
					{uiSettingStore.layout !== "horizontal" && (
						<Image
							src="/assets/logo.svg"
							alt="logo"
							width={50}
							preview={false}
							style={{ marginRight: "16px" }}
						/>
					)}
					<Menu
						mode="horizontal"
						theme={uiSettingStore.sidebarColor}
						items={menuItems}
						selectedKeys={selectedKeys}
						onClick={handleMenuClick} // Ensure onClick is handled
						// style={{ flex: 1 }}
					/>
				</Header>
			)}
			{uiSettingStore.layout == "vertical" && (
				<Sider
					theme={uiSettingStore.sidebarColor}
					collapsible
					collapsed={sidebarCollapse}
					onCollapse={(collapsed) => setSidebarCollapse(collapsed)}
					width={isMobile ? "100%" : 220}
					collapsedWidth={isMobile ? 0 : 80}
					breakpoint="lg"
					style={{
						position: "fixed",
						height: "100vh",
						zIndex: 1000,
						left: 0,
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "16px",
						}}
					>
						<Image
							src="/assets/logo.svg"
							alt="logo"
							width={sidebarCollapse ? 30 : 50}
							preview={false}
						/>
						{isMobile && (
							<Button
								type="text"
								icon={
									sidebarCollapse ? (
										<MenuUnfoldOutlined />
									) : (
										<MenuFoldOutlined />
									)
								}
								onClick={() => {
									setSidebarCollapse(!sidebarCollapse);
									setSidebarCollapseWidth(1);
								}}
								style={{
									fontSize: "16px",
									width: 64,
									height: 64,
								}}
							/>
						)}
					</div>
					<Menu
						mode="inline"
						theme={uiSettingStore.sidebarColor}
						items={menuItems}
						selectedKeys={selectedKeys}
						onClick={handleMenuClick}
					/>
				</Sider>
			)}
			<Layout
				style={{
					paddingLeft: getPaddingLeft(),
					transition: "padding-left 0.2s",
				}}
			>
				{uiSettingStore.layout == "vertical" && <Navbar />}
				<Content>
          <ContainerLayout>
            <Outlet />
          </ContainerLayout>
					<ButtonUISetting />
				</Content>
			</Layout>
		</Layout>
	);
}
