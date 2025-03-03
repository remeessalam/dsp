import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

// all services
import { ReactComponent as allServiceIcon1 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as allServiceIcon2 } from "./assets/svgs/services/App Development.svg";
import { ReactComponent as allServiceIcon3 } from "./assets/svgs/services/UIUX Design.svg";
import { ReactComponent as allServiceIcon4 } from "./assets/svgs/services/Chatbots.svg";
import { ReactComponent as allServiceIcon5 } from "./assets/svgs/services/Machine Learning Solutions.svg";
import { ReactComponent as allServiceIcon6 } from "./assets/svgs/services/Game Development.svg";
import { ReactComponent as allServiceIcon7 } from "./assets/svgs/services/nlpdevelopment.svg";

// app development services
import { ReactComponent as appServiceIcon1 } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as appServiceIcon2 } from "./assets/svgs/services/Android.svg";
import { ReactComponent as appServiceIcon3 } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as appServiceIcon4 } from "./assets/svgs/services/Hybrid App Development.svg";

// web development services
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";
export { logoImg };

export const companyDetails = {
  phone: "+91-7021170343",
  whatsappLink:
    "https://api.whatsapp.com/send/?phone=7021170343&text&type=phone_number&app_absent=0",
  address:
    "House No. 718, Opp Ganpati Mandir, Kansai Gaon, Ambernath East, Mumbai, Maharashtra",
  email: "infodspgrouppvtltd@gmail.com",
  linkedin: "https://x.com/DSP_GROUP_?s=09 ",
  instagram:
    "https://www.linkedin.com/in/vedant-kiran-patil-2a774134a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  twitter: "https://x.com/DSP_GROUP_?s=09",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/blogs",
    name: "Blogs",
    element: <Blogs />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
  {
    path: "/blogs/:id",
    name: "Blog Details",
    element: <BlogDetails />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webServiceIcon1,
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: webServiceIcon2,
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: webServiceIcon3,
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: webServiceIcon4,
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appServiceIcon1,
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appServiceIcon2,
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appServiceIcon3,
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appServiceIcon4,
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Alex D.",
    position: "CEO, GameVibe Studios",
    desc: '"Partnering with LUNEXA TECHNOLOGIES was a pivotal moment for us. We came to them with an idea for a mobile game, and they brought it to life in ways we hadn’t even imagined. Their creativity, technical expertise, and commitment to delivering a game that not only looks amazing but also provides a compelling, engaging experience really set them apart. The game’s success speaks volumes about their skills. We couldn’t be more satisfied with the outcome!"',
  },
  {
    id: 2,
    name: "Sarah L.",
    position: "Product Manager, FinTech Solutions",
    desc: '"From concept to launch, LUNEXA TECHNOLOGIES was a key partner in helping us build our mobile app. Their team was highly responsive, collaborative, and transparent throughout the entire process. The app they developed is sleek, functional, and intuitive, and it’s already making a positive impact on our user engagement. They truly understood our needs and delivered an app that exceeded our expectations. We couldn’t be more pleased with the final result."',
  },
  {
    id: 3,
    name: "James H.",
    position: "COO, Retail Innovations",
    desc: '"The AI solutions that LUNEXA TECHNOLOGIES developed for us have completely transformed our operations. Their team implemented machine learning models that helped us predict trends and optimize our decision-making, making our processes more efficient and data-driven. We’ve seen measurable improvements across the board, and their expertise in AI has truly set us apart from the competition. We’re so glad we chose them as our partner."',
  },
  {
    id: 4,
    name: "Emily R.",
    position: "Marketing Director, Green Solutions",
    desc: '"When we approached LUNEXA TECHNOLOGIES to redesign our website, we were looking for something fresh, functional, and user-friendly. They delivered exactly what we needed, creating a visually appealing site that performs seamlessly across all devices. The team’s attention to detail and commitment to creating an exceptional user experience really stood out. The new site has made a huge difference in how our customers interact with our brand. We are extremely happy with the results."',
  },
  {
    id: 5,
    name: "Michael S.",
    position: "Head of Customer Support, GlobalTech",
    desc: '"The NLP-powered chatbot that LUNEXA TECHNOLOGIES developed for us has made a huge difference in how we interact with our customers. It provides fast, accurate responses to inquiries, which has significantly improved customer satisfaction. The integration process was smooth, and the system is easy to maintain. We’re already seeing increased engagement and improved operational efficiency thanks to their innovative solutions."',
  },
  {
    id: 6,
    name: "Rachel T.",
    position: "Digital Experience Lead, HealthTech Innovations",
    desc: '"The team at LUNEXA TECHNOLOGIES went above and beyond in designing the UI/UX for our product. They took the time to really understand our user base and created an interface that’s both visually stunning and incredibly intuitive. The user feedback has been overwhelmingly positive, and we’ve seen higher engagement levels since the new design was launched. Their approach was thoughtful, and the end result has made a significant impact on our business."',
  },
  {
    id: 7,
    name: "Jason W.",
    position: "Founder, Lifestyle Goods",
    desc: '"The mobile app that LUNEXA TECHNOLOGIES developed for us has been a game-changer. Their team took our vision and turned it into a reality, delivering an app that works seamlessly, is user-friendly, and adds real value to our customers. The entire process, from development to launch, was smooth and efficient, and their ongoing support has been excellent. We’re proud of the final product and excited about the impact it’s having on our business."',
  },
  {
    id: 8,
    name: "Karen M.",
    position: "CEO, Business Solutions Group",
    desc: '"LUNEXA TECHNOLOGIES delivered exactly what we needed in terms of a custom web application. The project was a success from start to finish. They took the time to understand our specific needs and provided a solution that helped streamline our processes and improved our internal communications. The level of support they provided after the launch has been exceptional as well. I would highly recommend them for any web development project."',
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Game Development",
    // link: "/game-development",
    description:
      "In today’s highly competitive gaming world, creating an engaging and memorable experience is key.",
    icon: allServiceIcon6,
    detailHeading:
      "Game Development: Bringing Your Ideas to Life with Interactive Experiences",
    detailContent: (
      <>
        <p>
          In today’s highly competitive gaming world, creating an engaging and
          memorable experience is key. At LUNEXA TECHNOLOGIES, we specialize in
          crafting games that captivate players and leave a lasting impression.
          Whether you’re targeting mobile users or designing for the latest
          consoles, our team of developers, designers, and storytellers work
          together to build immersive experiences that keep players coming back.
        </p>
        <br />
        <ol>
          <li>
            <b>Mobile Games:</b>
            <br />
            We build fun, addictive mobile games that run smoothly on both iOS
            and Android. Our games are designed with attention to detail and
            optimized for performance across devices.
          </li>
          <li>
            <b>3D & AR/VR Games:</b>
            <br />
            Take gaming to the next level with 3D, augmented reality (AR), and
            virtual reality (VR) technologies that deliver unforgettable,
            interactive experiences.
          </li>
          <li>
            <b>Game Design & Narrative Development:</b>
            <br />
            We focus on creating rich storylines and gameplay mechanics that not
            only entertain but keep players invested.
          </li>
          <li>
            <b>Monetization & Analytics:</b>
            <br />
            Our team helps you implement effective monetization strategies that
            suit your game, including in-app purchases, ads, and subscription
            models, while analyzing user data to optimize the player experience.
          </li>
          <li>
            <b>Cross-Platform Development:</b>
            <br />
            With expertise in cross-platform tools, we ensure your game delivers
            a consistent experience across different devices, whether it’s
            mobile, console, or desktop.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 2,
    title: "App Development",
    link: "/app-development",
    description:
      "In today’s fast-paced digital world, having a reliable and well-designed mobile app is essential.",
    icon: allServiceIcon2,
    detailHeading:
      "App Development: High-Performing Mobile Solutions for Modern Businesses",
    detailContent: (
      <>
        <p>
          In today’s fast-paced digital world, having a reliable and
          well-designed mobile app is essential. We specialize in developing
          high-performing, intuitive apps that cater to your business needs.
          From creating simple apps to enterprise-level solutions, our team has
          the skills to bring your app vision to life.
        </p>
        <br />
        <ol>
          <li>
            <b>Native App Development:</b>
            <br />
            We build custom native apps tailored for iOS and Android, ensuring
            smooth performance, high responsiveness, and optimal user experience
            on each platform.
          </li>
          <li>
            <b>Cross-Platform Solutions:</b>
            <br />
            Using frameworks like React Native and Flutter, we create apps that
            work seamlessly on both iOS and Android, cutting development time
            without compromising quality.
          </li>
          <li>
            <b>Enterprise Apps:</b>
            <br />
            We design and develop robust enterprise solutions that streamline
            business operations, enhance communication, and improve overall
            efficiency.
          </li>
          <li>
            <b>App Maintenance & Support:</b>
            <br />
            Post-launch is just as important as the launch. We provide
            continuous maintenance and support to ensure your app stays
            up-to-date and performs smoothly.
          </li>
          <li>
            <b>UI/UX Design Integration:</b>
            <br />
            Our design team works closely with developers to create beautiful,
            user-friendly apps that keep users engaged and satisfied.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 3,
    title: "Artificial Intelligence (AI) Development",
    // link: "/artificial-intelligence-development",
    description:
      "Artificial intelligence is reshaping industries, providing businesses with smarter, more efficient ways to operate.",
    icon: allServiceIcon5,
    detailHeading:
      "Artificial Intelligence (AI) Development: Empowering Innovation with Intelligent Solutions",
    detailContent: (
      <>
        <p>
          Artificial intelligence is reshaping industries, providing businesses
          with smarter, more efficient ways to operate. We specialize in
          developing AI-powered systems that can automate tasks, improve
          decision-making, and enhance user experiences. Our AI solutions are
          tailored to meet the unique needs of your business, from machine
          learning to computer vision.
        </p>
        <br />
        <ol>
          <li>
            <b>Machine Learning:</b>
            <br />
            We help businesses harness the power of machine learning to predict
            trends, optimize operations, and make data-driven decisions.
          </li>
          <li>
            <b>Deep Learning:</b>
            <br />
            Our deep learning models help businesses tackle complex problems
            like image recognition, natural language processing, and other
            advanced AI applications.
          </li>
          <li>
            <b>Computer Vision:</b>
            <br />
            We build AI systems that can interpret visual data, enabling
            solutions like facial recognition, object detection, and automated
            image analysis.
          </li>
          <li>
            <b>Chatbots & Virtual Assistants:</b>
            <br />
            Our AI-driven chatbots and virtual assistants provide personalized,
            24/7 customer support, improving customer engagement and
            satisfaction.
          </li>
          <li>
            <b>AI Integration:</b>
            <br />
            We integrate AI seamlessly into your existing systems to automate
            processes and improve the overall efficiency of your business
            operations.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 4,
    title: "Web Development",
    link: "/web-development",
    description: "A strong online presence begins with a well-built website.",
    icon: allServiceIcon1,
    detailHeading: "Web Development: Building Digital Foundations for Success",
    detailContent: (
      <>
        <p>
          A strong online presence begins with a well-built website. Our team
          specializes in designing and developing websites that look great and
          function flawlessly, no matter the device. From simple landing pages
          to complex, interactive web applications, we create responsive,
          user-friendly websites that help your business succeed online.
        </p>
        <br />
        <ol>
          <li>
            <b>Custom Website Design:</b>
            <br />
            We create custom websites that align with your brand and meet your
            business goals, ensuring a unique, professional presence on the web.
          </li>
          <li>
            <b>E-Commerce Solutions:</b>
            <br />
            We develop scalable, secure e-commerce platforms that provide
            seamless shopping experiences, including features like secure
            payment gateways, product management, and inventory tracking.
          </li>
          <li>
            <b>Content Management Systems (CMS):</b>
            <br />
            Our team builds easy-to-manage websites using popular CMS platforms
            like WordPress, Joomla, and Drupal, allowing you to control your
            website’s content effortlessly.
          </li>
          <li>
            <b>Web Application Development:</b>
            <br />
            We design and build dynamic web applications that support your
            business needs, whether it’s a client portal, a custom CRM system,
            or a complex SaaS platform.
          </li>
          <li>
            <b>Search Engine Optimization (SEO):</b>
            <br />
            We ensure your website is optimized for search engines, helping you
            improve visibility and drive organic traffic to your site.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 5,
    title: "Natural Language Processing (NLP)",
    // link: "/natural-language-processing",
    description:
      "Natural language processing allows machines to understand, interpret, and generate human language.",
    icon: allServiceIcon7,
    detailHeading:
      "Natural Language Processing (NLP): Unlocking the Power of Human Language",
    detailContent: (
      <>
        <p>
          Natural language processing allows machines to understand, interpret,
          and generate human language. We leverage NLP to create intelligent
          systems that facilitate communication, improve customer service, and
          analyze large volumes of unstructured data. Whether you're building a
          chatbot, analyzing text data, or developing voice-powered solutions,
          we provide tailored NLP services to meet your needs.
        </p>
        <br />
        <ol>
          <li>
            <b>Text Analysis:</b>
            <br />
            We extract meaningful insights from text, such as sentiment
            analysis, keyword extraction, and categorization, helping businesses
            understand customer feedback, reviews, and more.
          </li>
          <li>
            <b>Chatbots & Conversational Agents:</b>
            <br />
            Our NLP-powered chatbots provide instant support and interaction,
            improving customer service and engagement.
          </li>
          <li>
            <b>Speech Recognition:</b>
            <br />
            We develop systems that can transcribe and understand spoken
            language, enabling hands-free controls, voice search, and
            voice-based applications.
          </li>
          <li>
            <b>Language Translation:</b>
            <br />
            Break down language barriers with our NLP solutions that facilitate
            automatic translation for multilingual content, helping businesses
            reach a global audience.
          </li>
          <li>
            <b>Named Entity Recognition (NER):</b>
            <br />
            We help you identify and extract key pieces of information from
            large amounts of text, such as names, dates, and locations,
            improving data analysis and insights.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 6,
    title: "UI/UX Design",
    // link: "/ui-ux-design",
    description:
      "User experience (UX) and user interface (UI) design play a crucial role in the success of any digital product.",
    icon: allServiceIcon3,
    detailHeading:
      "UI/UX Design: Crafting Intuitive and Engaging Digital Experiences",
    detailContent: (
      <>
        <p>
          User experience (UX) and user interface (UI) design play a crucial
          role in the success of any digital product. Our team combines
          creativity, design principles, and user psychology to craft visually
          appealing, intuitive interfaces that engage users and enhance
          usability. We believe that a seamless, enjoyable user experience is
          essential for keeping customers happy and loyal.
        </p>
        <br />
        <ol>
          <li>
            <b>User Research:</b>
            <br />
            We dive deep into understanding your users’ needs, behaviors, and
            pain points to create designs that resonate with them and solve real
            problems.
          </li>
          <li>
            <b>Wireframing & Prototyping:</b>
            <br />
            We create detailed wireframes and prototypes to visualize user
            flows, layouts, and interactions before development begins.
          </li>
          <li>
            <b>Interactive Design:</b>
            <br />
            We focus on designing intuitive, interactive elements that guide
            users effortlessly through your product or service.
          </li>
          <li>
            <b>Usability Testing:</b>
            <br />
            We conduct thorough usability tests to ensure your product is
            user-friendly and provides an optimal experience, refining the
            design based on feedback.
          </li>
          <li>
            <b>Responsive Design:</b>
            <br />
            We make sure your digital product works perfectly on any device –
            from desktops to smartphones – so users can interact with your
            product whenever and wherever they need it.
          </li>
        </ol>
      </>
    ),
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
