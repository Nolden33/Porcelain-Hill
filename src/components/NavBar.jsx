import React from "react";

function NavBar() {
	return (
		<React.Fragment>
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4 justify-content-center">
					<nav
						className="navbar navbar-expand-md navbar-dark px-3 m-auto"
						//style={{ backgroundColor: "#000", marginLeft: 35 }}
					>
						<div className="container-fluid d-flex">
							<a className="navbar-brand px-3 flex-fill" href="/">
								<img
									//src="https://f4.bcbits.com/img/0028193512_21.jpg"
									src="https://hosting.photobucket.com/images/i/PorcelainHill/Picsart_22-05-30_09-15-58-924.png"
									alt=""
									width={150}
									height={40}
								/>
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarTogglerDemo01"
								aria-controls="navbarTogglerDemo01"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon" />
							</button>
							<div
								className="collapse navbar-collapse"
								id="navbarTogglerDemo01"
							>
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item px-3 flex-fill">
										<a className="nav-link active" aria-current="page" href="/">
											<h1>Home</h1>
										</a>
									</li>
									<li className="nav-item px-3 flex-fill">
										<a className="nav-link" href="/bio">
											<h1>Bio/About</h1>
										</a>
									</li>
									<li className="nav-item px-3 flex-fill">
										<a
											className="nav-link"
											href="https://skullprint.co.uk/shop/ols/categories/porcelain-hill"
										>
											<h1>Merch</h1>
										</a>
									</li>
									<li className="nav-item px-3 flex-fill">
										<a className="nav-link" href="/showdates">
											<h1>Shows</h1>
										</a>
									</li>
									<li className="nav-item px-3 flex-fill">
										<a className="nav-link" href="/music">
											<h1>Music </h1>
										</a>
									</li>
									<li className="nav-item px-3 flex-fill">
										<a className="nav-link" href="/photos">
											<h1>Photo</h1>
										</a>
									</li>
									<li className="nav-item dropdown px-3 flex-fill d-none">
										<a
											className="nav-link dropdown-toggle"
											href="/"
											id="navbarDropdownMenuLink"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<h2>Dropdown link</h2>
										</a>
										<ul
											className="dropdown-menu"
											aria-labelledby="navbarDropdownMenuLink"
										>
											<li>
												<a className="dropdown-item" href="/">
													Action
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="/">
													Another action
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="/">
													Something else here
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
				<div className="col-sm-4"></div>
			</div>
		</React.Fragment>
	);
}

export default NavBar;
