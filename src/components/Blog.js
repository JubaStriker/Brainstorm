import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Blog = () => {
    return (
        <div className='mx-auto'>
            <div>
                <div>

                </div>
                <div>
                    <p class="mb-3 font-light text-slate-800 dark:text-slate-800 text-xl md:text-5xl"><svg aria-hidden="true" className="w-10 h-10 text-gray-400 dark:text-gray-600 mx-20" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>What is the purpose of <strong class="font-semibold text-gray-900 dark:text-slate-800">react router</strong>?</p>
                </div>
                <div >
                    <p className='mx-auto my-9 md:text-3xl max-w-md md:max-w-4xl px-5'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    </p>
                </div>
            </div>

            <div>
                <div className='mt-36'>
                    <p class="mb-3 font-light text-slate-800 dark:text-slate-800 text-xl md:text-5xl"><svg aria-hidden="true" className="w-10 h-10 text-gray-400 dark:text-gray-600 mx-20" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>How does<strong class="font-semibold text-gray-900 dark:text-slate-800"> context API </strong>work ?</p>
                </div>
                <div  >
                    <p className='mx-auto my-9 md:text-3xl max-w-md md:max-w-4xl px-5'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    </p>
                </div>
            </div>

            <div>
                <div className='mt-36'>
                    <p class="mb-3 font-light text-slate-800 dark:text-slate-800 text-xl md:text-5xl"><svg aria-hidden="true" className="w-10 h-10 text-gray-400 dark:text-gray-600 mx-20" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>What is<strong class="font-semibold text-gray-900 dark:text-slate-800"> useRef</strong> in react ?</p>
                </div>
                <div  >
                    <p className='mx-auto my-9 md:text-3xl max-w-md md:max-w-4xl px-5'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. UseRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;