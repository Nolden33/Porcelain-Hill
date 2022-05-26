//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import NavBar from "./components/NavBar";

function App() {
	// const [user, setUser] = useState({
	// 	firstName: "Unknown",
	// 	lastName: "User",
	// 	email: "",
	// 	avatarUrl: "",
	// 	isLoggedIn: false,
	// });

	// currentUser={user} setCurrentUser={setUser}
	return (
		<React.Fragment>
			<NavBar />
		</React.Fragment>
	);
}

export default App;
