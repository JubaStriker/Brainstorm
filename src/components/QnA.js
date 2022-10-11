import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MarksContext } from './NavBar';
import QnApage from './QnApage';

const QnA = () => {
    const qna = useLoaderData();


    const { data } = qna;


    return (
        <div>
            <h1 className='flex justify-center items-center gap-2'>
                <div className='bg-slate-400 rounded-md'><img src={data.logo} alt="" height={100} width={100} /></div>
                <div><p className="text-5xl font-extrabold text-slate-800">{data.name}</p>
                    <p className='text-sm mt-2'>How much do you know about it?</p>
                </div>
            </h1>

            <div>
                {data.questions.map(question => <QnApage key={question.id} question={question}
                ></QnApage>)}

            </div>
            <div></div>


        </div>
    );
};

export default QnA;