//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import Bio from "./components/bio/Bio";
import ShowDates from "./components/showDates/ShowDates";
import Music from "./components/music/Music";
import Photos from "./components/photos/Photos";

function App() {
	// const [user, setUser] = useState({
	// 	firstName: "Unknown",
	// 	lastName: "User",
	// 	email: "",
	// 	avatarUrl: "",
	// 	isLoggedIn: false,
	// });

	// currentUser={user} setCurrentUser={setUser} // currentUser={user}
	return (
		<React.Fragment>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/bio" element={<Bio />}></Route>
				<Route path="/showdates" element={<ShowDates />}></Route>
				<Route path="/music" element={<Music />}></Route>
				<Route path="/photos" element={<Photos />}></Route>
			</Routes>
			<h3 className="Bio">
				Porcelain Hill is an American Rock band, often Expressing elements of
				blues, classic rock, and soul. Formed in 2013 out of Southern
				California, the band is Centered around core members, Singer/guitarist
				Darnell "Big D" Cole, Bassist Jakob Parnham, and Drummer "Wildfire"
				Campos. From performing Small, local backyard gigs, to sharing stages
				with the likes of Iron Butterfly, or touring internationally and
				performing with Walter Trout, The Unsigned, independent group is on a
				mission to spread their gospel of Rock and Roll, and positive vibes.
			</h3>
		</React.Fragment>
	);
}

export default App;
