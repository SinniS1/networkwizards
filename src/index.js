import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ScrollToTop from "./ScrollToTop";
const client = new ApolloClient({
	uri: process.env.REACT_APP_PUBLIC_KEY,
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</Router>
		</ApolloProvider>
	</React.StrictMode>
);

reportWebVitals();
