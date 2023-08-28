import React from 'react'
import { Link } from 'react-router-dom'
 
const notFound = () => {
  return (
    <>
       <div className="container">
            <div className="product py-2">
                <div className="details p-3">
                   Oops!! Page not found. Go to{" "}
                    <Link to="/" replace>
                        homepage
                    </Link>
                    .
                </div>
            </div>
        </div>
    </>
  )
}

export default notFound
