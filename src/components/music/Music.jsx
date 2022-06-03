import React from "react";

function Music() {
	return (
		<React.Fragment>
			<div className="container-fluid-md text-style app-bg">
				<div className="row text-left">
					<div className="col-2 empty" />
					<div className="col">
						<div className="videos">
							<h2 className="text-center font-weight-big mt-5">VIDEOS</h2>
							<div className="iframe-container">
								<iframe
									className="px-2"
									title="video 1"
									frameborder="0"
									height={288}
									width="50%"
									scrolling="no"
									src="https://www.youtube.com/embed/M5kqi_jQyn4"
								></iframe>
								<iframe
									className="px-2"
									title="video 2"
									frameborder="0"
									height={288}
									width="50%"
									scrolling="no"
									src="https://www.youtube.com/embed/fSEs5_-AAsk"
								></iframe>
							</div>
						</div>
					</div>
					<div className="col-2 empty" />
				</div>
			</div>
		</React.Fragment>
	);
}

export default Music;
