import React from "react";
import { useQuery, gql } from "@apollo/client";
import Cards from "../components/Cards/Cards";
import IntroPage from "../components/IntroPage/IntroPage";
import ErrorPage from "../components/OtherCom/ErrorPage";
import Loading from "../components/OtherCom/Loading";

const NETWORKING_QUERY = gql`
	query {
		networkings {
			id
			postName
			postDescription
		}
	}
`;

const Networking = ({ darkMode, PageValue }) => {
	const { loading, error, data } = useQuery(NETWORKING_QUERY);

	if (loading) {
		return <Loading loading={loading} darkMode={darkMode} />;
	}
	if (error) {
		return <ErrorPage error={error} />;
	}
	const { networkings } = data;
	return (
		<div className={`ContentPage ${darkMode ? "dark" : "light"}`}>
			<IntroPage darkMode={darkMode} typingEffect={false} PageName={"Networking"} />
			<div className="CardSection">
				{networkings &&
					networkings.map((card) => (
						<Cards
							key={card.id}
							cardID={card.id}
							page={"networking"}
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

export default Networking;
