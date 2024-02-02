import { store } from "@/store/redux/store";
import Navbar from "./Navbar";
import { Provider } from 'react-redux'

export default function Layout({ children }) {

	return (
		<>
			<Provider store={store}>
				<main>
					<Navbar />
					{children}
				</main>
			</Provider>
		</>
	)
}
