import React, { createContext, useState } from 'react';

const MainContext = createContext();


const Main = (props) => {

    const [count,setCount] = useState(0);

    return (
        <MainContext.Provider value={
            {
                count,setCount
            }
        }>
          {props.children}  
        </MainContext.Provider>
    );
}

export default Main;
export {MainContext};
