import React from "react";
import { useQuery, gql } from "@apollo/client";
import ErrorPage from "../components/OtherCom/ErrorPage";
import Loading from "../components/OtherCom/Loading";
import "./PostPage.css";
import "../index.css";
import "../components/IntroPage/IntroPage.css";
import parse from "html-react-parser";

const PostPage = ({ cardID, page, darkMode }) => {
	let localCardID = "";
	let localPage = "";
	if (cardID) {
		localCardID = localStorage.setItem("cardID", cardID);
		localPage = localStorage.setItem("page", page);
	} else {
		localCardID = localStorage.getItem("cardID");
		localPage = localStorage.getItem("page");
	}
	const gettingPOST = gql`
		query gettingPOST($ID: ID!) {
			${page || localPage}(where: { id: $ID }) {
				id
				postName
				postContent {
					html
				}
			}
		}
	`;

	const { loading, error, data } = useQuery(gettingPOST, {
		variables: { ID: cardID || localCardID },
	});

	if (loading) {
		return <Loading loading={loading} darkMode={darkMode} />;
	}

	if (error) {
		return <ErrorPage error={error} />;
	}
	return (
		<div className={`ContentPage  IntroPage ${darkMode ? "dark" : "light"}`}>
			<div className={`IntroContent PostPage ${darkMode ? "darkIntroContent" : "lightIntroContent"}`}>
				<div className={`${darkMode ? "darkNetWiz" : "NetWiz"}`}>{data[`${page || localPage}`].postName}</div>
				<div className="para">{parse(data[`${page || localPage}`].postContent.html)}</div>
			</div>
		</div>
	);
};

export default PostPage;
