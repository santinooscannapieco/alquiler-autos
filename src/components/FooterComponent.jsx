import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitterx.svg";
import instagram from "../assets/instagram.svg";
import img from "../assets/logoWhite.png";

export const FooterComponent = () => {
  return (
    <>
      <footer className="">
        <div className="flex justify-between items-center text-white bg-blue-700 h-[60px] lg:h-[75px] text-lg px-20">
          <div className="flex gap-5">
            <p className="text-sm md:text-md lg:text-lg">©2025</p>
            <p className="text-sm md:text-md lg:text-lg">Alquiler Autos</p>
          </div>
          <img className="w-8 md:w-10 lg:w-12" src={img} alt="auto" />
          <div className="flex gap-2 md:gap-5 ">
            <a href="https://www.facebook.com/" target="_blank">
              <img
                className="w-5 md:w-6 lg:w-8"
                src={facebook}
                alt="facebook"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/santino-scannapieco/"
              target="_blank"
            >
              <img
                className="w-5 md:w-6 lg:w-8"
                src={linkedin}
                alt="linkedin"
              />
            </a>
            <a href="https://x.com/home" target="_blank">
              <img className="w-5 md:w-6 lg:w-8" src={twitter} alt="twitter" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img
                className="w-5 md:w-6 lg:w-8"
                src={instagram}
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
