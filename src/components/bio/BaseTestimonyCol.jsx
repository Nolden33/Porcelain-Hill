import React from "react";

function BaseTestimonyCol() {
	return (
		<React.Fragment>
			<div className="row mx-5 my-3 d-flex flex-md-wrap ">
				<div className="col-6 d-inline px-5 d-none d-lg-block">
					<h3>
						"Their music is a throwback, but it’s also fresh. It is high energy,
						funky and bluesy at the same time"
					</h3>
					<h3 className="mt-3">- Mac, The rust belt chronicles</h3>
				</div>
				<div className="col-6 d-inline px-5 d-none d-lg-block">
					<h3>
						"From the very start it’s fast paced, high energy, blues rock, and
						you can almost reach out and feel the electricity being generated on
						the stage"
					</h3>
					<h3 className="mt-3">- Tim Marcus, Jace media</h3>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-3"></div>
				<div className="col text-center px-2">
					<h3>
						"You might just find your new favourite rocking blues funk soul band
						in the form of these Cali-based cats."
					</h3>
					<h3 className="mt-3">- Steve Cooper, Metalville Zine</h3>
				</div>
				<div className="col-3"></div>
			</div>
		</React.Fragment>
	);
}

export default BaseTestimonyCol;
