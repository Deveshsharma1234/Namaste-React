import User from "../components/User";
import UserClass from "../components/UserClass";
const About = () => {
    return (
        <>
            <div className="about-us">
                <div className="heading">About us</div>
                <div className="about">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sequi repellendus libero praesentium quos dolore, ab voluptatibus vitae harum accusamus eligendi minus ratione cupiditate in minima possimus eaque, recusandae amet quo dolor facilis ullam molestiae corrupti voluptas. Alias, iusto incidunt laborum culpa consequatur praesentium quidem perferendis id aliquam sint omnis doloribus voluptatibus, nesciunt aut voluptate.
                </div>
                <div className="contributer">
                    {[...Array(6)].map((_, index) => (
                        <User key={index} name={"Devesh"} location={"Jhalwaar"} contactUs={"8952926631"} />
                    ))}
                    <hr />
                    <br />

{
    [...Array(5)].map((_, index) => {
        return <UserClass key={index} name={"deveshsharma1234"} />;
    })
}

                </div>

            </div>
        </>
    )
}

export default About;