import React, { useState } from "react";
import ReactWhatsapp from 'react-whatsapp';

const ContactUs = (props) => {
    const [data, setData] = useState({
		name: "",
		email: "",
		message: "",
		loading: false,
		error: false,
		done: false
	});
	const handleInputChange = event => {
		setData({
			...data,
			[event.target.name]: event.target.value
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
        alert("SENT");
		// setData({
		// 	...data,
		// 	loading: true
		// });
		// var nm = data.name;
		// var mess = data.message;
		// let templateParams = {
		// 	from_name: nm,
		// 	to_name: 'Taahirah',
		// 	subject: 'Contact Form',
		// 	message_html: mess,
		// 	from_email: data.email
		// };
		// await emailjs.send(apiKeys.SERVICE_ID, "template_spkntrh", templateParams, apiKeys.USER_ID)
		// 	// emailjs.send("service_13w7zra", "template_bl9tkd7", templateParams, "user_dNtvx5ZFPmW0TGSPuEaZ6")
		// 	.then(result => {
		// 		alert('Message sent, we will respond shortly. Thank you.', result.text);
		// 		setData({
		// 			loading: false,
		// 			done: true
		// 		});
		// 	},
		// 		error => {
		// 			alert('An error was encounter, Please try again', error.text);
		// 			setData({
		// 				loading: false,
		// 				error: true
		// 			});
		// 		}
		// 	)
		// setData({
		// 	...data,
		// 	done: true,
		// 	loading: false
		// })
	}
	const form = (
		<form name="sentMessage" id="contactForm" onSubmit={handleSubmit}>
			<div className="row">
				<div className="col-md-6">
					<div className="form-group">
						<input
							type="text"
							id="name"
							className="form-control"
							placeholder="Name"
							required
							onChange={handleInputChange}
						/>
						<p className="help-block text-danger"></p>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<input
							type="email"
							id="email"
							className="form-control"
							placeholder="Email"
							required="required"
							onChange={handleInputChange}
						/>
						<p className="help-block text-danger"></p>
					</div>
				</div>
			</div>
			<div className="form-group">
				<textarea
					name="message"
					id="message"
					className="form-control"
					rows="4"
					placeholder="Message"
					required
					onChange={handleInputChange}
				></textarea>
				<p className="help-block text-danger"></p>
			</div>
			<button type="submit" className="btn btn-custom btn-lg">
				Send Message
			</button>
		</form>
	)
	const loadingForm = (
		<div>
            "... loading"
			{/* <Spinner /> */}
		</div>
	);
	const errorForm = (
		<div className='body-padding text-center'>
			<h1>ERROR!</h1>
			<h1>Please try again</h1>
			<button className='btn-custom' onClick={() => {
				setData({
					name: "",
					email: "",
					message: "",
					loading: false,
					error: false,
					done: false
				})
			}} >Try Again</button>
		</div>
	);
	const doneForm = (
		<div className='body-padding text-center'>
			<div className='section-title'>
				<h1>Keep an eye open for a response from the academy</h1>
			</div>
			<a href={'/tma'} className='btn-custom'>DONE</a>
		</div>
	)

	return (
		<div className="container" style={{ marginTop: "5rem", paddingBottom: "5rem" }}>
			<div id="contact">
				<div className="container">
					<div className="col-md-8">
						<div className="row">
							<div className="section-title">

								<h2>Get In Touch</h2>
								<p>
									Please fill out the form below to send us an email and we
									will get back to you as soon as possible.
								</p>
							</div>
							{!data.loading && !data.error && !data.done && form}
							{data.loading && !data.error && !data.done && loadingForm}
							{!data.loading && data.error && !data.done && errorForm}
							{!data.loading && !data.error && data.done && doneForm}
						</div>
					</div>
					<div className="col-md-3 col-md-offset-1 contact-info">
						<div className="contact-item">
							<h3>Contact Info</h3>
						</div>
						<div className="contact-item">
							<p>
								<span>
									<i className="fa fa-whatsapp"></i> WhatsApp
								</span>{" "}
								{
									props.data
										? props.data.phone
										: "loading"
								}
							</p>
						</div>
						<div className="contact-item">
							<p href="t.modelingacademy@gmail.com">
								<span>
									<i className="fa fa-envelope-o"></i> Email
								</span>{" "}
								{
									props.data
										? props.data.email
										: "loading"}
							</p>
						</div>
					</div>
					<div className="col-md-12">
						<div className="row">
							<div className="social">
								<ul>
									<li>
										<ReactWhatsapp
											number="+27-81-361-3191"
											message={data.message}
											type="submit"
											style={{
												border: "none",
												backgroundColor: "black"
											}}>
											<i className='fa fa-whatsapp' style={{ color: "green" }}></i>
										</ReactWhatsapp>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;