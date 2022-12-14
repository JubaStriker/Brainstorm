import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { Player } from '@lottiefiles/react-lottie-player';

const QnApage = ({ question }) => {

    const htmlQues = question.question;
    console.log(htmlQues);
    const strQuestion = htmlQues.replace(/(<([^>]+)>)/ig, '');
    console.log(strQuestion);

    const [open, setOpen] = useState(false);
    const [match, setMatch] = useState(0);


    const checkAns = (selected, correct) => {
        if (selected === correct) {
            if (match === 0) {
                setMatch(match + 1)
            }
            if (match === 1) {
                setMatch(match + 0)
            }
            if (match === 2) {
                setMatch(match - 1)
            }
        }
        else {
            if (match === 0) {
                setMatch(match + 2)
            }
            if (match === 1) {
                setMatch(match + 1)
            }
            if (match === 2) {
                setMatch(match - 0)
            }

        }
    }

    let correctAns;
    if (open) {
        correctAns = <p className="font-normal text-slate-900-700 block p-6 max-w-xl  bg-green-300 rounded-lg border hover:bg-green-500 shadow-md hover:bg-gray-100 mx-auto my-5 ">
            Correct answer is : <span className='text-lg'>{question.correctAnswer}</span></p>
    }

    let toast;


    if (match === 1) {
        toast = <p className='text-green-600 font-medium text-lg flex justify-center'>Your Answer is Correct.
            <Player
                src='https://assets3.lottiefiles.com/packages/lf20_9aa9jkxv.json'
                className="player h-8 w-8"
                loop
                autoplay
            /></p>


    }
    if (match === 2) {
        toast = <p className='text-red-600 font-medium text-lg flex justify-center'>Your Answer is wrong!!!
            <Player
                src='https://assets3.lottiefiles.com/packages/lf20_j3yti031.json'
                className="player h-8 w-8"
                loop
                autoplay
            />
        </p>
    }
    if (match === 0) {
        toast = <p ></p>
    };

    return (
        <div>
            <div className='mx-10 my-16'>

                <div className="block p-6 max-w-2xl bg-teal-100 rounded-lg border border-gray-200 shadow-md hover:bg-teal-300 mx-auto my-5">
                    <div className='flex justify-between gap-4'>
                        <p className="font-medium font-serif text-lg text-slate-900-700">{strQuestion} </p>
                        <button onClick={() => setOpen(!open)} title='click to see correct answer'><AiOutlineEye /></button>
                    </div>
                </div>
                <div>
                    {question.options.map(option => <div key={option.toString()}>
                        <p onClick={() => checkAns(option, question.correctAnswer)}
                            className="font-normal text-slate-900-700 block p-6 max-w-lg  bg-sky-100 rounded-lg border hover:bg-sky-300 shadow-md hover:bg-gray-100 mx-auto my-5 "> {option}</p>
                    </div>)}
                </div>
                {correctAns}
                {toast}


            </div>


        </div>
    );
};

export default QnApage;