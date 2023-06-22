import React from "react";
import "../styles/Payment.css";
import Button from "../components/Button";
const Payment = ({ label, options, icon }) => {
	return (
		<>
			<h2>Payment</h2>
			<form action="" method="post">
				<div className="form-group">
					<label className="text-20" htmlFor="ccNumber">
						CC Number
						<span className="required">*</span>
						<br />
						<input
							type="number"
							className="text-16"
							id="ccNumber"
							name="ccNumber"
							placeholder="CC Number"
						/>
					</label>
				</div>
				<div className="form-group exp-ccv">
					<label className="text-20" htmlFor="expire">
						Expire
						<span className="required">*</span>
						<br />
						<input
							type="month"
							className="text-16"
							id="exp"
							name="exp"
							placeholder="Expire"
						/>
					</label>
					<label className="text-20" htmlFor="ccv">
						CCV
						<span className="required">*</span>
						<br />
						<input
							type="number"
							className="text-16"
							id="ccv"
							name="ccv"
							placeholder="CCV"
						/>
					</label>
				</div>
				<div className="form-group pt-5">
					<Button
						styles={{
							width: "100%",
							height: "50px",
						}}
						title="Submit & Pay"
					/>
				</div>
			</form>
		</>
	);
};

export default Payment;
