import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homepage.css";

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="homepage">
      {/* Carousel */}
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src="/Images/graypink.png" alt="Slide 1" />
          </div>
          <div>
            <img src="/Images/retro.png" alt="Slide 2" />
          </div>
          <div>
            <img src="/Images/slide2.png" alt="Slide 3" />
          </div>
        </Slider>
      </div>

      {/* Categories Section */}
      <h1 className="section-title">All Categories</h1>
      <div className="categories">
        <div className="category-item">
          <img src="/Images/grocery1.jpg" alt="Grocery" />
          <NavLink to="/grocery">Grocery</NavLink>
        </div>
        <div className="category-item">
          <img src="/Images/clothing.jpg" alt="Clothing" />
          <NavLink to="/men">Clothing</NavLink>
        </div>
        <div className="category-item">
          <img src="/Images/electronic.jpg" alt="Electronics" />
          <NavLink to="/electronics">Electronics</NavLink>
        </div>
        <div className="category-item">
          <img src="/Images/aqualogica.jpg" alt="Beauty" />
          <NavLink to="/beauty">Beauty & Health</NavLink>
        </div>
        <div className="category-item">
          <img src="/Images/bags.jpg" alt="Bags" />
          <NavLink to="/bags">Bags</NavLink>
        </div>
        <div className="category-item">
          <img src="/Images/footware.jpg" alt="Footwear" />
          <NavLink to="/footware">Footwear</NavLink>
        </div>
      </div>

      {/* Products Section */}
      <h2 className="section-title">Shop by Categories</h2>
      <div className="card-container">
        {[
          { img: "alia.jpg", title: "Lehenga", discount: "Upto 40% off", link: "/women" },
          { img: "yami1.jpg", title: "Women Casuals", discount: "Upto 25% off", link: "/women" },
          { img: "men-ethnic.jpg", title: "Men Ethnic", discount: "Upto 50% off", link: "/men" },
          { img: "shaheer.jpg", title: "Men Casual", discount: "Upto 30% off", link: "/men" },
          { img: "virat.jpeg", title: "Casual Shoes", discount: "Upto 50% off", link: "/footware" },
          { img: "aditi2.png", title: "Women Ethnic", discount: "Upto 40% off", link: "/women" },
          { img: "jacket.png", title: "Women Jackets", discount: "Upto 35% off", link: "/women" },
          { img: "shirt.png", title: "Men Ethnic", discount: "Upto 50% off", link: "/men" },
          { img: "virat1.jpeg", title: "Casual Shoes", discount: "Upto 50% off", link: "/men" },
          { img: "shoess.jpeg", title: "Casual Shoes", discount: "Upto 50% off", link: "/footware" },
        ].map((item, index) => (
          <div key={index} className="card">
            <NavLink to={item.link}>
              <img src={`Images/${item.img}`} alt={item.title} />
            </NavLink>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="discount">{item.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
