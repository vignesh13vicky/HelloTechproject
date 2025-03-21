import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
   <>
   <div className="container-fluid error-page d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <h2 className="fw-semibold">Oops! Page Under Construction</h2>
      <p className="lead">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link to="/" className="btn btn-primary btn-lg mt-3">Go Back Home</Link>
    </div>
   </>
  )
}

export default Error
