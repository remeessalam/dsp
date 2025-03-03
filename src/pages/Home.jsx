import React from "react";
import bannerImg from "../assets/images/banner.webp";
import vid from "../assets/vids/banner.mp4";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import { ReactComponent as Icon1 } from "../assets/svgs/services/Web Development.svg";
import { ReactComponent as Icon2 } from "../assets/svgs/services/App Development.svg";
import { ReactComponent as Icon3 } from "../assets/svgs/services/Machine Learning Solutions.svg";
import gamedevelopment from "../assets/images/icons/game-development.png";
import WorkProcess from "../components/WorkProcess";
import ReactPlayer from "react-player";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen banner relative text-white">
        <div className="absolute top-0 w-full h-full bg-black/10">
          <div
            data-aos="fade-up"
            className="wrapper text-center flex flex-col gap-4 justify-center items-center h-full relative z-10"
          >
            <p className="sub-heading !text-white">
              Welcome to{" "}
              <span className="text-white font-semibold block sm:inline">
                LUNEXA TECHNOLOGIES
              </span>
            </p>
            <h1 className="heading capitalize">
              Shaping the Future of <br />
              Technology
            </h1>
            <p className="sub-heading !text-white max-w-6xl">
              At LUNEXA TECHNOLOGIES, we’re driven by one simple mission: to
              harness the power of technology to transform businesses and create
              impactful digital experiences. Whether it’s an immersive gaming
              experience, a seamless mobile app, or smart AI-driven solutions,
              our team is here to help you innovate and succeed. We offer a full
              range of services, from game development to web design, artificial
              intelligence to UI/UX design, all crafted with precision and
              tailored to your specific needs.
            </p>
          </div>
        </div>
        {/* <img
          loading="lazy"
          src={bannerImg}
          srcset={`${bannerImg} 400w, 
          ${bannerImg} 800w, 
          ${bannerImg} 1200w`}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          class="w-full h-full absolute -z-10 object-cover object-top"
          alt=""
        /> */}
        <ReactPlayer
          url={vid}
          playing
          muted
          playsinline
          loop
          pip={false}
          width="100%"
          height="100%"
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                },
              },
            },
          }}
        />
      </section>
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon1
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">Web Development</p>
          </div>
          <p className="desc">
            Design and develop responsive, SEO-friendly websites that
            effectively represent your brand and engage your audience.
          </p>
        </div>
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon2
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">
              Mobile App Development
            </p>
          </div>
          <p className="desc">
            Develop robust, user-friendly mobile apps for iOS and Android
            platforms that meet your business needs.
          </p>
        </div>
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={gamedevelopment}
              alt="icon"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">
              Game Development
            </p>
          </div>
          <p className="desc">
            In today’s highly competitive gaming world, creating an engaging and
            memorable experience is key.
          </p>
        </div>
      </div>
      <section className="">
        <div className="wrapper py-[3rem]">
          <div className="grid lg:grid-cols-2 gap-10 mt-7">
            <div data-aos="fade-up" className="hidden lg:flex flex-col">
              <img
                loading="lazy"
                src={aboutImg}
                width="600"
                height="400"
                className="object-cover rounded-lg w-full object-center"
                alt=""
              />
            </div>
            <div
              data-aos="fade-up"
              className="flex h-full items-start flex-col gap-7"
            >
              <div className="flex flex-col items-start gap-5 text-start">
                <SubHeading heading="About Us" />
                <div
                  data-aos="fade-up"
                  className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
                >
                  <img
                    loading="lazy"
                    src={aboutImg}
                    width="200"
                    height="200"
                    className="object-cover h-full object-center rounded-lg w-full"
                    alt=""
                  />
                </div>
                <h2 className="heading-2 max-w-[60rem]">
                  Transforming Visions into Reality
                </h2>
                <p className="desc">
                  Welcome to{" "}
                  <span className="font-medium text-primary">
                    LUNEXA TECHNOLOGIES
                  </span>
                  , where we combine creativity, innovation, and technology to
                  shape meaningful digital experiences. We’re a team of
                  passionate professionals dedicated to crafting custom
                  solutions that help businesses thrive in the digital world.
                  Whether it's developing engaging games, building powerful
                  apps, or implementing smart AI systems, we specialize in
                  creating technology that makes a real difference. <br />{" "}
                  <br />
                  From the moment we started, we’ve been committed to one thing:
                  delivering high-quality, innovative solutions that push the
                  boundaries of what’s possible. Every project is an opportunity
                  to do something extraordinary, and we work closely with our
                  clients to ensure their goals are met with precision,
                  creativity, and technical excellence.
                </p>
              </div>
              <div className="w-fit mt-4 justify-start">
                <Link to="/about-us" className="primary-btn">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AllServices />
      <WorkProcess />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <TrustWorthySection />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
