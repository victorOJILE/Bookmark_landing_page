export default function Extensions() {

  return (
    <section className="py-5 container">
      <div className="max-w-lg text-center mx-auto px-3">
        <h2 className="leading-relaxed text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <strong>Download the extension</strong>
        </h2>
        <p className="grayish-text leading-normal md:text-xl lg:text-xl xl:text-2xl p-5 md:px-2">
          <small>
            We’ve got more browsers in the pipeline. Please do let us know
            if you’ve got a favourite you’d like us to prioritize.
          </small>
        </p>
      </div>
      <br />
      <div className="px-12 grid md:grid-cols-3 gap-8 text-center md:px-6 xl:px-20 browsers-card">
        <div className="shadow-lg hover:bg-gray-50 py-6 px-3 rounded-xl">
          <img
            className="mx-auto w-24 my-5"
            src="logo-chrome.svg"
            alt="Chrome Logo"
          />
          <h4 className="md:text-lg lg:text-xl">
            <strong>Add to Chrome</strong>
          </h4>
          <p className="grayish-text leading-normal md:text-lg lg:text-xl">
            <small>Minimum version 62</small>
          </p>
          <img
            className="my-5"
            src="bg-dots.svg"
            alt=""
            aria-label="Design Seperator"
          />
          <a href="" className="text-sm xl:text-base max-w-56 p-3 rounded softBlue-btn">
            <strong>Add & Install Extension</strong>
          </a>
        </div>
        <div className="shadow-lg hover:bg-gray-50 py-6 px-3 rounded-xl">
          <img
            className="mx-auto w-24 my-5"
            src="logo-firefox.svg"
            alt="Firefox Logo"
          />
          <h4 className="md:text-lg lg:text-xl">
            <strong>Add to Firefox</strong>
          </h4>
          <p className="grayish-text leading-normal md:text-lg lg:text-xl">
            <small>Minimum version 55</small>
          </p>
          <img
            className="my-5"
            src="bg-dots.svg"
            alt=""
            aria-label="Design Seperator"
          />
          <a href="" className="text-sm xl:text-base max-w-64 p-3 rounded softBlue-btn">
            <strong>Add & Install Extension</strong>
          </a>
        </div>
        <div className="shadow-lg hover:bg-gray-50 py-6 px-3 rounded-xl">
          <img
            className="mx-auto w-24 my-5"
            src="logo-opera.svg"
            alt="Opera Logo"
          />
          <h4 className="md:text-lg lg:text-xl">
            <strong>Add to Opera</strong>
          </h4>
          <p className="grayish-text leading-normal md:text-lg lg:text-xl">
            <small>Minimum version 46</small>
          </p>
          <img
            className="my-5"
            src="bg-dots.svg"
            alt=""
            aria-label="Design Seperator"
          />
          <a href="" className="text-sm xl:text-base max-w-56 p-3 rounded softBlue-btn">
            <strong>Add & Install Extension</strong>
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}