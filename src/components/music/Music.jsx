import React from "react";
import BaseMusicCol from "./BaseMusicCol";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Music() {
  const [pageData, setPageData] = useState("");

  const onSearchFieldChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setPageData((prevState) => {
      const searchObj = { ...prevState };
      searchObj[name] = value;
      return searchObj;
    });
  };

  return (
    <React.Fragment>
      <div className="container-fluid-md text-style app-bg">
        <div className="row text-left">
          <div className="col-2 empty" />
          <div className="col">
            <div class="search-container">
              <input
                type="text"
                value={pageData.searchInput}
                name="searchInput"
                placeholder="Enter your search here..."
                id="searchBar"
                onChange={onSearchFieldChange}
              />
              <button className="searchBtn">
                <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={20} />
              </button>
            </div>
            <iframe
              className="spotify-demo-player"
              title="spotify"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/4uQubakVAN2w1cFW2hRBco?utm_source=generator"
              width="50%"
              height="270"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>

            <BaseMusicCol />
            <h3>
              THE BASE IS ADDED ABOVE. WHATEVER IS IN THE BASE WILL SHOW ON THE
              HOME PAGE. YOU CAN NOW ADD TO THIS PAGE HERE.
            </h3>
          </div>
          <div className="col-2 empty" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Music;
