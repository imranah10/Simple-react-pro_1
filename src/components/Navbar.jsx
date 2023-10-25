import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className='container'>
                <div className="log">
                    <img src="/images/brand_logo.png" alt="" />
                </div>

                <ul>
                    <li href="#">Home</li>
                    <li href="#">Contact</li>
                    <li href="#">About</li>
                    <li href="#">Location</li>
                </ul>
                <button>Login</button>
            </nav>
    </div>
  )
}

export default Navbar
