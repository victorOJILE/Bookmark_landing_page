import { useState, useRef } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const input = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Congratulations! You have successfully subscribed to our newsletter.");
  }

  function handleChange(e) {
    setEmail(e.target.value);
    setIsValid(input.current.checkValidity());
  }

  return (
    <section className="softBlue">
      <div className="max-w-xl mx-auto px-6 py-10 text-center">
        <p className="leading-normal md:text-xl lg:text-xl">35,000+ already joined</p>
        <h3 className="softBlue text-xl md:text-2xl max-w-sm mx-auto px-5 py-3">
          <strong>Stay up-to-date with what we’re doing</strong>
        </h3>
        <form className="px-5 mt-5 flex flex-wrap justify-center items-center gap-4" onSubmit={handleSubmit}>
          <div
            className="w-full bg-white sm:basis-72 flex-ac flex-wrap items-stretch rounded">
            <input
              ref={input}
              type="email"
              className="p-2 bg-inherit text-gray-600 outline-0 rounded flex-grow peer"
              value={email}
              onChange={handleChange}
              onFocus={handleChange}
              required
            />
            <span className="px-2 invisible peer-focus:peer-invalid:visible">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <g fill="none" fill-rule="evenodd">
                  <circle cx="10" cy="10" r="10" fill="#FA5959"/>
                  <g fill="#FFF" transform="translate(9 5)">
                    <rect width="2" height="7" rx="1"/>
                    <rect width="2" height="2" y="8" rx="1"/>
                  </g>
                </g>
              </svg>
            </span>
            <div className="w-full py-1 px-3 softRed hidden peer-focus:peer-invalid:block text-xs italic lg:text-sm text-left">Whoops, make sure it's an email</div>
          </div>
          <input className="w-full text-sm md:text-base softRed-btn sm:basis-32 py-2 rounded ring-2 ring-red-500 cursor-pointer" type="submit" value="Contact Us" />
        </form>
      </div>
    </section>
  );
}