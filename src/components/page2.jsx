import React, { useEffect } from 'react';
import dreamCars from './carsList.js';
import './CSS/page2.css';
import { Tooltip } from 'react-tooltip';
import LazyLoad from 'react-lazy-load';
import Page2Sec1 from './page2Sec1.jsx';
import Page2Sec2 from './Page2Sec2.jsx';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import logo1 from './ComponentAssets/MovingComponent/BMW.webp';
import logo2 from './ComponentAssets/MovingComponent/Porsche.jpg';
import logo3 from './ComponentAssets/MovingComponent/Toyota.png';
import logo4 from './ComponentAssets/MovingComponent/MB.png';
import logo5 from './ComponentAssets/MovingComponent/Hyundai.jpg';
import logo6 from './ComponentAssets/MovingComponent/Cadillac.png';
import logo7 from './ComponentAssets/MovingComponent/Maserati.png';
import logo8 from './ComponentAssets/MovingComponent/Subaru.png';
import logo9 from './ComponentAssets/MovingComponent/Volvo.png';

function Page2() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container-page2]'),
      smooth: true,
      multiplier: 1.4,
      lerp: 0.06,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <>
      <div data-scroll-container-page2>
        <Page2Sec1 />
        <div className="page2Sec2Cont">
          <div className="text-left">
            <h1 className="page2Sec2H1">My Car Garage.</h1>
            <h2 className="page2Sec2H2">Fueling my dreams.</h2>
            <p className="page2Sec2P">
              It is perhaps already evident that I'm a huge car aficionado. In
              my short 15 years of life, cars have never failed to excite me. Be
              it a striking hypercar, or a humble daily driver, I always find
              something interesting in it. I find myself spending hours and
              hours reading and contributing to car forums, configuring my dream
              Porsche, or just trying to spot an exotic vehicle.
              <br />
              <br />
              As a result, this website is car-themed, which reflects my passion
              for cars. I find Porsches and BMWs (although I'm not a fan of
              their current designs) especially alluring, and this is evident in
              the imaginary car garage which I have made here. I'm not a{' '}
              <i>huge</i> fan of supercars or excessively
              luxurious/fast/showy-looking vehicles. Instead, I prefer more
              attainable cars which will give me more smiles per mile.
              <br />
              <br />
              The creation of this garage is based on the pipe dream that I will
              be able to own all of these beauties one day. As they say, never
              say <i>never</i>. So yeah, maybe one day.
            </p>
          </div>
          <div className="text-right">
            <div className="rotated-text-container">
              <img
                className="rotated-text2"
                data-scroll
                data-scroll-speed="15"
                data-scroll-class="appear"
                data-scroll-repeat="true"
                src={logo1}
              />
              <img
                src={logo2}
                className="rotated-text"
                data-scroll
                data-scroll-speed="15"
                data-scroll-class="appear"
                data-scroll-repeat="true"
              />{' '}
              <img
                src={logo3}
                className="rotated-text2"
                data-scroll
                data-scroll-speed="15"
                data-scroll-class="appear"
                data-scroll-repeat="true"
              />{' '}
              <img
                src={logo4}
                className="rotated-text"
                data-scroll
                data-scroll-speed="15"
                data-scroll-class="appear"
                data-scroll-repeat="true"
              />{' '}
              <img
                src={logo5}
                className="rotated-text2"
                data-scroll
                data-scroll-speed="15"
                data-scroll-class="appear"
                data-scroll-repeat="true"
              />{' '}
              <img
                src={logo6}
                className="rotated-text"
                data-scroll
                data-scroll-speed="15"
                data-scroll-class="appear"
                data-scroll-repeat="true"
              />
              <img
                src={logo7}
                className="rotated-text2"
                data-scroll
                data-scroll-speed="15"
                data-scroll-class="appear"
                data-scroll-repeat="true"
              />{' '}
              <img
                src={logo8}
                className="rotated-text"
                data-scroll
                data-scroll-speed="15"
                data-scroll-class="appear"
                data-scroll-repeat="true"
              />
              <img
                src={logo9}
                className="rotated-text2"
                data-scroll
                data-scroll-speed="15"
                data-scroll-class="appear"
                data-scroll-repeat="true"
              />
            </div>
          </div>
        </div>{' '}
        <div className="card-container">
          {dreamCars.map((car) => (
            <div className="card" key={car.id}>
              <div className="card-content">
                <div className="banner-image">
                  <LazyLoad>
                    <img
                      src={car.image}
                      alt={car.name}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={car.desc}
                      data-tooltip-place="top"
                    />
                  </LazyLoad>
                </div>
                <h1 className="titleh1">{car.name}</h1>
                <p className="pricep">{car.price}</p>
              </div>
            </div>
          ))}
          <Tooltip id="my-tooltip" />
        </div>
        <div className="whitespaceDiv"></div>
      </div>
    </>
  );
}

export default Page2;
