import { useState } from "react";

export default function FAQS() {
  const [Faqs, setFAQs] = useState([
    {
      question: "What is Bookmark?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Fusce tincidunt justo eget ultricies fringilla. Phasellus
      blandit ipsum quis quam ornare mattis.`
    },
    {
      question: "How can I request a new browser?",
      answer: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue
      massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
      luctus eros aliquet convallis ultricies. Mauris augue massa,
      ultricies non ligula. Suspendisse imperdie tVivamus luctus
      eros aliquet convallis ultricies. Mauris augue massa,
      ultricies non ligula. Suspendisse imperdiet.`
    },
    {
      question: "Is there a mobile app?",
      answer: `Sed consectetur quam id neque fermentum accumsan. Praesent
      luctus vestibulum dolor, ut condimentum urna vulputate eget.
      Cras in ligula quis est pharetra mattis sit amet pharetra
      purus. Sed sollicitudin ex et ultricies bibendum.`
    },
    {
      question: "What about other Chromium browsers?",
      answer: `Integer condimentum ipsum id imperdiet finibus. Vivamus in
      placerat mi, at euismod dui. Aliquam vitae neque eget nisl
      gravida pellentesque non ut velit.`
    }
  ]);

  return (
    <section className="py-5 md:pt-20 max-w-2xl mx-auto">
      <div className="text-center mx-auto px-3">
        <h2 className="leading-relaxed text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <strong>Frequently Asked Questions</strong>
        </h2>
        <p className="grayish-text leading-normal md:text-xl lg:text-xl xl:text-2xl p-5 md:px-2">
          <small>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </small>
        </p>
      </div>
      <br />
      <div className="py-6 accordion grayish-text leading-relaxed px-8">
        { Faqs && Faqs.length > 0 && Faqs.map((faq, index) => <Faq key={index} data={faq} />) }
      </div>
      <div className="text-center">
        <a
          href="#"
          className="text-sm xl:text-xl w-32 my-5 mx-auto p-3 lg:p-4 rounded softBlue-btn"
        >
          <strong>More Info</strong>
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  )
}

function Faq({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex-ac justify-between py-3 md:pr-2" onClick={() => setOpen(prev => !prev)}>
        <h4 className="leading-normal md:text-xl lg:text-xl xl:text-2xl flex-grow cursor-pointer">
          <strong>
            <small>{data.question}</small>
          </strong>
        </h4>
        <span className={ open ? "text-orange-600" : "text-blue-600" }>
          {
            open ? 
            <svg xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)" }} width="18" height="12"><path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8"/></svg> :
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
          }
        </span>
      </div>
      <div className="overflow-hidden" style={{ transition: "all 1s ease-out" }}>
        <div
          className="leading-normal md:text-xl lg:text-xl xl:text-2xl"
          style={{ maxHeight: open ? 'max-content' : '0' }}
        >
          <div className="pt-3 pb-5">
            <small>{data.answer}</small>
          </div>
        </div>
      </div>
      
    </div>
  );
}