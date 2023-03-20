import React from "react";
import { useQuery, gql } from "@apollo/client";
import Cards from "../components/Cards/Cards";
import IntroPage from "../components/IntroPage/IntroPage";
import ErrorPage from "../components/OtherCom/ErrorPage";
import Loading from "../components/OtherCom/Loading";

const Hacking = ({ darkMode, search }) => {
	const HACKINGS_QUERY = gql`
		query HACKINGS_QUERY($searchValue: String!) {
			hackings(where: { postName_contains: $searchValue }) {
				id
				title
				postName
				postDescription
			}
		}
	`;
	const { loading, error, data } = useQuery(HACKINGS_QUERY, {
		variables: { searchValue: search },
	});

	if (loading) {
		return <Loading loading={loading} darkMode={darkMode} />;
	}
	if (error) {
		return <ErrorPage error={error} />;
	}
	const { hackings } = data;
	return (
		<div className={`ContentPage ${darkMode ? "dark" : "light"}`}>
			<IntroPage darkMode={darkMode} typingEffect={false} PageName={"Hacking"} />
			<div className="CardSection">
				{hackings &&
					hackings.map((card) => (
						<Cards
							key={card.id}
							cardID={card.title}
							page={"hacking"}
							darkMode={darkMode}
							title={card.postName}
							content={<p dangerouslySetInnerHTML={{ __html: card.postDescription }} />}
						/>
					))}
			</div>
			<div className="space"></div>
		</div>
	);
};

export default Hacking;
