import React from "react";
import {
  faApple,
  faBandcamp,
  faFacebook,
  faInstagram,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row d-flex justify-content-evenly">
          <div className="col-4 mt-3 d-flex justify-content-center">
            <ul>
              <li className="item">
                <a className="decorations-on-link" href="/">
                  Home
                </a>
              </li>
              <li className="item">
                <a className="decorations-on-link" href="/bio">
                  Bio/About
                </a>
              </li>
              <li className="item">
                <a
                  className="decorations-on-link"
                  href="https://skullprint.co.uk/shop/ols/categories/porcelain-hill"
                >
                  Merch
                </a>
              </li>
              <li className="item">
                <a className="decorations-on-link" href="/showdates">
                  Show Dates
                </a>
              </li>
              <li className="item">
                <a className="decorations-on-link" href="/music">
                  Music
                </a>
              </li>
              <li className="item">
                <a className="decorations-on-link" href="/photos">
                  Photos
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <div className="socialMedia">
              <a
                href="https://www.instagram.com/porcelainhillofficial/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="decorations-on-link ms-2"
              >
                <FontAwesomeIcon icon={faInstagram} fontSize={30} />
              </a>

              <a
                href="https://www.facebook.com/PorcelainHill"
                target="_blank"
                rel="noreferrer"
                className="decorations-on-link ms-2"
              >
                <FontAwesomeIcon icon={faFacebook} fontSize={30} />
              </a>

              <a
                href=" https://www.youtube.com/c/PorcelainHill"
                target="_blank"
                rel="noreferrer"
                className="decorations-on-link ms-2"
              >
                <FontAwesomeIcon icon={faYoutube} fontSize={30} />
              </a>
              <a
                href=" https://open.spotify.com/artist/4uQubakVAN2w1cFW2hRBco"
                target="_blank"
                rel="noreferrer"
                className="decorations-on-link ms-2"
              >
                <FontAwesomeIcon icon={faSpotify} fontSize={30} />
              </a>
              <a
                href=" https://music.apple.com/us/artist/porcelain-hill/839744050?fbclid=IwAR1t195EwQS7ImIkFfRscwY-r7ScLMrj-SpYgGvQUFspFAopsE5qYjtyk2s"
                target="_blank"
                rel="noreferrer"
                className="decorations-on-link ms-2"
              >
                <FontAwesomeIcon icon={faApple} fontSize={30} />
              </a>
              <a
                href="https://porcelainhill.bandcamp.com/?fbclid=IwAR2F8zkACZrPDMpF_mPwwuF3mi6KuCfMOLzZCDALRDDrhUS5nvJps_Id8ds"
                target="_blank"
                rel="noreferrer"
                className="decorations-on-link ms-2"
              >
                <FontAwesomeIcon icon={faBandcamp} fontSize={30} />
              </a>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
