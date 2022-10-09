import Image from 'next/image';
import React from 'react';

// create an array of tags
const tags = [
	'photography',
	'travel',
	'winter',
	'summer',
	'spring',
	'autumn',
	'travel',
	'sunset',
];

const UserCard = () => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg shadow-slate-600 ">
			<span className="flex p-2 items-center gap-4">
				<Image
					src="https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3Vuc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
					alt="avatar"
					width={50}
					height={50}
					className="rounded-full"
				/>
				<div className="font-bold text-xl mb-2">The Coldest Sunset</div>
			</span>
			<div className="px-6 py-4">
				<p className="text-gray-700 text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
					quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
					nihil.
				</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				{tags.map((tag, i) => (
					<span
						key={i}
						className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
					>
						#{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default UserCard;
