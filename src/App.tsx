import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import AntConfig from "./configs/AntConfig";

export default function App() {
	return (
		<AntConfig>
			<RouterProvider router={router} />
		</AntConfig>
	);
}
