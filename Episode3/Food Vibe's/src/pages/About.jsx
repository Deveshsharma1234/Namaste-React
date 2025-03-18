import User from "../components/User";
import UserClass from "../components/UserClass";
const About = () => {
    return (
        <>
          <div className="about-us bg-gray-100 p-8">
            {/* Heading */}
            <div className="heading text-3xl font-bold text-gray-800 mb-8 text-center">About Us</div>
      
            {/* About Section */}
            <div className="about text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sequi repellendus libero praesentium quos dolore, ab voluptatibus vitae harum accusamus eligendi minus ratione cupiditate in minima possimus eaque, recusandae amet quo dolor facilis ullam molestiae corrupti voluptas. Alias, iusto incidunt laborum culpa consequatur praesentium quidem perferendis id aliquam sint omnis doloribus voluptatibus, nesciunt aut voluptate.
            </div>
      
            {/* Contributors Section */}
            <div className="contributer">
              {/* Map through 6 User components */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(6)].map((_, index) => (
                  <User key={index} name={"Devesh"} location={"Jhalwaar"} contactUs={"8952926631"} />
                ))}
              </div>
      
              <hr className="my-8 border-gray-300" />
      
              {/* Map through 5 UserClass components */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(5)].map((_, index) => (
                  <UserClass key={index} name={"deveshsharma1234"} />
                ))}
              </div>
            </div>
          </div>
        </>
      );
}

export default About;