import React from "react";
import Selector from "../components/Selector";
import Payment from "../components/Payment";
import "../styles/BookingForm.css";
import OccaisonIcon from "../assests/occaison.png";

const BookingForm = () => {
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
				<div className="form-group dateAndTime">
					<label className="text-20" htmlFor="email">
						Date
						<span className="required">*</span>
						<br />
						<input type="date" className="text-16" id="name" name="date" />
					</label>
					<label className="text-20" htmlFor="email">
						Time
						<span className="required">*</span>
						<br />
						<input type="time" className="text-16" id="time" name="time" />
					</label>
				</div>
				<div className="form-group">
					<label className="text-20" htmlFor="email">
						Occasion
						<span className="required">*</span>
						<br />
						<Selector
							label="Occasion"
							icon={OccaisonIcon}
							options={[
								{ label: "Birthday", value: "birthday" },
								{ label: "Engagement", value: "engagement" },
								{ label: "Anniversary", value: "anniversary" },
							]}
						/>
					</label>
				</div>
				<div className="form-group">
					<label className="text-20" htmlFor="email">
						Seats
						<span className="required">*</span>
						<br />
						<input
							type="number"
							className="text-16"
							id="seats"
							name="seats"
							placeholder="Seats"
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

export default BookingForm;
