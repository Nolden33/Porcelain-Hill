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
