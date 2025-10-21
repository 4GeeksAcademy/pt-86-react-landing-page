import React from "react";

import NavBar from './NavBar.jsx';
import Jumbotron from "./Jumbotron.jsx"
import Cards from "./cards.jsx";


//create your first component
const Home = () => {
	return (

		<div>
			<NavBar />
			<Jumbotron
				title="Welcome to our website"
				description="This is our website!"
				paragraph="See a bunch of different cards"
			/>
			<Cards />
		</div>
	);
};

export default Home;