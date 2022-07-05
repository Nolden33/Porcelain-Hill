// import React, { useState } from "react";
// import { Button, Modal } from "bootstrap";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// //import * as userService from '../../services/userService';
// //import { passwordChangeSchema } from "../../schema/authSchema";

// function AdminHome() {
// 	const [info, setInfo] = useState(false);
// 	const [size, setSize] = useState(null);
// 	const [scroll, setScroll] = useState(null);
// 	const [showOldPassword, setShowOldPassword] = useState(false);
// 	const [showNewPassword, setShowNewPassword] = useState(false);
// 	const [showNewPasswordConfirm, setShowNewPasswordConfirm] = useState(false);
// 	const [passwordChangeData, setPasswordChangeData] = useState({
// 		oldPassword: "",
// 		newPassword: "",
// 		newPasswordConfirm: "",
// 	});

// 	const onPasswordFieldChange = (event) => {
// 		//_logger({ event });
// 		const target = event.target;
// 		const userValue = target.value;
// 		const nameOfField = target.name;

// 		setPasswordChangeData((prevState) => {
// 			const userObject = { ...prevState };
// 			userObject[nameOfField] = userValue;
// 			return userObject;
// 		});
// 	};

// 	const handleClickOld = () => {
// 		setShowOldPassword(!showOldPassword);
// 	};

// 	const handleClickNew = () => {
// 		setShowNewPassword(!showNewPassword);
// 	};

// 	const handleClickConfirm = () => {
// 		setShowNewPasswordConfirm(!showNewPasswordConfirm);
// 	};

// 	const toggle = () => {
// 		setInfo(!info);
// 	};

// 	const openModalWithSize = (size) => {
// 		setSize(size);
// 		setScroll(null);
// 		toggle();
// 	};

// 	const onChangePasswordClicked = () => {
// 		openModalWithSize("lg");
// 	};

// 	const handleChangePassword = () => {
// 		//_logger(currentUser);
// 		// userService
// 		// 	.changePassword(passwordChangeData)
// 		// 	.then(onChangeSuccess)
// 		// 	.catch(onChangeError);
// 		console.log("nothing happens", passwordChangeData);
// 	};

// 	// const onChangeSuccess = (res) => {
// 	// 	//_logger("onPasswordChangeSuccess", res);
// 	// 	//toastr.success("Your password has been changed.");
// 	// };

// 	// const onChangeError = (err) => {
// 	// 	//_logger("ConfirmTokenError.", err.response);
// 	// 	//toastr.error('Your password failed to change.');
// 	// };

// 	return (
// 		<React.Fragment>
// 			<h1 className="my-3 px-2 py-2 offset-1">
// 				Hello{" "}
// 				<span>
// 					Current Admin Name
// 					{/* {props.currentUser.firstName} {props.currentUser.lastName} */}
// 				</span>
// 				!
// 			</h1>
// 			<hr />
// 			<div className="container">
// 				<div className="row justify-content-center p-5">
// 					<h1 className="card-text-title">Admin Controlls</h1>
// 				</div>

// 				<div className="container">
// 					<div className="row">
// 						<div className="col">
// 							<button
// 								//onClick={handleUnsubscribe}
// 								className="btn btn-unsub btn-hover-unsub"
// 								type="submit"
// 								id="unSubscribe"
// 							>
// 								Edit All Admin Profiles
// 							</button>
// 						</div>
// 					</div>
// 					<div className="row">
// 						<div className="col">
// 							<button
// 								onClick={onChangePasswordClicked}
// 								className="btn btn-cha btn-hover-change"
// 								type="submit"
// 								id="change"
// 							>
// 								Change Password
// 							</button>
// 						</div>
// 					</div>
// 				</div>

// 				<Modal show={info} onHide={toggle} size={size} scrollable={scroll}>
// 					<Modal.Header onHide={toggle} closeButton>
// 						<h4>Change Password</h4>
// 					</Modal.Header>
// 					<Modal.Body>
// 						<div className="row">
// 							<Formik
// 							//enableReinitialize={true}
// 							//initialValues={passwordChangeData}
// 							//validationSchema={passwordChangeSchema}
// 							>
// 								<Form>
// 									<label className="modal-label-pword">Old Password</label>
// 									<div className="input-group mb-3">
// 										<Field
// 											name="oldPassword"
// 											type={showOldPassword ? "text" : "password"}
// 											placeholder="Enter your old password"
// 											className="form-control"
// 											onChange={onPasswordFieldChange}
// 										/>
// 										<div className="input-group-prepend">
// 											<span
// 												className="input-group-text pointer"
// 												onClick={handleClickOld}
// 											>
// 												{showOldPassword ? (
// 													<i className="mdi mdi-eye"></i>
// 												) : (
// 													<i className="mdi mdi-eye-off"></i>
// 												)}
// 											</span>
// 										</div>
// 										<ErrorMessage
// 											name="oldPassword"
// 											component="div"
// 											className="has-error"
// 										/>
// 									</div>
// 									<label className="modal-label-pword">New Password</label>
// 									<div className="input-group mb-3">
// 										<Field
// 											name="newPassword"
// 											type={showNewPassword ? "text" : "password"}
// 											placeholder="Enter your new password"
// 											className="form-control"
// 											onChange={onPasswordFieldChange}
// 										/>
// 										<div className="input-group-prepend">
// 											<span
// 												className="input-group-text pointer"
// 												onClick={handleClickNew}
// 											>
// 												{showNewPassword ? (
// 													<i className="mdi mdi-eye  "></i>
// 												) : (
// 													<i className="mdi mdi-eye-off"></i>
// 												)}
// 											</span>
// 										</div>
// 										<ErrorMessage
// 											name="newPassword"
// 											component="div"
// 											className="has-error"
// 										/>
// 									</div>
// 									<label className="modal-label-pword">
// 										Confirm New Password
// 									</label>

// 									<div className="input-group mb-3">
// 										<Field
// 											name="newPasswordConfirm"
// 											type={showNewPasswordConfirm ? "text" : "password"}
// 											placeholder="Confirm your new password"
// 											className="form-control"
// 											onChange={onPasswordFieldChange}
// 										/>
// 										<div className="input-group-prepend">
// 											<span
// 												className="input-group-text pointer"
// 												onClick={handleClickConfirm}
// 											>
// 												{showNewPasswordConfirm ? (
// 													<i className="mdi mdi-eye  "></i>
// 												) : (
// 													<i className="mdi mdi-eye-off"></i>
// 												)}
// 											</span>
// 										</div>
// 										<ErrorMessage
// 											name="newPasswordConfirm"
// 											component="div"
// 											className="has-error"
// 										/>
// 									</div>
// 								</Form>
// 							</Formik>
// 						</div>
// 					</Modal.Body>
// 					<Modal.Footer>
// 						<Button variant="primary" onClick={handleChangePassword}>
// 							Submit New Password
// 						</Button>
// 						<Button variant="danger" onClick={toggle}>
// 							Cancel
// 						</Button>
// 					</Modal.Footer>
// 				</Modal>
// 			</div>
// 		</React.Fragment>
// 	);
// }

// export default AdminHome;
