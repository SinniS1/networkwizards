import React from "react";
import { useQuery, gql } from "@apollo/client";
import Cards from "../Cards/Cards";
import IntroPage from "../IntroPage/IntroPage";
import ErrorPage from "../OtherCom/ErrorPage";
import Loading from "../OtherCom/Loading";

const ContentPage = ({ darkMode, search }) => {
	const GET_POSTS = gql`
		query GET_POSTS($searchValue: String!) {
			posts(where: { postName_contains: $searchValue }) {
				id
				title
				postName
				postDescription
				category
			}
		}
	`;
	const { loading, error, data } = useQuery(GET_POSTS, {
		variables: { searchValue: search },
	});

	if (loading) {
		return <Loading loading={loading} darkMode={darkMode} />;
	}

	if (error) {
		return <ErrorPage error={error} />;
	}

	const { posts } = data;

	return (
		<div className={`ContentPage ${darkMode ? "dark" : "light"}`}>
			<IntroPage darkMode={darkMode} typingEffect={true} />
			<div className={`trending ${darkMode ? "darkTrending" : ""}`}>
				<div>Trending Posts</div>
			</div>
			<div className="CardSection">
				{posts
					? posts.map((card) => (
							<Cards
								key={card.id}
								cardID={card.title}
								page={"post"}
								category={card.category}
								darkMode={darkMode}
								title={card.postName}
								content={<p dangerouslySetInnerHTML={{ __html: card.postDescription }} />}
							/>
					  ))
					: ""}
			</div>
			<div className="space"></div>
		</div>
	);
};

export default ContentPage;
