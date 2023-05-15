import React, { useContext } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";

import { myRoutes } from '../router/router';

const AppRouter = () => {
  return (
    <Routes>
        {myRoutes.map(route => 
            <Route path={route.path} element={route.component} exact={route.exact} key={route.path}/>
        )}
        <Route path="*" element={<Navigate replace to ="/" />}/>
        {/* <Route path="/error" element={<Error />} /> */}
    </Routes>

  )
}

export default AppRouter