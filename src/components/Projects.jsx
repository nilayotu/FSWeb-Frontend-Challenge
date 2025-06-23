function Projects() {
  return (
    <section className="dark:bg-[#252128] px-24 py-2 pb-32 dark:text-white" >
      <h1 className="text-4xl sm:text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-8 text-left">
        Projects
      </h1>

      <div className="flex flex-col md:flex-row gap-24">
        <div className="flex-1">
          <img src="./src/assets/workintech.png" alt="workintech" />
          <h2 className="text-left text-2xl font-semibold dark:text-[#CFCBFF] text-[#4338CA]">Workintech</h2>
          <p className="dark:text-[#FFFFFF] text-[#6B7280] text-left mt-4">
            A simple, customizable, minimal setup cookie plugin that allows
            your users to select which cookies to accept or decline. This was
            created with vanilla JS, SCSS and Parcel Bundler and is available
            as a NPM package and the git repository makes any type of
            customization to code and themes possible.
          </p>
          <div className="flex justify-start mt-4">
            <button className="text-[#3730A3] border dark:border-[#8F88FF] dark:text-[#8F88FF] border-[#3730A3] px-6 py-1 mr-2 rounded">
              react
            </button>
            <button className="text-[#3730A3] border dark:border-[#8F88FF] dark:text-[#8F88FF] border-[#3730A3] px-6 py-1 mr-2 rounded">
              redux
            </button>
            <button className="text-[#3730A3] border dark:border-[#8F88FF] dark:text-[#8F88FF] border-[#3730A3] px-6 py-1 rounded">
              axios
            </button>
          </div>
          <div className="flex justify-between mt-4 space-x-4">
            <a className="text-[#3730A3] dark:border-[#E1E1FF] hover:cursor-pointer dark:text-[#E1E1FF] border-b border-[#3730A3]">
              Github
            </a>
            <a className="text-[#3730A3] dark:border-[#E1E1FF] hover:cursor-pointer dark:text-[#E1E1FF] border-b border-[#3730A3]">
              View Site
            </a>
          </div>
        </div>

        <div className="flex-1">
          <img src="./src/assets/random-jokes.png" alt="random jokes" />
          <h2 className="text-left text-2xl font-semibold dark:text-[#CFCBFF] text-[#4338CA]">Random Jokes</h2>
          <p className="dark:text-[#FFFFFF] text-[#6B7280] text-left mt-4">
            A simple, customizable, minimal setup cookie plugin that allows
            your users to select which cookies to accept or decline. This was
            created with vanilla JS, SCSS and Parcel Bundler and is available
            as a NPM package and the git repository makes any type of
            customization to code and themes possible.
          </p>
          <div className="flex justify-start mt-4">
            <button className="text-[#3730A3] border dark:border-[#8F88FF] dark:text-[#8F88FF] border-[#3730A3] px-6 py-1 mr-2 rounded">
              react
            </button>
            <button className="text-[#3730A3] border dark:border-[#8F88FF] dark:text-[#8F88FF] border-[#3730A3] px-6 py-1 mr-2 rounded">
              redux
            </button>
            <button className="text-[#3730A3] border dark:border-[#8F88FF] dark:text-[#8F88FF] border-[#3730A3] px-6 py-1 rounded">
              axios
            </button>
          </div>
          <div className="flex justify-between mt-4 space-x-4">
            <a className="text-[#3730A3] dark:border-[#E1E1FF] hover:cursor-pointer dark:text-[#E1E1FF] border-b border-[#3730A3]">
              Github
            </a>
            <a className="text-[#3730A3] dark:border-[#E1E1FF] hover:cursor-pointer dark:text-[#E1E1FF] border-b border-[#3730A3]">
              View Site
            </a>
          </div>
        </div>

        <div className="flex-1">
          <img src="./src/assets/journey.png" alt="journey" />
          <h2 className="text-left text-2xl font-semibold dark:text-[#CFCBFF] text-[#4338CA]">Journey</h2>
          <p className="dark:text-[#FFFFFF] text-[#6B7280] text-left mt-4">
            A simple, customizable, minimal setup cookie plugin that allows
            your users to select which cookies to accept or decline. This was
            created with vanilla JS, SCSS and Parcel Bundler and is available
            as a NPM package and the git repository makes any type of
            customization to code and themes possible.
          </p>
          <div className="flex justify-start mt-4">
            <button className="text-[#3730A3] border dark:border-[#8F88FF] dark:text-[#8F88FF] border-[#3730A3] px-6 py-1 mr-2 rounded">
              react
            </button>
            <button className="text-[#3730A3] border dark:border-[#8F88FF] dark:text-[#8F88FF] border-[#3730A3] px-6 py-1 mr-2 rounded">
              redux
            </button>
            <button className="text-[#3730A3] border dark:border-[#8F88FF] dark:text-[#8F88FF] border-[#3730A3] px-6 py-1 rounded">
              axios
            </button>
          </div>
          <div className="flex justify-between mt-4 space-x-4">
            <a className="text-[#3730A3] dark:border-[#E1E1FF] hover:cursor-pointer dark:text-[#E1E1FF] border-b border-[#3730A3]">
              Github
            </a>
            <a className="text-[#3730A3] dark:border-[#E1E1FF] hover:cursor-pointer dark:text-[#E1E1FF] border-b border-[#3730A3]">
              View Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;