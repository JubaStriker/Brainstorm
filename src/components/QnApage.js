import React from 'react';
import { AiOutlineEye } from 'react-icons/ai'

const QnApage = ({ question }) => {
    console.log(question);
    return (
        <div className='mx-10'>

            <div className="block p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 mx-auto my-5">
                <div className='flex justify-between gap-4'>
                    <p className="font-normal text-slate-900-700">{question.question} </p>
                    <button title='click to see correct answer'><AiOutlineEye /></button>
                </div>
            </div>

        </div>
    );
};

export default QnApage;