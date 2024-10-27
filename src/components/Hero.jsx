import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container mx-auto">
      <section className="bg-gray-200 my-5 rounded-lg dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Books for Your Needs, Books for Your Journey
            </h1>
            
            <Link className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 btn btn-success" to={"listed-book"}>
              View The List
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://i.ibb.co/kQCYwfm/stack-colorful-books-eyeglasses-top-backlit-vibrant-light-knowledge-education-concept-327720429.webp"
              alt="mockup"
              className="rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
