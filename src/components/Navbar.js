import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({onSearch , cartItemCount }) => {
  const [searchQuery , setSearchQuery] =useState ('');
  const handleSubmit = () => {
    if(searchQuery.trim().length){
      onSearch(searchQuery.trim())
    }
    setSearchQuery('')
  }
  return (
    <>
    <div className='wrapper'>
      <div className='container'>
        <div className='header py-2'>
          <div className='grid'>
            <Link to="/" className='link'>
              <h1 className='brand'>E-commerce</h1>
            </Link>
            <div className='formContainer'>
              <form className='search'>
                <div className='form-control'>
                  <input type='text' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder='Search Products....'/>
                </div>
                <button type='button' className='search-btn' onClick={handleSubmit}>Search</button>
                </form>
            </div>
            {/* Cart Icon */}
            <Link to="/cart" className='link headerCart'>
              <img className='cartImg' src="/cart60.png" alt="cart"/>
              {/* Cart item Count Code */}
              {cartItemCount > 0 && (

                <div className='cartCounter'>{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
               ) }
            </Link>
          </div>
        </div>
        </div>     
      </div>
    </>
  )
}

export default Navbar
