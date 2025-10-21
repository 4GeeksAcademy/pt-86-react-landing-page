import React from "react";

import NavBar from './NavBar.jsx';

import Jumbotron from "./Jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


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
		</div>
	);
};

export default Home;