import React from "react";

function HomePage() {
	return (
		<React.Fragment>
			<div className="container-fluid-md text-style app-bg">
				<div className="row text-left">
					<div className="col-2 empty" />
					<div className="col">
						<div className="row">
							<div className="col-3">
								<div className="bio-pic text-center">
									<img
										src="https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/275309144_483689576449660_8675376664503736988_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=74xWRquyxcMAX84Ardo&tn=jlKmw5xTgT3tYUzY&_nc_ht=scontent-lax3-1.xx&oh=00_AT_FundvTeCVaQij58wCtKFLyM0jLbSV3zWdkiwweK_2jA&oe=6298F7BD"
										alt=""
										width="75%"
									/>
								</div>
							</div>
							<div className="col">
								<h3 className="Bio">
									Porcelain Hill is an American Rock band, often expressing
									elements of blues, classic rock, and soul.
									<br />
									<br />
									Formed in 2013 out of Southern California, the band is
									centered around core members, Singer/Guitarist Darnell "Big D"
									Cole, Bassist Jakob Parnham, and Drummer "Wildfire" Campos.
									<br />
									<br />
									From performing small, local backyard gigs, to sharing stages
									with the likes of Iron Butterfly, or touring internationally
									and performing with Walter Trout, the unsigned, independent
									group is on a mission to spread their gospel of Rock and Roll,
									and positive vibes.
								</h3>
							</div>
						</div>
					</div>
					<div className="col-2 empty" />
				</div>

				<br />
				<div className="row text-center mt-5 ">
					<div className="col-2 empty" />
					<div className="col">
						<h3 className="ShowDates mb-3"> SHOW DATES</h3>


            <table className="table table-dark table-striped fs-5">
              <thead>
                <tr>
                  <th scope="col">DATE</th>
                  <th scope="col">VENUE</th>
                  <th scope="col">LOCATION</th>
                </tr>
              </thead>
              <tbody className="table-group-divider fs-5">
                <tr>
                  <td>Friday, June 3</td>
                  <td>Perqs Bar</td>
                  <td>Huntington Beach, CA</td>
                </tr>
                <tr>
                  <td>Saturday, June 4</td>
                  <td>Chain Reaction</td>
                  <td>Anaheim, CA</td>
                </tr>
                <tr>
                  <td>Thursday, June 23 </td>
                  <td>James Taphouse</td>
                  <td>Salida, CO</td>
                </tr>
                <tr>
                  <td>Thursday, July 7</td>
                  <td>Cutting room</td>
                  <td>New York, NY</td>
                </tr>
                <tr>
                  <td>Saturday, July 9</td>
                  <td>Kingfish</td>
                  <td>Fayetteville, AR</td>
                </tr>
                <tr>
                  <td>Thursday, July 14 </td>
                  <td>Deep Ellum Art Company</td>
                  <td>Dallas, TX</td>
                </tr>
                <tr>
                  <td>Sunday, July 17 </td>
                  <td>Yucca Taproom</td>
                  <td>Phoenix, AZ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-2 empty" />
        </div>
      </div>
    </React.Fragment>
  );

}

export default HomePage;
