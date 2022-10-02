import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router';

const ProtectedRoute = ({element: Element, ...rest}) => {
  const {loading, isAuthenticated, user} = useSelector((state) => state.user);

  return ( 
    <Fragment>
      {!loading &&(
        <Route 
          {...rest}
          render ={(props) => {
            if (!isAuthenticated){
              return <Navigate to="/login" />
            }
            return <Element {...props} />;
          }}
        />
      )}
    </Fragment>
  )
}

export default ProtectedRoute