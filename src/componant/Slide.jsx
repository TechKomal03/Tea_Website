import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

const Slide = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target;

    const x = (offsetX / clientWidth - 0.5) * 30; // Adjust the multiplier for effect strength
    const y = (offsetY / clientHeight - 0.5) * 30;

    setPosition({ x, y });
  };

  const maptea = [
    {
      img: "image/image_372_d02a1f46-7255-4755-8deb-4e8c1aedf85a.jpg",
      title: "Brew Bliss"
    },
    {
      img: "image/image_370.jpg",
      title: "Calm Cup"
    },
    {
      img: "image/image_372_7f3cafbf-581a-4d43-8d96-9de286972081.jpg",
      title: "Tea Oasis"
    },
    {
      img: "image/image_372_765424c8-a033-4aaa-b2a7-31916afab06b.jpg",
      title: "Leaf Nest"
    },
    {
      img: "image/image_372.jpg",
      title: "Pure Sip"
    },
  ];

  const teaproduct = [
    {
      img: "image/Barian-Tea-1.jpg",
      img2: "image/Barian-Tea-3.jpg",
      title: "  Butterfly Pea Flower Tea",
      price: "$60.00 ",
      cutprice: "$70.00 ",
    },

    {
      img: "image/Black-Currant-Tea-1.jpg",
      img2: "image/Black-Currant-Tea-2.jpg",
      title: "Butterfly Pea Flower Tea",
      price: "$60.00 ",
      cutprice: "$70.00 "
    },

    {
      img: "image/Butterfly-Pea-Flower-Tea-1_f7b52727-8af4-4ab3-8e46-2c3f4588f4ad.jpg",
      img2: "image/Butterfly-Pea-Flower-Tea-2_72a686d0-1a24-4c9d-abf7-c08e798ef966.jpg",
      title: "Butterfly Pea Flower Tea",
      price: "$60.00 ",
      cutprice: "$70.00 "
    },

    {
      img: "image/Cadion-Tea-1.jpg",
      img2: "image/Cadion-Tea-2.jpg",
      title: "Butterfly Pea Flower Tea",
      price: "$60.00 ",
      cutprice: "$70.00 "
    },

    {
      img: "image/Chocolate-Conniption-Tea-1.jpg",
      img2: "image/Chocolate-Conniption-Tea-2.jpg",
      title: "Butterfly Pea Flower Tea",
      price: "$60.00 ",
      cutprice: "$70.00 "
    },

    {
      img: "image/High-Mountain-Li-Shan-1_47a9fe44-1afc-4cc7-ab72-c09e14caea50.jpg",
      img2: "image/High-Mountain-Li-Shan-2_9d7d29e3-4b42-4027-bac0-dc43ce8dc86a.jpg",
      title: "Butterfly Pea Flower Tea",
      price: "$60.00 ",
      cutprice: "$70.00 "
    },

    {
      img: "image/Sencha-Kyoto-Cherry-Rose-1.jpg",
      img2: "image/Sencha-Kyoto-Cherry-Rose-2.jpg",
      title: "Butterfly Pea Flower Tea",
      price: "$60.00 ",
      cutprice: "$70.00 "
    },

    {
      img: "image/Bi-Luo-Chun-Green-Tea-1.jpg",
      img2: "image/Bi-Luo-Chun-Green-Tea-2.jpg",
      title: "Butterfly Pea Flower Tea",
      price: "$60.00 ",
      cutprice: "$70.00 "
    },
  ]
  return (
    <>
      <div className='sliderdiv'>
      <div className="sliderbox ">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="image/slideshow.png" className="d-block " alt="First slide" />
              <div className="carousel-caption ">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="image/tea-3_1.png" className="d-block " alt="Second slide" />
              <div className="carousel-caption ">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
                  
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="row mb-5">
        <div className="col-xl-12 teacat">
          {maptea.map((item, index) => (
            <div className='divCircle'>
              <div className="circletea" key={index}>
                <img src={item.img} alt="tea" />
              </div>
              <h3>{item.title}</h3> {/* Moved inside the parent div */}
            </div>
          ))}
        </div>

      </div>
      </div>

      <div className='container-fluid'>
      <div className="row mt-5">
        <div className="col-xl-12">
          <h2 className='headtxt'>WHAT TASTE INSPIRE YOU ?</h2>
        </div>
        {teaproduct.map((teaitem, index) => (
          <div className="col-xl-3  mt-5">
            <div className="card teacard" >
              <img src={teaitem.img} class="card-img-top proimg1" alt="..." />
              <img src={teaitem.img2} class="card-img-top proimg2" alt="..." />
              <div className="card-body ">
                <p className="card-text">{teaitem.title}</p>
                <h3 className='price'>{teaitem.price}<span>{teaitem.cutprice}</span></h3>
              </div>
            </div>
          </div>
        ))}


      </div>
      </div>
        
        <div className='container-fluid'>
      <div className="row">
        <div className="col-xl-12 teagraden mb-4 mt-4" style={{ backgroundImage: `url('image/image_433.png')`, }} onMouseMove={handleMouseMove} >
          <img
            src="image/11.png"
            alt=""
            className='backpng'
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          />
          <img
            src="image/22_3a6c5d2e-3659-445e-9796-3425abe422e6.png"
            alt="" className='backpng'
            style={{ transform: `translate(${position.x * -1}px, ${position.y * -1}px)` }}
          />
          <img
            src="image/33.png"
            alt=""
            className='backpng'
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          />
          <img
            src="image/44.png"
            alt=""
            className='backpng'
            style={{ transform: `translate(${position.x * -1}px, ${position.y * -1}px)` }}
          />

          <div className="card gardentxt" >
            <div className="card-body">

              <h5 className="card-title">Natural Green Tea</h5>
              <p className="card-text">
                Discover the pure essence of natural green tea with our premium selection. Each cup offers a refreshing and invigorating experience, rich in antioxidants.</p>
              <button className='shopbtn'>
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="container-fluid">
        <div className="row mb-5 mt-5">
          <div className="col-xl-4" style={{ overflow: "hidden" }}>
            <img src="image/image_434.png" alt="" className='women' />
          </div>
          <div className="col-xl-4">

            <div className="card text-center" style={{ border: 'none', }}>
              <h5 className="card-header">EXPERIENCE</h5>
              <div className="card-body">
                <h5 className="card-title sub">Healthy <br /> Green Tea</h5>
                <p className="card-text subp mb-4">Discover the finest selection of green tea at PureLeaf Green Tea Shop, where quality meets tradition. Our carefully curated collection features a diverse range of green teas, sourced from the most renowned tea gardens around the world. Each tea is selected for its exceptional flavor, aroma, and health benefits.</p>
                <button className='shopbtn12 '>
                 ALL PRODUCT
                </button>
              </div>
            </div>

          </div>
          <div className="col-xl-4">
            <img src="image/canva-a-woman-drinking-tea-at-her-home-office-MAEffAeVaYE.jpg" alt="" className='women' />
          </div>
        </div>
      </div>


    </>
  );
};



export default Slide;
