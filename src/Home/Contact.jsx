import { Helmet } from "react-helmet";
import customer from "../assets/Online-games-addiction.gif";
const Contact = () => {
  return (
    <div className="averia-serif lg:mx-10 ">
      <Helmet>
        <title>Talk Town || Contact Us</title>
      </Helmet>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between items-center ">
          <div className="space-y-2 text-center">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl ">
              Let's talk!
            </h2>
            <div className="dark:text-gray-600">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <img src={customer} alt="" />
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded dark:bg-gray-100 border-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your emails"
              className="w-full p-3 rounded dark:bg-gray-100 border-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              placeholder="message"
              className="w-full p-3 rounded dark:bg-gray-100 border-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
