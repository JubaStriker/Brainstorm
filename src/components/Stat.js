import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';



const Stat = () => {

    const loadedData = useLoaderData()
    const data = loadedData.data

    return (
        <div>
            <h1 className='text-center text-3xl m-10'>Overview of the number of the questions per quiz</h1>
            <div className='flex justify-center'><LineChart width={600} height={300} data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart></div>
        </div>
    );
};

export default Stat;