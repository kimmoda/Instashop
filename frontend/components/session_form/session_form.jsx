import React from 'react';
import { Link, withRouter } from 'react-router';
// import ReactPlayer from 'react-player';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		// debugger;
		this.props.processForm({user}).then(() => this.props.router.push("/"));
	}

	guestLogin() {
		this.state.username = "kuro";
		this.state.password = "kuroneko";
		const user = this.state;
		// debugger;
		this.props.processForm({user}).then(() => this.props.router.push("/"));
	}

	navLink() {
		if (this.props.formType === "login") {
			return (
				<div>
					Don't have an account <Link to="/signup" className="link-session">Sign up</Link>
				</div>
			);
		} else {
			return (
				<div>
					Have an account <Link to="/login" className="link-session">Log in</Link>
				</div>
			);
		}
	}


	loginButton() {
		if (this.props.formType === "login") {
			return ("Log in");
		} else {
			return ("Sign up");		}
	}

	guestRender() {
		if (this.props.formType === "login") {
			return (
				<div>
					<div className="or-div">
						<div className="border-div-left"></div>
						<div className="or-session">OR</div>
						<div className="border-div-right"></div>
					</div>
					<input
						type="button"
						value="Guest Login"
						onClick={this.guestLogin}
						className="button-session"
						/>
				</div>
			);
		} else {
			return (
				<div></div>
			);		}
	}




	renderErrors() {
		// debugger;
		return(
			<div className="errors">
				<ul>
					{ this.props.errors.map((errors, i) =>{
						errors.split("").unshift;
						return (
							<li key={i} className="error-li">
								{errors.split(" ").slice(1).join(" ")}
							</li>
						);
					}
					)}
				</ul>
			</div>
		);
	}
	// <img src="http://res.cloudinary.com/duovuuybb/image/upload/v1484204524/iphone_iaml6n.png" className="img-login" />

	render() {
		// debugger;
		return (
			<div className="login-box">
				<video className="video" autoPlay muted loop>
        	<source src="http://res.cloudinary.com/duovuuybb/video/upload/v1485137437/vic_towtpl.mp4" type="video/mp4" />
        Could not find video.
      	</video>
				<div className="victory-box">
					<div className="login-div">
						<img src="http://res.cloudinary.com/duovuuybb/image/upload/v1484187232/insta_logo_re5hwe.png" className="img-logo" />
						<form onSubmit={this.handleSubmit}>


							<div>
								<input type="text"
									placeholder="Username"
									value={this.state.username}
									onChange={this.update("username")}
									className="input-session"
									/>

								<input type="password"
									placeholder="Password"
									value={this.state.password}
									onChange={this.update("password")}
									className="input-session"
									/>

								<input type="submit" value={this.loginButton()} className="button-session" />
							</div>
							{this.guestRender()}
							{this.renderErrors()}
						</form>
					</div>
					<div className="bottom-div">
						{this.navLink()}
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(SessionForm);
