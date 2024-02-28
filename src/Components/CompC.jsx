import React, {useContext} from 'react';
import { MainContext } from '../Context/Main';

const CompC = () => {
    const { count } = useContext(MainContext);

     return (
        <div>
            Comp C - {count}
        </div>
    );
}

export default CompC;
