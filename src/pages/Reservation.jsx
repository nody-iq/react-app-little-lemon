import React from "react";
import BookingForm from "../components/BookingForm";
import Canvas from "../assests/online-table-reservation-image-small-removebg-preview.png";
import Curve from "../assests/Asset 20@4x.png";
import "../styles/Reservation.css";
import { Link } from "react-router-dom";

const Reservation = () => {
	const [name, setName] = React.useState();
	return (
		<>
			<article className="container res-adv bg-primary position-rel">
				<div className="">
					<div>
						<div className="adv-body">
							<h1 className={`text-50 text-light`}>Reserve A Table</h1>
						</div>
					</div>
				</div>
				<img className="position-abs" src={Canvas} alt="res-img" />
				<img className="position-abs" src={Curve} alt="curve4" />
			</article>

			<div className="spacer"></div>

			<section className="container">
				<div>
					<BookingForm />
				</div>
			</section>
		</>
	);
};

export default Reservation;
