import React from "react";

function NavBar() {
	return (
		<React.Fragment>
			<nav
				className="navbar navbar-expand-md navbar-dark px-3"
				style={{ backgroundColor: "#000" }}
			>
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						<img
							src="https://f4.bcbits.com/img/0028193512_21.jpg"
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
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/bio">
									Bio/About
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									href="https://skullprint.co.uk/shop/ols/categories/porcelain-hill"
								>
									Merch
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/showdates">
									Show Dates
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/music">
									Music{" "}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/photos">
									Photo
								</a>
							</li>
							<li className="nav-item dropdown d-none">
								<a
									className="nav-link dropdown-toggle"
									href="/"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Dropdown link
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
		</React.Fragment>
	);
}

export default NavBar;
