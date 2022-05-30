import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/homePage/HomePage";
import Bio from "./components/bio/Bio";
import ShowDates from "./components/showDates/ShowDates";
import Music from "./components/music/Music";
import Photos from "./components/photos/Photos";
import PageBanner from "./components/PageBanner";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<React.Fragment>
			<div className="app-bg">
				<header>
					<PageBanner />
					<NavBar />
				</header>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/bio" element={<Bio />}></Route>
					<Route path="/showdates" element={<ShowDates />}></Route>
					<Route path="/music" element={<Music />}></Route>
					<Route path="/photos" element={<Photos />}></Route>
				</Routes>
			</div>
		</React.Fragment>
	);
}

export default App;
