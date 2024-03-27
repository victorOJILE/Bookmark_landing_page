import { useState } from "react";

export default function Features() {
  return (
    <>
      <br />
      <br />
      <section className="py-5">
        <div className="max-w-xl text-center mx-auto px-3">
          <h2 className="leading-relaxed text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <strong>Features</strong>
          </h2>
          <p className="grayish-text leading-normal md:text-xl lg:text-xl xl:text-2xl p-5 md:px-3">
            <small>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </small>
          </p>
        </div>
        <br />
        <div >
          <TabSection />
        </div>
      </section>
      <br />
      <br />
    </>
  );
}

function TabSection() {
  const [data, setData] = useState([
    {
      tabName: "Simple Bookmarking",
      photoUrl: "illustration-features-tab-1.svg",
      photoAlt: "Simple Bookmarking in one click",
      title: "Bookmark in one click",
      description: `Organize your bookmarks however you like. Our simple
      drag-and-drop interface gives you complete control over how
      you manage your favourite sites.`,
      infoUrl: "#"
    },
    {
      tabName: "Speedy Searching",
      photoUrl: "illustration-features-tab-2.svg",
      photoAlt: "Speedy and intelligent search",
      title: "Intelligent search",
      description: `Our powerful search feature will help you find saved sites in no time at all. 
      No need to trawl through all of your bookmarks.`,
      infoUrl: "#"
    },
    {
      tabName: "Easy Sharing",
      photoUrl: "illustration-features-tab-3.svg",
      photoAlt: "Bookmarks sharing",
      title: "Share your bookmarks",
      description: `Organize your bookmarks however you like. Our simple
      drag-and-drop interface gives you complete control over how
      you manage your favourite sites.`,
      infoUrl: "#"
    }
  ]);
  const [active, setActive] = useState(0);

  return (
    <div className="container">
      <div className="md:flex justify-center accordion-tab text-sm md:text-lg lg:text-xl">
        {
           data && data.length > 0 && (
            data.map((tab, index) => (
              <div key={index} className="cursor-pointer" data-index={index} tabIndex="1" onClick={(e) => setActive(Number(e.currentTarget.dataset.index))}>
                <span className={"inline-block pt-4 pb-3" + (index == active ? " active" : "")}>
                  {tab.tabName}
                </span>
              </div>
            ))
           )
        }
      </div>
      {
        data && data.length > 0 && (
          <div className="p-8 grid md:grid-cols-5 items-center gap-16 md:py-12 xl:gap-10">
            <div className="md:col-span-3 xl:pr-20">
              <img
                className="w-full"
                src={data[active].photoUrl}
                alt={data[active].photoAlt}
              />
            </div>
            <div className="md:col-span-2 resp-align">
              <h3 className="leading-relaxed text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                <strong>{data[active].title}</strong>
              </h3>
              <p className="py-5 md:py-2 grayish-text leading-normal md:text-xl lg:text-xl xl:text-2xl">
                <small>{data[active].description}</small>
              </p>
              <a
                href={data[active].infoUrl}
                className="hidden md:inline-block text-sm xl:text-xl w-32 my-5 p-2 lg:p-4 rounded softBlue-btn"
              >
                <strong>More Info</strong>
              </a>
            </div>
          </div>
        )
      }
    </div>
  );
}