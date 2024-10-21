import React, { useState } from 'react';
import ServerReader from './serverreader';
import Pimpscripting2 from './pimpscrimpting2';


const ParentCool = () => {
    const [data, setData] = useState(null);

    return (
        <div>
            <ServerReader setData={setData} />
            <Pimpscripting2 data={data} />


        </div>
    );
}

export default ParentCool;

