function Projects() {
  return (
    <section className="border-b border-[#BAB2E7]">
      <h1 className="text-4xl sm:text-6xl font-bold text-[#1F2937] dark:text-white mb-8 text-left">
        Projects
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <img src="./src/assets/workintech.png" alt="workintech" />
          <p className="text-[#6B7280] mt-4">
            A simple, customizable, minimal setup cookie plugin that allows
            your users to select which cookies to accept or decline. This was
            created with vanilla JS, SCSS and Parcel Bundler and is available
            as a NPM package and the git repository makes any type of
            customization to code and themes possible.
          </p>
          <div className="mt-4">
            <button className="text-[#3730A3] border border-[#3730A3] px-2 py-1 mr-2 rounded">
              react
            </button>
            <button className="text-[#3730A3] border border-[#3730A3] px-2 py-1 mr-2 rounded">
              redux
            </button>
            <button className="text-[#3730A3] border border-[#3730A3] px-2 py-1 rounded">
              axios
            </button>
          </div>
          <div className="mt-4 space-x-4">
            <a className="text-[#3730A3] border-b border-[#3730A3]" href="">
              Github
            </a>
            <a className="text-[#3730A3] border-b border-[#3730A3]" href="">
              View Site
            </a>
          </div>
        </div>

        <div className="flex-1">
          <img src="./src/assets/random-jokes.png" alt="random jokes" />
          <p className="text-[#6B7280] mt-4">
            A simple, customizable, minimal setup cookie plugin that allows
            your users to select which cookies to accept or decline. This was
            created with vanilla JS, SCSS and Parcel Bundler and is available
            as a NPM package and the git repository makes any type of
            customization to code and themes possible.
          </p>
          <div className="mt-4">
            <button className="text-[#3730A3] border border-[#3730A3] px-2 py-1 mr-2 rounded">
              react
            </button>
            <button className="text-[#3730A3] border border-[#3730A3] px-2 py-1 mr-2 rounded">
              redux
            </button>
            <button className="text-[#3730A3] border border-[#3730A3] px-2 py-1 rounded">
              axios
            </button>
          </div>
          <div className="mt-4 space-x-4">
            <a className="text-[#3730A3] border-b border-[#3730A3]" href="">
              Github
            </a>
            <a className="text-[#3730A3] border-b border-[#3730A3]" href="">
              View Site
            </a>
          </div>
        </div>

        <div className="flex-1">
          <img src="./src/assets/journey.png" alt="journey" />
          <p className="text-[#6B7280] mt-4">
            A simple, customizable, minimal setup cookie plugin that allows
            your users to select which cookies to accept or decline. This was
            created with vanilla JS, SCSS and Parcel Bundler and is available
            as a NPM package and the git repository makes any type of
            customization to code and themes possible.
          </p>
          <div className="mt-4">
            <button className="text-[#3730A3] border border-[#3730A3] px-2 py-1 mr-2 rounded">
              react
            </button>
            <button className="text-[#3730A3] border border-[#3730A3] px-2 py-1 mr-2 rounded">
              redux
            </button>
            <button className="text-[#3730A3] border border-[#3730A3] px-2 py-1 rounded">
              axios
            </button>
          </div>
          <div className="mt-4 space-x-4">
            <a className="text-[#3730A3] border-b border-[#3730A3]" href="">
              Github
            </a>
            <a className="text-[#3730A3] border-b border-[#3730A3]" href="">
              View Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;