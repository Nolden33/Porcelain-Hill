import React from "react";

function BaseMusicCol() {
	return (
		<React.Fragment>
			<div className="videos">
				<h1 className="text-center font-weight-big mt-5">VIDEOS</h1>
				<div className="row py-2 iframe-container">
					<iframe
						className="col px-2"
						title="video 1"
						frameborder="0"
						height={288}
						width="50%"
						scrolling="no"
						src="https://www.youtube.com/embed/M5kqi_jQyn4"
					></iframe>
					<iframe
						className="col px-2 d-none d-lg-block"
						title="video 2"
						frameborder="0"
						height={288}
						width="50%"
						scrolling="no"
						src="https://www.youtube.com/embed/T-dvKTaqBDs"
					></iframe>
				</div>
				<div className="row py-2 iframe-container">
					<iframe
						className="col px-2 d-none d-lg-block"
						title="video 3"
						frameborder="0"
						height={288}
						width="50%"
						scrolling="no"
						src="https://www.youtube.com/embed/nQARPVH2IiQ"
					></iframe>
					<iframe
						className="col px-2"
						title="video 4"
						frameborder="0"
						height={288}
						width="50%"
						scrolling="no"
						src="https://www.youtube.com/embed/fSEs5_-AAsk"
					></iframe>
				</div>
			</div>
		</React.Fragment>
	);
}

export default BaseMusicCol;
