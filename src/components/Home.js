import React from 'react';
import { SiCss3, SiGithub, SiJavascript, SiReact } from 'react-icons/si'
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

const Home = () => {
    return (
        <div className=''>
            <h1 className='text-6xl mt-16 mb-16 '>Welcome to <span className='font-mono font-medium'>BRAINSTORM</span></h1>

            <p className='max-w-sm md:max-w-xl mx-auto my-10 text-xl'>An interactive website to learn new information and to sharpen your previous memory on
                <div className='flex justify-center space-x-3'> <SiReact className='my-1' />
                    <p> React, </p>
                    <SiJavascript className='my-1 h-4 w-4' />
                    <p> JavaScript, </p>
                    <SiGithub className='my-1 h-4 w-4' />
                    <p>GitHub, </p>
                    <SiCss3 className='my-1 h-4 w-4' />
                    <p>CSS</p>
                </div>
                and many more.... </p>

            <div>  <Player
                src='https://assets2.lottiefiles.com/packages/lf20_inti4oxf.json'
                className="player h-96 w-96"
                loop
                autoplay
            /></div>


            <p className='text-3xl my-16 max-w-xl mx-auto px-4'>Let Our Journey Begin</p>

            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> <Link to="/quiz">Start</Link></button>

        </div>
    );

};

export default Home;