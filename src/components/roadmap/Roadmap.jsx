import React, {useState} from 'react';
import RoadmapList from './RoadmapList';

const Roadmap = () => {
    const [select, setSelect] = useState(null);
    return (
      <div className=''>
        <div className='h-28'></div>
         <RoadmapList setSelect={setSelect} />
         <div className='h-28'></div>
      </div>
    )
}

export default Roadmap