import React from 'react';
import { Link } from 'react-router-dom';

const TopicCard = ({ topic }) => {
	console.log(topic);
	return (
		<div>
			<div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 m-5">
				<img src={topic.logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
				<div className="flex flex-col justify-between p-6 space-y-8">
					<div className="space-y-2">
						<h2 className="text-3xl font-semibold tracking-wide">{topic.name}</h2>

					</div>
					<button >
						<Link to={`/quiz/${topic.id}`}
							className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Start Quiz</Link>

					</button>
					<div>Total Questions : {topic.total}</div>
				</div>
			</div>
		</div>
	);
};

export default TopicCard;