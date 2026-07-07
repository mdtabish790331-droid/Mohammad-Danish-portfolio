import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>
                  <a
                    href="https://indiquantresearch.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    INDIQUANT
                  </a>
                </h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working as a full stack developer with a special focus on
              backend engineering, building and maintaining scalable systems
              in 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
