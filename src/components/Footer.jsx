import React from "react";
import {
  faApple,
  faFacebook,
  faInstagram,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Formik, Field, Form } from "formik";


function Footer() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-4">
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
            </div>
          </div>

          <div className="col-4">
            <h3 className="text-style text-center mt-3 red">CONTACT US</h3>
            <h4 className="text-style text-center mt-3">
              <a href="mailto: porcelainhill@gmail.com">
                porcelainhill@gmail.com
              </a>
            </h4>

            {/* <div className="text-style text-center">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  message: "",
                }}
                onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                <Form>
                  <label className="firstName">First Name</label>
                  <div className="input-group mb-3"></div>
                  <Field
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                  />

                  <label className="lastName">Last Name</label>
                  <div className="input-group mb-3"></div>
                  <Field
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                  />

                  <label className="message">Message</label>
                  <div className="input-group mb-3"></div>
                  <Field
                    id="email"
                    name="email"
                    placeholder="Message"
                    type="email"
                  />
                  <button type="submit">Submit</button>
                </Form>
              </Formik>
            </div> */}
          </div>

        

        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
