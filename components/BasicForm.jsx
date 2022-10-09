import { useState } from 'react';

export const BasicForm = () => {
	const [form, setForm] = useState({ name: '', email: '', message: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
		setForm({ name: '', email: '', message: '' });
	};

	return (
		<>
			<h1 className="text-6xl text-center font-bold ">Tailwind Form!</h1>
			<form className="flex flex-col items-center " onSubmit={handleSubmit}>
				<div className="flex items-center gap-2 ">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="name"
						id="name"
						value={form.name}
						onChange={handleChange}
						className="border-2 border-black p-2 text-xl rounded-md"
					/>
				</div>
				<div className="flex items-center gap-2 mt-2 justify-center bg-red-500">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						id="email"
						className="border-2 border-black p-2 text-xl rounded-md"
					/>
				</div>
				<div className="flex items-center gap-2 mt-3 justify-center">
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						value={form.message}
						onChange={handleChange}
						cols="30"
						rows="4"
						className="border-2 border-black p-2 text-xl rounded-md"
					></textarea>
				</div>
				<button className="bg-blue-500 text-white mt-3 py-1 px-4 rounded-lg hover:bg-green-500  hover:text-black ">
					Submit
				</button>
			</form>
		</>
	);
};
