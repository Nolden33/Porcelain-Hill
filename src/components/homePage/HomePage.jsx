import React from "react";

function HomePage() {
	return (
		<React.Fragment>
			<div className="container-fluid-md text-style app-bg">
				<div className="row text-left">
					<div className="col-2 empty" />
					<div className="col">
						<h3 className="Bio">
							Porcelain Hill is an American rock band, often expressing elements
							of blues, classic rock, and soul. Formed in 2013 out of Southern
							California, the band is centered around core members,
							Singer/Guitarist Darnell "Big D" Cole, Bassist Jakob Parnham, and
							Drummer "Wildfire" Campos. From performing small, local backyard
							gigs, to sharing stages with the likes of Iron Butterfly, or
							touring internationally and performing with Walter Trout, the
							unsigned, independent group is on a mission to spread their gospel
							of Rock and Roll, and positive vibes.
						</h3>
					</div>
					<div className="col-2 empty" />
				</div>

				<br />
				<div className="row text-center">
					<div className="col-2 empty" />
					<div className="col">
						<h3 className="ShowDates">
							6/3 perqs, Huntington Beach <br />
							6/4 Chain reaction, Anaheim <br />
							6/23 James Taphouse, Salida CO <br />
							7/7 Cutting room, New York NY <br />
							7/9 Kingfish, Fayetteville AR <br />
							7/14 Deep ellum Art Co, Dallas TX <br />
							7/17 Yucca Taproom, Phoenix AZ
						</h3>
					</div>
					<div className="col-2 empty" />
				</div>
			</div>
		</React.Fragment>
	);
}

export default HomePage;
