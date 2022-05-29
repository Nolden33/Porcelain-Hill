import React from "react";

function NavBar() {
	return (
		<React.Fragment>
			<div className="Banner d-flex">
				<img
					src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/280915528_550829579742389_2600172016884603644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=QJ6doWZxoKQAX8UF8UI&_nc_ht=scontent-lax3-1.xx&oh=03_AVKz-ahI-Hwzgq6GCCEtfnq5bozbfRVqRFkmfR512sKbWw&oe=62AE2BF5"
					alt=""
					width="100%"
				/>
			</div>
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
								<a className="nav-link" href="/">
									Bio/About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									Merch
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									Show Dates
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									Music{" "}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									Photo
								</a>
							</li>
							<li className="nav-item dropdown">
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
