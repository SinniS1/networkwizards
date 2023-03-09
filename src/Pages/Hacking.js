import React from "react";
import { useQuery, gql } from "@apollo/client";
import Cards from "../components/Cards/Cards";
import IntroPage from "../components/IntroPage/IntroPage";
import ErrorPage from "../components/OtherCom/ErrorPage";
import Loading from "../components/OtherCom/Loading";

const HACKINGS_QUERY = gql`
	query {
		hackings {
			id
			postName
			postDescription
		}
	}
`;

const Hacking = ({ darkMode, PageValue }) => {
	const { loading, error, data } = useQuery(HACKINGS_QUERY);

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
							cardID={card.id}
							page={"hacking"}
							PageValue={PageValue}
							darkMode={darkMode}
							title={card.postName}
							content={<p dangerouslySetInnerHTML={{ __html: card.postDescription }} />}
						/>
					))}
			</div>
		</div>
	);
};

export default Hacking;
