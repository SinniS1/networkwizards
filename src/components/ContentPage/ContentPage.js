import React from "react";
import { useQuery, gql } from "@apollo/client";
import Cards from "../Cards/Cards";
import IntroPage from "../IntroPage/IntroPage";
import ErrorPage from "../OtherCom/ErrorPage";
import Loading from "../OtherCom/Loading";

const GET_POSTS = gql`
	query {
		posts {
			id
			postName
			postDescription
			category
		}
	}
`;

const ContentPage = ({ darkMode, search, PageValue }) => {
	const { loading, error, data } = useQuery(GET_POSTS);

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
			<div className="CardSection">
				{posts
					? posts.map((card) => (
							<Cards
								key={card.id}
								cardID={card.id}
								page={"post"}
								PageValue={PageValue}
								category={card.category}
								darkMode={darkMode}
								title={card.postName}
								content={<p dangerouslySetInnerHTML={{ __html: card.postDescription }} />}
							/>
					  ))
					: ""}
			</div>
		</div>
	);
};

export default ContentPage;
