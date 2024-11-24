import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import ProductLoading from "./loading";
import { delay } from "../../utils/promise";

type Product = {
	id: number;
	name: string;
	price: number;
	stock: number;
	barcode: string;
	created_at: string;
};

export default function Product() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true); // สถานะการโหลด

	useEffect(() => {
		const fetchProducts = async () => {
      await delay(2000)
			const { data, error } = await supabase.from("product").select("*");

			console.log("data", data);
			if (error) {
				console.error("Error fetching products:", error);
				throw new Error("Failed to fetch products");
			} else {
				setProducts(data!);
				setLoading(false); // เปลี่ยนสถานะการโหลดเมื่อข้อมูลถูกดึงมา
			}
		};

		fetchProducts();
	}, []);

	return (
		<>
			{loading ? ( // แสดงคอมโพเนนต์ Loading ถ้ากำลังโหลด
				<ProductLoading />
			) : (
				products.map((product) => <div key={product.id}>{product.name}</div>)
			)}
		</>
	);
}
