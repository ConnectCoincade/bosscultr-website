import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom';
import Home from '../components/home/Home';
import Page404 from '../components/Page404/Page404'




const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/*' element={<Navigate to='/' />} /> 
         {/* <Route path='/*' element={<Page404/>} /> */}
    </Routes>
  )
}

export default Routing