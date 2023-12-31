import React from "react";
import profileCard from "../../src/assets/profile_card.png";
import { TbWorld } from "react-icons/tb";
import arrowSvg from "../../src/assets/arrowSvg.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Footer from "../components/footer/Footer";
import { isMobile } from "react-device-detect";
import logo from "../assets/logo.png";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Linksx.Pro</title>
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Linkx.Pro - Create awesome bio profile"
        />
        <meta name="twitter:url" content={`https://www.xlinks.pro/`} />
        <meta
          name="twitter:description"
          content="A platform where user can create bio link profile for different social media platforms."
        />
        <meta
          name="twitter:image"
          content="https://cdn.woorise.com/wp-content/uploads/2020/10/bio-link-tools.png"
        />
        <meta
          property="og:title"
          content="LinksX.Pro - Create awesome bio profile"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="A platform where user can create bio link profile for different social media platforms."
        />
        <meta
          property="og:image"
          content="https://cdn.woorise.com/wp-content/uploads/2020/10/bio-link-tools.png"
        />
        <meta property="og:url" content="https://www.xlinks.pro/" />
      </Helmet>
      <section className="text-font flex flex-col justify-center items-center overflow-x-hidden">
        <div className="flex flex-col justify-center text-center items-center container mx-auto py-10">
          <div className="mt-10 flex flex-col justify-center items-center text-center">
            <img src={logo} className="w-20" alt="xLinks.Pro" />
            <h1 className="text-6xl font-bold heading-font">LinksX.Pro</h1>
            <h2 className="font-medium my-2 text-2xl leading-[2.3rem] md:leading-10 px-5 md:px-0 md:text-2xl text-gray-800">
              Create your bio profile for free
            </h2>
          </div>
          <Link
            to="/signin"
            className="text-lg md:text-xl py-2 bg-blueColor/5 mt-5 md:mt-6 md:mb-5 text-blueColor flex flex-row justify-center pr-6 pl-3 items-center hover:text-blueColor/80 focus:outline-none rounded-full focus:ring-2 focus:ring-blueColor/70 focus:ring-offset-2 focus:ring-offset-white transition-all"
          >
            <FcGoogle className="icon-style" />
            Signin with Google
          </Link>

          {/* <a
            href="https://www.producthunt.com/posts/xlinks-pro-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-xlinks-pro-2"
            target="_blank"
            className="my-10"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=383888&theme=light"
              alt="xLinks Pro - Create bio link for social media | Product Hunt"
              style={{ width: 250, height: 54 }}
              width={250}
              height={54}
            />
          </a> */}

          {/* <img
            src={profileCard}
            alt="Abhi Dadhaniya xLinks.Pro Profile"
            className={`${
              isMobile ? "phone-card-shadow" : "card-shadow"
            } -z-20 mt-16 img-shadow w-[24rem] md:w-[38rem]`}
          /> */}
          {/* <img src={arrowSvg} className="w-[20rem] mt-32 -mb-4 md:-mt-7" alt="" /> */}
          <img src={arrowSvg} className="w-[15rem] md:w-[20rem] -mt-5" alt="" />
          <div className=" bg-blueColor py-2 pl-4 pr-6 rounded-full tracking-wider text-white flex flex-row justify-center items-center">
            <TbWorld className="icon-style rounded-full bg-white text-blueColor" />
            <span>
              LinksX.pro/
              <span className="text-white/60">username</span>
            </span>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Homepage;
