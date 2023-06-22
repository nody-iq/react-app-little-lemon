import React from "react";
import Selector from "./Selector";
import Payment from "./Payment";
import "../styles/OrderForm.css";
import OccaisonIcon from "../assests/occaison.png";

const OrderForm = () => {
	return (
		<>
			<h2>Billing information</h2>
			<form action="" method="post">
				<div className="form-group">
					<label className="text-20" htmlFor="name">
						Fullname
						<span className="required">*</span>
						<br />
						<input
							type="text"
							className="text-16"
							id="name"
							name="name"
							placeholder="Name"
						/>
					</label>
				</div>
				<div className="form-group">
					<label className="text-20" htmlFor="email">
						Email Address
						<span className="required">*</span>
						<br />
						<input
							type="email"
							className="text-16"
							id="name"
							name="email"
							placeholder="Email Address"
						/>
					</label>
				</div>
				<div className="form-group">
					<label className="text-20" htmlFor="email">
						Phone Number
						<span className="required">*</span>
						<br />
						<input
							type="number"
							className="text-16"
							id="name"
							name="email"
							placeholder="Phone Number"
						/>
					</label>
				</div>
				<div className="form-group">
					<label className="text-20" htmlFor="name">
						Address
						<span className="required">*</span>
						<br />
						<input
							type="text"
							className="text-16"
							id="name"
							name="name"
							placeholder="Name"
						/>
					</label>
				</div>
			</form>

			<div className="py-6">
				<hr />
			</div>
			<Payment />
		</>
	);
};

export default OrderForm;
