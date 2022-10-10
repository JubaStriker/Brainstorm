import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from './TopicCard';
import './Styles/Quiz.css'

const Quiz = () => {

    const quizData = useLoaderData();
    const topics = quizData.data;
    console.log(topics);


    return (
        <div >
            <h1 className='text-6xl mb-16'>Select Your Desire Quiz</h1>
            <div className='flex justify-center'><div className='topic-card' >
                {topics.map(topic => <TopicCard key={topic.id} topic={topic}></TopicCard>)}
            </div></div>
        </div>

    );
};

export default Quiz;