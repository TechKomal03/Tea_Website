import React, { useState } from 'react';
import './Category.css';
import { newproduct } from '../data/data';

const Category = () => {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState('Hot Trend');

  // Filter products based on the selected category
  const filteredProducts = newproduct.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div>
      <div className='container-fluid'>
      <div className="row">
        <div className="col-xl-12" id='catid'>
       
          <h1 onClick={() => setSelectedCategory('Hot Trend')} style={{ cursor: 'pointer', color: selectedCategory === 'Hot Trend' ? 'red' : 'black' }}>
            Hot Trend
          </h1>
          <h1 onClick={() => setSelectedCategory('Top Rating')} style={{ cursor: 'pointer', color: selectedCategory === 'Top Rating' ? 'red' : 'black' }}>
            Top Rating
          </h1>
          <h1 onClick={() => setSelectedCategory('Featured Products')} style={{ cursor: 'pointer', color: selectedCategory === 'Featured Products' ? 'red' : 'black' }}>
            Featured Products
          </h1>
        </div>
      
        {filteredProducts.map((teaitem, index) => (
          <div className="col-xl-3 mt-lg-4 mt-sm-0" key={index}>
            <div className="card teacard">
              <img src={teaitem.img} className="card-img-top proimg1" alt="..." />
              <img src={teaitem.img2} className="card-img-top proimg2" alt="..." />
              <div className="card-body">
                <p className="card-text">{teaitem.title}</p>
                <h3 className='price'>{teaitem.price}<span>{teaitem.cutprice}</span></h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
      <div className='container-fluid'>
      <div className="row mb-5 mt-5">
        <div className="col-xl-12 stor"  style={{ backgroundImage: `url('image/image_382.jpg')`, }} >
        
       <div className="row px-4 py-xl-5 py-sm-3">
       <div className="col-xl-3 text py-4" >
        
        <h1 className='sp'>Support</h1>
        <h2 className='find'>Find Our Stores</h2>
        <p>Need assistant Give? us a call. <br />
          <span>1800 1234 1234</span>
        </p>
        <p>Monday-Friday <br />
        <span>9:00 AM to 8:00 PM</span>
        </p>
        <p>central european time <br />
       
        </p>

       </div>
        <div className="col-xl-3">
        <div className="card place" >
  <img src="image/canva-brown-wooden-table-near-store-MAEN4hxT3aA.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Moscow</p>
  </div>
</div>
        </div>
        <div className="col-xl-3">
        <div className="card place" >
  <img src="image/image_435.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">South Carolina</p>
  </div>
</div>
        </div>
        <div className="col-xl-3">
        <div className="card place" >
  <img src="image/Spiritea-New_Practice_Studio-7.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">London</p>
  </div>
</div>
       </div>
        </div>
        
        </div>
      </div>
      </div>
   <div className="container-fluid">
      <div className="row  footer  ">
        <div className="col-xl-3 ftoor">
          <img src="image/teataste_logo.png" alt="" />

          <p>Praesent nec nisl a purus <br /> blandit viverra. <br /> Pellentesque habitant morbi <br /> tristique senectuse.</p>

          <input type="text" placeholder='Your email address'/><button type='button'><i class="fa fa-envelope" aria-hidden="true"></i></button>

          <h4 className='footericon d-flex gap-3'>
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-pinterest-p" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          </h4>
        </div>
        <div className="col-xl-3 ftoor">
          <h2>Info</h2>
          <ul>
            <li>Custom Service</li>
            <li>F.A.Q.'s</li>
            <li>Ordering Tracking</li>
            <li>Contact Us</li>
            <li>Events</li>
            <li>Popular</li>
          </ul>
        </div>
        <div className="col-xl-3 ftoor">
        <h2>Service</h2>
          <ul>
            <li>Sitemap</li>
            <li>Privacy Policy</li>
            <li>Your Account</li>
            <li>Advanced Search</li>
            <li>Term & Condition</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col-xl-3 ftoor">
        <h2>Account</h2>
          <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Discount</li>
            <li>Custom Service</li>
            <li>Term & Condition</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Category;
