import React from "react";
import BaseMusicCol from "./BaseMusicCol";

function Music() {
	return (
		<React.Fragment>
			<div className="container-fluid-md text-style app-bg">
				<div className="row text-left">
					<div className="col-2 empty" />
					<div className="col">
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
