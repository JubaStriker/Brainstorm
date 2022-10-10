import React from 'react';
import { } from 'react-icons'

const Home = () => {
    return (
        <div>
            <h1 className='text-6xl mt-16 mb-16 '>Welcome to <span className='font-mono font-medium'>BRAINSTORM</span></h1>

            <p className='max-w-xl mx-auto my-10 text-xl'>An interactive website to learn new information and to sharpen your previous memory on React, JavaScript, CSS and many more </p>


            <p className='text-3xl my-16 max-w-xl mx-auto px-4'>Let Our Journey Begin</p>

            <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> <a href="/quiz">Start</a></button>

        </div>
    );

};

export default Home;