import React from 'react'

const Hero = () => {
    return (
        <main className='hero container'>
            <div className="heroContent">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam temporibus consectetur deleniti, nam dolor voluptates saepe eaque odit illo praesentium.</p>

                <div className="herobtn">
                    <button>Shop Now</button>
                        <button className='catbtn'>
                            Category
                        </button>
                </div>
                <div className="shopping">
                    <p>Also Available on</p>
                </div>

                <div className="brandicon">
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="flipkart" />
                </div>

            </div>

            <div className="heroImage">
        <img src="/images/hero-image.png" alt="hero image" />
            </div>
        </main>
    )
}

export default Hero
