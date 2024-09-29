import React from 'react'
import {useRouteError} from 'react-router-dom'
const ErrorPage = () => {
    const err = useRouteError()
    console.log(err)
  return (
    <div>
        <h1>Oops something went wrong!</h1>
        <h4>{err.status} - {err.statusText}</h4>
    </div>
  )
}

export default ErrorPage