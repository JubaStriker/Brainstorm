import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const QnApage = ({ question }) => {

    const [open, setOpen] = useState(false);
    const [match, setMatch] = useState(false)
    const [marks, setMarks] = useState(0);
    const [attempts, setAttempts] = useState(0)


    const checkAns = (selected, correct) => {
        if (selected === correct) {
            setMatch(!correctAns)
            setMarks(marks + 1)
            setAttempts(attempts + 1)
        }
        else {
            setAttempts(attempts + 1)
        }
    }

    let correctAns;
    if (open) {
        correctAns = <p className="font-normal text-slate-900-700 block p-6 max-w-xl  bg-green-300 rounded-lg border hover:bg-green-500 shadow-md hover:bg-gray-100 mx-auto my-5 "> {question.correctAnswer}</p>
    }

    let toast;

    if (match) {

        toast = <p>Your Answer is Correct</p>

    };

    return (
        <div>
            <div className='mx-10 my-16'>

                <div className="block p-6 max-w-2xl bg-teal-100 rounded-lg border border-gray-200 shadow-md hover:bg-teal-300 mx-auto my-5">
                    <div className='flex justify-between gap-4'>
                        <p className="font-medium font-serif text-lg text-slate-900-700">{question.question} </p>
                        <button onClick={() => setOpen(!open)} title='click to see correct answer'><AiOutlineEye /></button>
                    </div>
                </div>
                <div>
                    {question.options.map(option => <div>
                        <p onClick={() => checkAns(option, question.correctAnswer)}
                            className="font-normal text-slate-900-700 block p-6 max-w-lg  bg-sky-100 rounded-lg border hover:bg-sky-300 shadow-md hover:bg-gray-100 mx-auto my-5 "> {option}</p>
                    </div>)}
                </div>
                {correctAns}
                {toast}


            </div>

            <div>Marks : {marks}</div>
            <div>Attempts: {attempts}</div>
        </div>
    );
};

export default QnApage;