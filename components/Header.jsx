import { useState } from "react";

export default function Header() {
  return (
    <header>
      <nav className="container p-6 md:py-0 flex-ac justify-between">
        <a href="">
          <img className="w-32 xl:w-48" src="logo-bookmark.svg" alt="Bookmark Official Logo" />
        </a>
        <TopNavigation />
      </nav>
      <div className="relative">
        <section className="container py-8 md:py-24 xl:py-32">
          <img className="md:absolute md:w-1/2 right-0 top-1/2 md:transform md:-translate-y-1/2" src="illustration-hero.svg" alt="Bookmark Manager Illustration" />
          <div className="resp-align md:w-1/2">
            <div className="px-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-normal"><strong>A Simple Bookmark Manager</strong></h1>
              <p className="grayish-text text-base md:text-xl lg:text-xl xl:text-2xl py-3 md:py-5"><small>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</small></p>
            </div>
            <div className="flex justify-center md:justify-start py-5 px-8 text-sm xl:text-xl">
              <a className="w-2/5 md:w-1/2 max-w-56 py-3 rounded softBlue-btn mr-3" href="#">
                <strong>Get it on Chrome</strong>
              </a>
              <a className="w-2/5 md:w-1/2 max-w-56 text-center grayish-text py-3 rounded bg-gray-100 shadow-lg hover:bg-white" href="#">
                <strong>Get it on Firefox</strong>
              </a>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

function TopNavigation() {
  const [open, setOpen] = useState(false);

  function toggle() {
    if(window.innerWidth >= 800) return;
    document.body.style.overflow = document.body.style.overflow == 'hidden' ? 'auto' : 'hidden';
    setOpen(prev => !prev);
  }

  return (
    <div className="md:flex-grow md:flex items-center justify-between dropdown">
      <div className="p-3 m-2 hover:bg-gray-100 rounded md:hidden" onClick={toggle}>
        { 
          open ? <img src="icon-close.svg" alt="Close Navigation" /> : 
          <img src="icon-hamburger.svg" alt="View Navigation" />
         }
      </div>
      <nav
        className={ "p-6 nav-mobile-bg overflow-auto md:block transition-all duration-500" + (open ? " left-0" : " -left-full") }
        onClick={toggle}
        >
        <div className="flex-ac justify-between p-5 md:hidden">
          <img className="w-32" src="logo-bookmark-light_all.svg" alt="Bookmark Official Logo" />
          <img src="icon-close.svg" alt="" aria-label="Close Navigation" />
        </div>
        <ul>
          <li>
            <a href="">
              FEATURES
            </a>
          </li>
          <li>
            <a href="">
              PRICING
            </a>
          </li>
          <li>
            <a href="">
              CONTACT
            </a>
          </li>
          <div className="py-10">
            <a href="" className="block loginBtn rounded text-center ring-2 ring-white py-2 hover:bg-gray-600 font-bold">
              LOGIN
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
}