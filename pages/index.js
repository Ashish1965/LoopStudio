import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Home() {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
  
  return (
    <div>
      {/* <!-- Hero Section --> */}
    <section id="hero">
      {/* <!-- Hero Container --> */}
      <div className="container max-w-6xl mx-auto px-6 py-12">
        {/* <!-- Menu/Logo Container --> */}
        <nav className="flex items-center justify-between font-bold text-white">
          {/* <!-- Logo --> */}
          <img src="images/logo.svg" alt="" />
          {/* <!-- Menu --> */}
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            <div className="group">
              <a href="#">About</a>
              <div
                className="mx-2 group-hover:border-b group-hover:border-blue-50"
              ></div>
            </div>
            <div className="group">
              <a href="#">Careers</a>
              <div
                className="mx-2 group-hover:border-b group-hover:border-blue-50"
              ></div>
            </div>
            <div className="group">
              <a href="#">Events</a>
              <div
                className="mx-2 group-hover:border-b group-hover:border-blue-50"
              ></div>
            </div>
            <div className="group">
              <a href="#">Products</a>
              <div
                className="mx-2 group-hover:border-b group-hover:border-blue-50"
              ></div>
            </div>
            <div className="group">
              <a href="#">Support</a>
              <div
                className="mx-2 group-hover:border-b group-hover:border-blue-50"
              ></div>
            </div>
          </div>
          {/* <!-- Hamburger Button --> */}
          <div className="md:hidden">
            <button
              id="menu-btn"
              type="button"
              className="z-40 block hamburger md:hidden focus:outline-none"
              onClick={handleMenu}
            >
              {open == true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* <!-- Mobile Menu --> */}
        {open ? 
          <div
          id="menu"
          className="absolute top-0 bottom-0 left-0 md:hidden flex flex-col self-end w-full min-h-min py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
        >
          <a href="#" className="hover:text-pink-500">About</a>
          <a href="#" className="hover:text-pink-500">Careers</a>
          <a href="#" className="hover:text-pink-500">Events</a>
          <a href="#" className="hover:text-pink-500">Products</a>
          <a href="#" className="hover:text-pink-500">Support</a>
        </div>
        : 
        null
        }

        <div
          className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl"
        >
          Impressive Experiences That Deliver
        </div>
      </div>
    </section>

    {/* <!-- Feature Section --> */}
    <section id="feature">
      {/* <!-- Feature Container --> */}
      <div
        className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0"
      >
        {/* <!-- Image --> */}
        <img src="images/desktop/image-interactive.jpg" alt="" />

        {/* <!-- Text Container --> */}
        <div
          className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20"
        >
          <h2
            className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left"
          >
            The leader in interactive VR
          </h2>

          <p className="max-w-md text-center md:text-left">
            Founded in 2011, Loopstudios has been producing world-className virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>

    {/* <!-- Creations Section --> */}
    <section id="creations">
      {/* <!-- Creations Container --> */}
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        {/* <!-- Creations Header --> */}
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>

          <button className="hidden btn md:block">See All</button>
        </div>

        {/* <!-- Items Container --> */}
        <div className="item-container">
          {/* <!-- Item 1 --> */}
          <div className="group item">
            {/* <!-- Desktop Image --> */}
            <img
              src="images/desktop/image-deep-earth.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* <!-- Mobile Image --> */}
            <img
              src="images/mobile/image-deep-earth.jpg"
              alt=""
              className="w-full md:hidden"
            />
            {/* <!-- Item Gradient --> */}
            <div className="item-gradient"></div>
            {/* <!-- Item Text --> */}
            <h5>Deep Earth</h5>
          </div>

          {/* <!-- Item 2 --> */}
          <div className="group item">
            {/* <!-- Desktop Image --> */}
            <img
              src="images/desktop/image-night-arcade.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* <!-- Mobile Image --> */}
            <img
              src="images/mobile/image-night-arcade.jpg"
              alt=""
              className="w-full md:hidden"
            />
            {/* <!-- Item Gradient --> */}
            <div className="item-gradient"></div>
            {/* <!-- Item Text --> */}
            <h5>Night Arcade</h5>
          </div>

          {/* <!-- Item 3 --> */}
          <div className="group item">
            {/* <!-- Desktop Image --> */}
            <img
              src="images/desktop/image-soccer-team.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* <!-- Mobile Image --> */}
            <img
              src="images/mobile/image-soccer-team.jpg"
              alt=""
              className="w-full md:hidden"
            />
            {/* <!-- Item Gradient --> */}
            <div className="item-gradient"></div>
            {/* <!-- Item Text --> */}
            <h5>Soccer Team VR</h5>
          </div>

          {/* <!-- Item 4 --> */}
          <div className="group item">
            {/* <!-- Desktop Image --> */}
            <img
              src="images/desktop/image-grid.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* <!-- Mobile Image --> */}
            <img
              src="images/mobile/image-grid.jpg"
              alt=""
              className="w-full md:hidden"
            />
            {/* <!-- Item Gradient --> */}
            <div className="item-gradient"></div>
            {/* <!-- Item Text --> */}
            <h5>The Grid</h5>
          </div>
        </div>

        {/* <!-- Item Container 2 --> */}
        <div className="item-container mt-10">
          {/* <!-- Item 1 --> */}
          <div className="group item">
            {/* <!-- Desktop Image --> */}
            <img
              src="images/desktop/image-from-above.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* <!-- Mobile Image --> */}
            <img
              src="images/mobile/image-from-above.jpg"
              alt=""
              className="w-full md:hidden"
            />
            {/* <!-- Item Gradient --> */}
            <div className="item-gradient"></div>
            {/* <!-- Item Text --> */}
            <h5>From Up Above VR</h5>
          </div>

          {/* <!-- Item 2 --> */}
          <div className="group item">
            {/* <!-- Desktop Image --> */}
            <img
              src="images/desktop/image-pocket-borealis.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* <!-- Mobile Image --> */}
            <img
              src="images/mobile/image-pocket-borealis.jpg"
              alt=""
              className="w-full md:hidden"
            />
            {/* <!-- Item Gradient --> */}
            <div className="item-gradient"></div>
            {/* <!-- Item Text --> */}
            <h5>Pocket Borealis</h5>
          </div>

          {/* <!-- Item 3 --> */}
          <div className="group item">
            {/* <!-- Desktop Image --> */}
            <img
              src="images/desktop/image-curiosity.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* <!-- Mobile Image --> */}
            <img
              src="images/mobile/image-curiosity.jpg"
              alt=""
              className="w-full md:hidden"
            />
            {/* <!-- Item Gradient --> */}
            <div className="item-gradient"></div>
            {/* <!-- Item Text --> */}
            <h5>The Curiosity</h5>
          </div>

          {/* <!-- Item 4 --> */}
          <div className="group item">
            {/* <!-- Desktop Image --> */}
            <img
              src="images/desktop/image-fisheye.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* <!-- Mobile Image --> */}
            <img
              src="images/mobile/image-fisheye.jpg"
              alt=""
              className="w-full md:hidden"
            />
            {/* <!-- Item Gradient --> */}
            <div className="item-gradient"></div>
            {/* <!-- Item Text --> */}
            <h5>Make It Fisheye</h5>
          </div>
        </div>
        {/* <!-- Bottom Button Container --> */}
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>

    <footer className="bg-black">
      {/* <!-- Container --> */}
      <div className="container max-w-6xl py-10 mx-auto">
        {/* <!-- Footer Flex Container --> */}
        <div
          className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start"
        >
          {/* <!-- Menu & Logo Container --> */}
          <div
            className="flex flex-col items-center space-y-8 md:items-start md:space-y-4"
          >
            {/* <!-- Logo --> */}
            <div className="h-8">
              <img src="images/logo.svg" alt="" className="w-44 md:ml-3" />
            </div>
            {/* <!-- Menu Container --> */}
            <div
              className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3"
            >
              {/* <!-- Item 1 --> */}
              <div className="h-10 group">
                <a href="#">About</a>
                <div
                  className="mx-2 group-hover:border-b group-hover:border-blue-50"
                ></div>
              </div>
              {/* <!-- Item 2 --> */}
              <div className="h-10 group">
                <a href="#">Careers</a>
                <div
                  className="mx-2 group-hover:border-b group-hover:border-blue-50"
                ></div>
              </div>
              {/* <!-- Item 3 --> */}
              <div className="h-10 group">
                <a href="#">Events</a>
                <div
                  className="mx-2 group-hover:border-b group-hover:border-blue-50"
                ></div>
              </div>
              {/* <!-- Item 4 --> */}
              <div className="h-10 group">
                <a href="#">Products</a>
                <div
                  className="mx-2 group-hover:border-b group-hover:border-blue-50"
                ></div>
              </div>
              {/* <!-- Item 5 --> */}
              <div className="h-10 group">
                <a href="#">Support</a>
                <div
                  className="mx-2 group-hover:border-b group-hover:border-blue-50"
                ></div>
              </div>
            </div>
          </div>

          {/* <!-- Social & Copy Container --> */}
          <div
            className="flex flex-col items-start justify-between space-y-4 text-gray-500"
          >
            {/* <!-- icons Container --> */}
            <div
              className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0"
            >
              {/* <!-- Icon 1 --> */}
              <div className="h-8 group">
                <a href="#">
                  <img src="images/icon-facebook.svg" alt="" className="h-6" />
                </a>
              </div>
              {/* <!-- Icon 2 --> */}
              <div className="h-8 group">
                <a href="#">
                  <img src="images/icon-twitter.svg" alt="" className="h-6" />
                </a>
              </div>
              {/* <!-- Icon 3 --> */}
              <div className="h-8 group">
                <a href="#">
                  <img src="images/icon-pinterest.svg" alt="" className="h-6" />
                </a>
              </div>
              {/* <!-- Icon 4 --> */}
              <div className="h-8 group">
                <a href="#">
                  <img src="images/icon-instagram.svg" alt="" className="h-6" />
                </a>
              </div>
            </div>

            {/* <!-- Copy --> */}
            <div className="font-bold">
              &copy; 2022 Loopstudios. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
