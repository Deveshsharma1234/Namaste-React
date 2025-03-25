import User from "../components/User";
import UserClass from "../components/UserClass";

const About = () => {
  return (
    <div className="about-us bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">About Food Vibe's</h1>

      {/* About Section */}
      <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl leading-relaxed">
        Welcome to <span className="text-purple-600 font-semibold">Food Vibes</span>, your ultimate destination for a seamless and delightful food ordering experience.
        We strive to bring you the best meals from your favorite restaurants, ensuring freshness, taste, and convenience at every step.
        Our platform is designed to make food discovery effortless and enjoyable, so you can focus on savoring every bite.
      </p>

      {/* Our Vision */}
      <div className="w-full max-w-4xl text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Food Vibes, we believe that great food brings people together. Our goal is to connect food lovers with the best dining options,
          offering a hassle-free experience through innovation and technology. Whether you're craving comfort food or trying something new,
          we are here to make your journey flavorful and memorable.
        </p>
      </div>
    </div>
  );
};

export default About;







{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {[...Array(6)].map((_, index) => (
            <User key={index} name={"Devesh Sharma"} location={"Jhalawar"} contactUs={"8952926631"} />
          ))}
        </div>
      
        <hr className="my-8 border-gray-300" />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Tech Wizards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {[...Array(5)].map((_, index) => (
            <UserClass key={index} name={"deveshsharma1234"} />
          ))}
        </div> */}