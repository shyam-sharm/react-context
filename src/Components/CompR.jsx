import React, { useContext } from 'react';
import Main, { MainContext } from '../Context/Main';

const CompR = () => {
    const {count,setCount} = useContext(MainContext);
    return (
        <div>
            Comp R
            <button onClick={() => setCount(count-1)}>Desc</button>
            <button onClick={() => setCount(count+1)}>Inc</button>
        </div>
    );
}

export default CompR;
