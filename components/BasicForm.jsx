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
			<form
				className="flex flex-col w-3/6 mx-auto p-10 rounded-lg"
				onSubmit={handleSubmit}
			>
				<div className="flex items-center gap-2 justify-start ">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="name"
						id="name"
						value={form.name}
						onChange={handleChange}
						className="ml-4 border-2 border-black p-2 text-xl rounded-md w-full"
					/>
				</div>
				<div className="flex items-center gap-2 mt-2 justify-start ">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						id="email"
						className="ml-6 border-2 border-black p-2 text-xl rounded-md w-full"
					/>
				</div>
				<div className="flex items-center gap-2 mt-3 justify-start">
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						value={form.message}
						onChange={handleChange}
						cols="30"
						rows="4"
						className="border-2 border-black p-2 text-xl rounded-md w-full"
					></textarea>
				</div>
				<button className="mx-auto w-1/4 bg-blue-500 text-white mt-5 py-1 px-4 rounded-lg hover:bg-green-500  hover:text-black ">
					Submit
				</button>
			</form>

			<div className="flex flex-col w-3/6 mx-auto p-10 rounded-lg">
				<h1 className="text-4xl font-bold">Confirm your info!</h1>
				<div className="flex flex-col gap-2">
					<p className="text-xl">Name: {form.name}</p>
					<p className="text-xl">Email: {form.email}</p>
					<p className="text-xl">Message: {form.message}</p>
				</div>
			</div>
		</>
	);
};
