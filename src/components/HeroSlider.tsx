import sliderImg1 from "../assets/images/hero-slider/slider.png";
import sliderImg2 from "../assets/images/hero-slider/slider-2.webp";
import { Link } from "react-router-dom";

export default function HeroSlider() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-screen">
        <img src={sliderImg1} className="w-full object-cover brightness-50" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 px-6 left-auto md:left-1/4 top-1/2 flex-col  text-slate-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Flat Upto 15% Off
          </h2>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-3">
            Get Your Latest <br /> Horror Collections
          </h2>
          <h2 className="text-base font-bold w-1/2 mt-3">
            Hrese bgerse dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <Link to="/all-books">
            <button className="btn btn-neutral mt-12 w-52 rounded-none">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-screen">
        <img src={sliderImg2} className="w-full object-cover brightness-50" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 px-6 left-auto md:left-1/4 top-1/2 flex-col text-slate-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Flat Upto 15% Off
          </h2>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-3">
            Get Your Latest <br /> Horror Collections
          </h2>
          <h2 className="text-base font-bold w-1/2 mt-3">
            Hrese bgerse dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <Link to="/all-books">
            <button className="btn btn-neutral mt-12 w-52 rounded-none">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
