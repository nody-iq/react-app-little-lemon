import React from "react";
import "../styles/Login.css";
import Lemon from "../assests/Asset 20@4x (1).png";
import Button from "../components/Button";

const Login = () => {
	return (
		<div className="login container">
			<div>
				<div className="spacer" />
				<div className="login-section">
					<div className="bg-prismary py-4">
						<img src={Lemon} alt="lemon" width="300" />
					</div>
					<div className="position-rel">
						<h1 className="text-light text-50">Log In</h1>
						<form className="login-form" action="" method="post">
							<div className="form-group">
								<label className="text-20 text-light" htmlFor="email">
									Email
									<br />
									<input
										type="email"
										className="text-16"
										id="name"
										name="email"
									/>
								</label>
							</div>
							<div className="form-group">
								<label className="text-20 text-light" htmlFor="password">
									Password
									<br />
									<input
										type="password"
										className="text-16"
										id="password"
										name="password"
									/>
								</label>
							</div>
              <div className="form-group">
                
								<Button
									styles={{
										width: "100%",
										height: "50px",
									}}
									title="Login"
								/>
							</div>
						</form>
					</div>
				</div>
				<div className="spacer" />
			</div>
		</div>
	);
};

export default Login;
