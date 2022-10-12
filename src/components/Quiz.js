import { useLoaderData } from 'react-router-dom';
import TopicCard from './TopicCard';
import './Styles/Quiz.css'


const Quiz = () => {

    const quizData = useLoaderData();
    const topics = quizData.data;




    return (
        <div >
            <h1 className='text-6xl mb-16'>Select Your Desired Quiz</h1>
            <div className='flex justify-center'><div className='topic-card' >
                {topics.map(topic => <TopicCard key={topic.id} topic={topic}></TopicCard>)}
            </div></div>

        </div>


    );
};

export default Quiz;