import { useCallback } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const onJenosaDemoContainerClick = useCallback(() => {
    window.open("https://github.com/Varun0530/hotel-jenosaa.git");
  }, []);

  const onJenosaDemoContainerClick1 = useCallback(() => {
    window.open("https://movie-app05.vercel.app");
  }, []);

  const onOrdnryDemoContainerClick = useCallback(() => {
    window.open(
      "https://www.figma.com/design/1JeFgUTxOZAa2uYgvK1SKL/Product-page?node-id=0-1&t=avESJwSPF7cUFu6m-1"
    );
  }, []);

  const onViewHeartContainerClick = useCallback(() => {
    window.open("https://github.com/Varun0530/Heart-Failure-Detection");
  }, []);

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='judgesABook']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onExperienceTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='workExperienceText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSkillsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='sKILLSText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='featuredProjectText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onVarunshukla0505gmailcomTextClick = useCallback(() => {
    window.open("varunshukla0505@gmail.com");
  }, []);

  const onWwwlinkedincominvarunshuklTextClick = useCallback(() => {
    window.open("www.linkedin.com/in/varunshukla05");
  }, []);

  const onGithubIconClick = useCallback(() => {
    window.open("https://github.com/Varun0530");
  }, []);

  return (
    <button className="portfolio">
      <img className="background-icon" alt="" src="/background.svg" />
      <div className="developed-webhr-landing">
        Developed web.hr landing page which is utilized in 25,000+ companies.
      </div>
      <div className="im-a-software">I'm a Software Engineer.</div>
      <div className="im-a-software1">I'm a Software Engineer.</div>
      <div className="linkedin-behance-container">
        <p className="linkedin">LinkedIn</p>
        <p className="linkedin">{`>>`}</p>
        <p className="linkedin">Behance</p>
        <p className="linkedin">{`>>`}</p>
        <p className="linkedin">Dribbble</p>
        <p className="linkedin">{`>>`}</p>
        <p className="linkedin">Instagram</p>
        <p className="linkedin">{`>>`}</p>
        <p className="linkedin">logo</p>
      </div>
      <div className="webhr-logo-vectorized" />
      <div className="header" />
      <img className="logo-icon" alt="" src="/logo.svg" />
      <div className="hello-i-am-container">
        <span className="hello-i-am-container1">
          <span className="hello-i-am">{`Hello! I Am `}</span>
          <span className="varun-shukla">Varun Shukla</span>
        </span>
      </div>
      <div className="a-techie-who">A Techie who</div>
      <img className="arrow-icon" alt="" src="/arrow.svg" />
      <div className="gradient" />
      <div className="judges-a-book-container" data-scroll-to="judgesABook">
        <p className="judges-a-book">Judges a book</p>
        <p className="linkedin">
          <span className="hello-i-am">{`by its `}</span>
          <span className="varun-shukla">cover</span>
          <span className="hello-i-am">...</span>
        </p>
      </div>
      <div className="because-if-the">
        Because if the cover does not impress you what else can?
      </div>
      <div className="a-self-taught-uiux-container">
        <span className="hello-i-am-container1">
          <p className="linkedin">
            A self-taught UI/UX designer, Front-end developer and machine
            learning Enthusiast exploring the field of AI/ML by performing
            versatile projects. I make meaningful and delightful digital
            products that create an equilibrium between user needs and business
            goals.
          </p>
        </span>
      </div>
      <div className="portfolio-child" />
      <div className="me">
        <div className="me-child" />
        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      </div>
      <div className="gradient1" />
      <div className="work-experience" data-scroll-to="workExperienceText">
        Work Experience
      </div>
      <div className="portfolio-item" />
      <img className="mask-group-icon" alt="" src="/mask-group.svg" />
      <div className="data-analyst-intern">Data Analyst Intern</div>
      <div className="duration-3-months">Duration: 3 Months</div>
      <div className="jenosa-demo" onClick={onJenosaDemoContainerClick}>
        <img className="jenosa-demo-child" alt="" src="/rectangle-977.svg" />
        <div className="view-demo2">View Demo2</div>
      </div>
      <div className="jenosa-demo1" onClick={onJenosaDemoContainerClick1}>
        <img className="jenosa-demo-child" alt="" src="/rectangle-977.svg" />
        <div className="view-demo2">View Demo1</div>
      </div>
      <div className="ordnry-demo" onClick={onOrdnryDemoContainerClick}>
        <img className="jenosa-demo-child" alt="" src="/rectangle-977.svg" />
        <div className="view-demo2">View Design4</div>
      </div>
      <div className="view-heart" onClick={onViewHeartContainerClick}>
        <img className="jenosa-demo-child" alt="" src="/rectangle-977.svg" />
        <div className="view-demo2"> Source Code3</div>
      </div>
      <img className="portfolio-inner" alt="" src="/group-2.svg" />
      <div className="experience">
        <img className="mask-group-icon1" alt="" src="/mask-group1.svg" />
        <div className="experience-child" />
        <div className="experience-item" />
        <div className="ui-ux">{`Ui & Ux  Intern`}</div>
        <div className="duration-6monthspresent">
          Duration: 6months(present)*
        </div>
        <img className="experience-inner" alt="" src="/group-1938.svg" />
      </div>
      <div className="experience1">
        <img className="mask-group-icon1" alt="" src="/mask-group2.svg" />
        <div className="experience-child" />
        <div className="experience-child1" />
        <div className="front-end-intern">Front-end Intern</div>
        <div className="duration-3-months1">Duration: 3 months</div>
        <img className="icons" alt="" src="/icons.svg" />
      </div>
      <div className="gradient2" />
      <div className="gradient3" />
      <img className="portfolio-icon" alt="" src="/portfolio@2x.png" />
      <img
        className="screenshot-2024-06-20-183831-1"
        alt=""
        src="/screenshot-20240620-183831-1@2x.png"
      />
      <img className="card-icon" alt="" src="/card@2x.png" />
      <div className="portfolio-text">
        <div className="a-movie-website">
          A Movie website build with the help of Java Script and CSS including
          animations. Includes movie description and IMDb rating of each movie.
        </div>
        <div className="movie-app">MOVIE-APP</div>
        <div className="featured-project" data-scroll-to="featuredProjectText">
          Featured Project
        </div>
      </div>
      <div className="gradient4" />
      <div className="gradient5" />
      <img className="portfolio-icon1" alt="" src="/portfolio1@2x.png" />
      <img
        className="screenshot-2024-06-20-191856-2"
        alt=""
        src="/screenshot-20240620-191856-2@2x.png"
      />
      <img className="card-heart-icon" alt="" src="/card1@2x.png" />
      <div className="a-ml-model">
        A Ml model which uses various parameters of human life style such as
        age, diet, Blood pressure levels etc to examine and evaluate the chances
        of heart failure. Important types of machine learning algorithms used
        are CNN and KNN in this project
      </div>
      <div className="heart-failure-prediction">
        Heart Failure Prediction using ML
      </div>
      <div className="gradient6" />
      <img
        className="screenshot-2024-06-20-190804-1"
        alt=""
        src="/screenshot-20240620-190804-1@2x.png"
      />
      <img className="card-hotel-icon" alt="" src="/card2@2x.png" />
      <div className="a-restaurant-website">{`A restaurant website build on React with Css used for styling which is purely Front-end. The website consist of hero page, header, footer and a hamburger menu with facilities including user login and ordering food `}</div>
      <div className="hotel-jenosa">Hotel-Jenosa</div>
      <div className="gradient7" />
      <img
        className="screenshot-2024-06-20-191507-1"
        alt=""
        src="/screenshot-20240620-191507-1@2x.png"
      />
      <img className="card-icon1" alt="" src="/card3@2x.png" />
      <div className="ui-ux-of">UI UX of a Clothing Brand</div>
      <div className="experience2">
        <div className="experience-child2" />
        <img className="mask-group-icon1" alt="" src="/mask-group.svg" />
        <div className="data-analyst-intern1">Data Analyst Intern</div>
        <div className="duration-6-months">Duration: 6 months</div>
      </div>
      <img className="group-icon" alt="" src="/group-1939.svg" />
      <div className="im-currently-looking-to-join-parent">
        <div className="im-currently-looking-container">
          <span className="hello-i-am-container1">
            <p className="im-currently-looking">
              I'm currently looking to join a cross-functional team
            </p>
            <p className="that-values-improving">{`that values improving people's lives through accessible design `}</p>
          </span>
        </div>
        <div className="cross-functional">{`cross-functional `}</div>
        <img className="group-child" alt="" src="/vector-25.svg" />
        <img className="group-item" alt="" src="/vector-26.svg" />
        <img className="group-inner" alt="" src="/vector-27.svg" />
        <img className="vector-icon" alt="" src="/vector-28.svg" />
        <img className="group-child1" alt="" src="/vector-29.svg" />
        <img className="group-child2" alt="" src="/vector-30.svg" />
        <div className="ellipse-div" />
        <img className="group-child3" alt="" src="/group-1899.svg" />
        <div className="group-child4" />
        <img className="group-child5" alt="" src="/group-1907.svg" />
      </div>
      <div className="skills" data-scroll-to="sKILLSText">
        SKILLS
      </div>
      <img className="portfolio-child1" alt="" src="/group-1942@2x.png" />
      <div className="home-parent">
        <div className="home" onClick={onHomeTextClick}>
          Home
        </div>
        <div className="home" onClick={onExperienceTextClick}>
          Experience
        </div>
        <div className="projects" onClick={onSkillsTextClick}>
          Skills
        </div>
        <div className="projects" onClick={onProjectsTextClick}>
          {" "}
          Projects
        </div>
        <div className="frame-child" />
      </div>
      <div className="designed-the-website-for-an-up-wrapper">
        <div className="designed-the-website-container">
          <span className="hello-i-am-container1">
            <p className="designed-the">{`Designed the  website for an upcoming  Clothing brand(ordnry.in) and still working with the tech team to build an full stack  `}</p>
            <p className="designed-the">{` E-Commerce website using MERN  `}</p>
          </span>
        </div>
      </div>
      <div className="group-parent">
        <img className="frame-item" alt="" src="/group-1897.svg" />
        <div className="phone" />
        <div className="message">
          <div className="contact-me-parent">
            <div className="contact-me">CONTACT ME:</div>
            <div
              className="varunshukla0505gmailcom"
              onClick={onVarunshukla0505gmailcomTextClick}
            >
              varunshukla0505@gmail.com
            </div>
            <div className="div">9373335055</div>
            <div
              className="wwwlinkedincominvarunshukl"
              onClick={onWwwlinkedincominvarunshuklTextClick}
            >
              www.linkedin.com/in/varunshukla05
            </div>
            <img className="vector-icon1" alt="" src="/vector1.svg" />
            <img className="group-child6" alt="" src="/vector-130.svg" />
            <div className="group-child7" />
            <div className="group-child8" />
            <div className="group-child9" />
            <img
              className="group-child10"
              alt=""
              src="/vector-3.svg"
              onClick={onVarunshukla0505gmailcomTextClick}
            />
          </div>
        </div>
      </div>
      <img className="portfolio-child2" alt="" src="/group-18971.svg" />
      <img
        className="github-icon"
        alt=""
        src="/vector.svg"
        onClick={onGithubIconClick}
      />
      <img
        className="linkden-icon"
        alt=""
        src="/linkden.svg"
        onClick={onWwwlinkedincominvarunshuklTextClick}
      />
    </button>
  );
};

export default Portfolio;
