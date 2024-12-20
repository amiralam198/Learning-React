const Hero = () => {
    return(
        <main className="hero">
            <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="sec-btn">Category</button>
        </div>
        <div className="shopping">
            <p>Also availbale on</p>
        </div>
        <div className="icon-image">
            <img src="/images/amazon.png" alt="amazon.png"/>
            <img src="/images/flipkart.png" alt="flipkart.png"/>
        </div>
            </div>
            <div className="hero-image">
                <img src="/images/hero-image.png" alt="hero-image.png"/>
            </div>
        </main>
    )
}
export default Hero;