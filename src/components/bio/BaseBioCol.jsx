import React from "react";

function BaseBioCol() {
	return (
		<React.Fragment>
			<div className="row">
				<div className="col text-left">
					<h1 className="Bio text-center font-weight-big mt-5">ABOUT US</h1>
					<h3 className="Bio">
						Porcelain Hill is an American Rock band, often expressing elements
						of blues, classic rock, and soul. Formed in 2013 out of Southern
						California, the band is centered around core members,
						Singer/Guitarist Darnell "Big D" Cole, Bassist Jakob Parnham, and
						Drummer "Wildfire" Campos.
						<br />
						<br />
						From performing small, local backyard gigs, to sharing stages with
						the likes of Iron Butterfly, or touring internationally and
						performing with Walter Trout, the unsigned, independent group is on
						a mission to spread their gospel of Rock and Roll, and positive
						vibes.
					</h3>
					<div className="bio-pic text-center">
						<img
							src="https://hosting.photobucket.com/images/i/PorcelainHill/Picsart_22-05-30_09-08-12-086.jpg"
							alt=""
							width="100%"
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default BaseBioCol;
