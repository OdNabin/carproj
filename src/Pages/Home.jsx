import React from 'react';
import car from '../assets/header1.png'; // Ensure the path to the image is correct
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import circle from '../assets/circle.png';
import icon from '../assets/icon.png';
import Slidecon from '../Component/Slidecon';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div>
      {/* Car image */}
      <div className='banner-bg'>
        <img src={car} alt="Car" className='banner' />
      </div>

      {/* Slider section */}
      <div className='container'>
      <div className="our_blessing my-4">
        <h1 className="text-center mb-4">Our Blessings</h1>

        <Slider {...settings} className='slider'>
  <div className="slide-box">
   <Slidecon></Slidecon>

<p className='text-center p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi quae, accusamus quis nemo exercitationem cumque labore? Voluptate, vitae dolor! Ullam neque deserunt deleniti repudiandae!</p>
  </div>
  <div className="slide-box">
  <Slidecon></Slidecon>
<p className='text-center p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi quae, accusamus quis nemo exercitationem cumque labore? Voluptate, vitae dolor! Ullam neque deserunt deleniti repudiandae!</p>
  </div>
  <div className="slide-box">
  <Slidecon></Slidecon>
<p className='text-center p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi quae, accusamus quis nemo exercitationem cumque labore? Voluptate, vitae dolor! Ullam neque deserunt deleniti repudiandae!</p>
  </div>
  <div className="slide-box">
  <Slidecon></Slidecon>
<p className='text-center p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi quae, accusamus quis nemo exercitationem cumque labore? Voluptate, vitae dolor! Ullam neque deserunt deleniti repudiandae!</p>
  </div>
  <div className="slide-box">
  <Slidecon></Slidecon>

<p className='text-center p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi quae, accusamus quis nemo exercitationem cumque labore? Voluptate, vitae dolor! Ullam neque deserunt deleniti repudiandae!</p>
  </div>
  <div className="slide-box">
  <Slidecon></Slidecon>

<p className='text-center p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi quae, accusamus quis nemo exercitationem cumque labore? Voluptate, vitae dolor! Ullam neque deserunt deleniti repudiandae!</p>
  </div>
  <div className="slide-box">
  <Slidecon></Slidecon>
 
<p className='text-center p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi quae, accusamus quis nemo exercitationem cumque labore? Voluptate, vitae dolor! Ullam neque deserunt deleniti repudiandae!</p>
  </div>
  <div className="slide-box">
  <Slidecon></Slidecon>
<p className='text-center p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi quae, accusamus quis nemo exercitationem cumque labore? Voluptate, vitae dolor! Ullam neque deserunt deleniti repudiandae!</p>
  </div>
</Slider>
      </div>
      </div>
      {/* Placeholder for additional content */}
      <div className='container'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ab consequuntur blanditiis accusamus vel sequi assumenda, laborum, placeat culpa provident officiis rem veritatis, laboriosam repellat laudantium! Mollitia, consequatur. In incidunt illo voluptatum numquam nihil veritatis porro, qui quae sunt ipsa autem totam. Suscipit tenetur harum minus consequatur nam fugiat incidunt animi velit obcaecati soluta! Quasi repudiandae nesciunt ut quae architecto tempore temporibus dolor ea at natus blanditiis iusto doloribus soluta mollitia incidunt maiores, voluptatum dolore cum facere voluptates possimus laboriosam vero! Dolor, earum beatae quaerat omnis ad esse, culpa a cum quis, consectetur ab eaque velit saepe veritatis impedit similique fuga laboriosam tempora aperiam neque animi hic nesciunt alias. Quo beatae eius excepturi ex tenetur ipsum? Maxime a, dolor voluptatem libero nihil blanditiis cumque ipsa molestias mollitia consequuntur ullam vitae ad necessitatibus officiis quod? Repellendus dignissimos consequatur officiis voluptatibus mollitia fuga in, praesentium eveniet dolore exercitationem recusandae excepturi beatae fugit dolor error, vel quam magni quae officia doloremque! Maiores et ipsum recusandae explicabo? Ipsa cupiditate architecto dolor, eaque amet labore aliquam? Nesciunt harum cupiditate eos dolorum blanditiis explicabo perspiciatis natus. Quaerat nam accusantium quisquam! Eius, vitae adipisci similique incidunt dolor voluptates ex laboriosam, numquam rerum eaque reiciendis iusto earum tempore!</p>
      </div>
      <div className='parent'>
        <div className='child'>
        </div>
      </div>
    </div>
  );
};
export default Home;
