import React from 'react';
import { BasicForm } from '../../components/BasicForm';
import Navbar from '../../components/Navbar';

const ContactPage = () => {
	return (
		<div>
			<Navbar />
			<h1 className="text-6xl text-center font-bold ">Contact Us</h1>

			<BasicForm />
		</div>
	);
};

export default ContactPage;
