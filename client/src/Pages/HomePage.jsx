import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import HomePageImage from "../assets/Images/homePageMainImage.png";

function HomePage() {
    return (
        <HomeLayout>
            {/* Typewriter effect div */}
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[10vh]">
                <div className="w-max">
                    <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
                        Course<span className="text-yellow-500">Array{" "}</span>
                    </h1>
                </div>
            </div>

            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[80vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-4xl font-semibold">
                        Find out best {" "}
                        <span className="text-yellow-500 font-bold">
                            Online Courses here
                        </span>
                    </h1>
                    <p className="text-xl text-gray-200">
                        We have a large Library of courses taught by highly skilled and qualified faculties at a very affordable price.
                    </p>

                    <div className="space-x-6">
                        <Link to="/courses">
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-700 transition-all ease-in-out duration-300">
                                Explore Courses
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-700 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-1/2 flex items-center justify-center">
                    <img src={HomePageImage} alt="homepage image" />
                </div>
            </div>
        </HomeLayout>
    );
}

export default HomePage;
