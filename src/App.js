import ContentPage from "./components/ContentPage/ContentPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Coding from "./Pages/Coding";
import Hacking from "./Pages/Hacking";
import Networking from "./Pages/Networking";
import PostPage from "./Pages/PostPage";

function App() {
	const [darkMode, setDarkMode] = useState(true);

	const toggleDarkMode = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};
	const [search, setSearch] = useState("");
	const SearchValue = (value) => {
		setSearch(value);
	};
	// const [cardID, setCardID] = useState();
	// const [page, setPage] = useState();
	// const PageValue = (id, pg) => {
	// 	setPage(pg);
	// 	setCardID(id);
	// };
	return (
		<Routes>
			<Route path="/" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} SearchValue={SearchValue} />}>
				<Route index element={<ContentPage darkMode={darkMode} search={search} />} />
				<Route path="/Coding" element={<Coding darkMode={darkMode} search={search} />} />
				<Route path="/Hacking" element={<Hacking darkMode={darkMode} search={search} />} />
				<Route path="/Networking" element={<Networking darkMode={darkMode} search={search} />} />
				<Route path={`/PostPage/:page/:cardID/`} element={<PostPage darkMode={darkMode} />} />
			</Route>
		</Routes>
	);
}

export default App;
