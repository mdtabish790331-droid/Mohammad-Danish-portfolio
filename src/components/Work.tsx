import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Agro Analytica",
    category: "AI-Powered Agriculture Assistant",
    tools: "Machine Learning, Streamlit, Flask, Gemini AI, Weather & Market APIs",
    description:
      "A smart agriculture assistant built using Machine Learning, Streamlit, Flask, Google Gemini AI, Weather API, and Market Price API — helping farmers and students make data-driven farming decisions.",
    image: "/images/agro-analytica.svg",
  },
  {
    name: "Secure Market Data Obfuscation Registry",
    category: "Secure Financial Data Pipeline",
    tools: "Python, yfinance, Registry-Based Mapping",
    description:
      "A secure, registry-driven data pipeline that fetches market data via yfinance, obfuscates asset identifiers like tickers, and resolves them back through a separate registry-based mapping system — keeping raw identifiers protected end-to-end.",
    image: "/images/market-data-registry.svg",
  },
  {
    name: "AI Student Manager Pro",
    category: "AI-Powered Study Management System",
    tools: "Streamlit, Gemini AI, Python",
    description:
      "A comprehensive study management system built with Streamlit that helps students track subjects, exercise routines, and daily progress — with a dashboard, weekly analytics, a study planner, and a Gemini AI-powered assistant for personalized study tips.",
    image: "/images/ai-student-manager.svg",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
    duration: 1,
  }, 0);

  // Fade the whole section out smoothly as the last bit of the horizontal
  // scroll finishes, so it eases away instead of snapping when the pin
  // releases and the tech balls come into view.
  timeline.to(".work-section", {
    opacity: 0,
    ease: "none",
    duration: 0.25,
  }, 0.8);

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p>{project.description}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
