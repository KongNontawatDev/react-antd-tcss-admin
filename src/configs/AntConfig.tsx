import { App, ConfigProvider, theme } from "antd";
import useUISettingStore from "../components/layouts/UISetting/hooks/useUISettingStore";
import locale from "antd/locale/th_TH"
import { ReactElement } from "react";

export default function AntConfig({children}:{children:ReactElement}) {
  const uiSettingStore = useUISettingStore();
  return (
    <ConfigProvider
        theme={{
          token: {
            fontFamily: "Kanit",
            colorPrimary: uiSettingStore.primaryColor,
            colorPrimaryBgHover: "#EEEDFF",
            colorWarning: "#FF9F43",
            colorWarningBg: "#FFEFE1",
            colorSuccess: "#28C76F",
            colorSuccessBg: "#DCF6E8",
            colorError: "#EC1B2E",
            colorErrorBg: "#FBE3E4",
            colorInfo: "#1FC4A8",
            colorInfoBg: "#D6F7FB",
            colorTextSecondary: "#969696",
            fontSize: 15,
          },
          components: {
            Menu: {
              itemActiveBg: uiSettingStore.primaryColor,
              itemSelectedBg: uiSettingStore.primaryColor,
              itemSelectedColor: "#fff",
            },
            Radio: {
              colorPrimary: uiSettingStore.primaryColor,
            },
            Checkbox: {
              colorPrimary: uiSettingStore.primaryColor,
              colorPrimaryHover: "#353538",
            },
            Typography: {
              colorLink: "#1d7aeb",
              colorLinkHover: "#4599FF",
            },
            Modal: {
              titleFontSize: 20,
            },
            Slider: {
              colorBgElevated: "#1FC4A8",
            },
            Select: {
              optionSelectedBg: uiSettingStore.primaryColor,
              optionSelectedColor: "#fff",
            },
            Alert: {
              colorText: "#333",
            },
          },
          algorithm: uiSettingStore.theme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
        // renderEmpty={() => <EmptyData />}
        locale={locale}
      >
        <App>
{children}
        </App>
      </ConfigProvider>
  )
}