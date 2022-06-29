import React from "react";
import BaseShowDatesCol from "../showDates/BaseShowDatesCol";
import BaseMusicCol from "../music/BaseMusicCol";
import BaseTestimonyCol from "../bio/BaseTestimonyCol";
import BaseBioCol from "../bio/BaseBioCol";

function HomePage() {
	return (
		<React.Fragment>
			<div className="container-fluid-lg text-style app-bg">
				<div className="row my-5">
					<div className="col-2 empty" />
					<div className="col">
						<div className="row my-5">
							<div className="col text-center">
								<div className="bio-pic">
									<img
										src="https://hosting.photobucket.com/images/i/PorcelainHill/PicsArt_08-02-03.21.46.png"
										alt=""
										width="75%"
									/>
								</div>
							</div>
						</div>
						<BaseTestimonyCol />
					</div>
					<div className="col-2 empty" />
				</div>

				<div className="row my-5">
					<div className="col-2 empty" />
					<div className="col">
						<BaseBioCol />
					</div>
					<div className="col-2 empty" />
				</div>

				<div className="container-fluid-md text-style app-bg">
					<div className="row my-5">
						<div className="col-2 empty" />
						<div className="col">
							<BaseMusicCol />
						</div>
						<div className="col-2 empty" />
					</div>
				</div>

				<br />
				<div className="row my-5">
					<div className="col-2 empty" />
					<div className="col">
						<BaseShowDatesCol />
					</div>
					<div className="col-2 empty" />
				</div>
			</div>
		</React.Fragment>
	);
}

export default HomePage;
