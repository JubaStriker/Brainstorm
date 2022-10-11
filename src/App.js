import { RouterProvider } from 'react-router-dom';
import './App.css';
import { createBrowserRouter } from "react-router-dom";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Main from './components/Main';
import Stat from './components/Stat';
import Quiz from './components/Quiz';
import QnA from './components/QnA';




function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [{
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'stat',
        element: <Stat />
      },
      {
        path: 'quiz',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Quiz />
      },
      {
        path: 'quiz/:quizID',
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`)
        },
        element: <QnA />
      }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
