import React from "react";

function AdminLogin() {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="row row-cols-3 mb-3 px-2 py-2"></div>
				<div className="row row-cols-3 mb-3 px-2 py-2">
					<div className="col-4 empty"></div>
					<div className="col-4">
						<form>
							<div
								className="col bg-red text-style shadow rounded border border-1 center"
								id="SignInCard"
							>
								<div className="container-fluid" id="formHeader">
									<div className="row mt-2 py-2">
										<div className="col">
											<div className="col-12 mb-3 border-bottom border-3 border-dark">
												<h5 className="mb-3 text-center">Sign In</h5>
											</div>
										</div>
									</div>
								</div>

								<div className="mx-4 px-1" id="formData">
									<div className="row">
										<label htmlFor="Email" className="col col-form-label">
											<h6>Email:</h6>
											<div className="col">
												<input
													type="email"
													className="form-control shadow-sm"
													name="email"
													placeholder="Example: email57@yahoo.com"
													//value={currentUser.email}
													//onChange={formDataChange}
												/>
											</div>
										</label>
									</div>
									<div className="row">
										<label htmlFor="Password" className="col col-form-label">
											<h6>Password:</h6>
											<div className="col">
												<input
													type="password"
													className="form-control shadow-sm"
													name="password"
													//value={currentUser.password}
													//onChange={formDataChange}
												/>
											</div>
											<span id="passwordHelpInline" className="form-text">
												Must have 8-20 characters with at least one capital, one
												lowercase and one special character.
											</span>
										</label>
									</div>
									<div className="row row-cols-2 mx-2 my-2 px-2 py-3 border-top border-3 border-dark">
										<div className="col-4 d-inline" id="button">
											<div className="row mb-1">
												<div className="col">
													<button
														type="submit"
														className="btn px-4 py-2 btn-lg btn-color shadow border border-secondary text-center"
														id="loginButton"
														//onClick={onLoginClick}
													>
														Login
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className="col-4 empty"></div>
				</div>
				<div className="row row-cols-3 mb-3 px-2 py-2"></div>
			</div>
		</React.Fragment>
	);
}

export default AdminLogin;
