import React from 'react';
import "../../styles/components/pages/SkillsSection.css";

function SkillsSection() {
  return (
    <div className="container-xxl skills">
      <div className="page-header">
        <div className="row">
          <div className="col-lg-12">
            <h1>Habilidades</h1>
            <p className="lead">Autodidacta. Con constancia, disciplina y práctica uno puede sacar lo mejor de sí mismo.</p>
          </div>
          <div className="skills-center">
          <div className="col-md-6" style={{paddingTop: "20px"}}>
            <span className="badge rounded-pill bg-primary">SQL - MySQL </span>
            <div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: "60%"}}>
              <span>60%</span>
              </div>
            </div>
          </div>

          <div className="col-md-6" style={{paddingTop: "20px"}}>
            <span className="badge rounded-pill bg-primary">PHP </span>
            <div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: "85%"}}>
                <span>85%</span>
              </div>
            </div>
          </div>

          <div className="col-md-6" style={{paddingTop: "20px"}}>
            <span className="badge rounded-pill bg-primary">HTML5 </span>
            <div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: "95%"}}>
                <span>95%</span>
              </div>
            </div>
          </div>

          <div className="col-md-6" style={{paddingTop: "20px"}}>
            <span className="badge rounded-pill bg-primary">CSS3 </span>
            <div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: "80%"}}>
                <span>80%</span>
              </div>
            </div>
          </div>

          <div className="col-md-6" style={{paddingTop: "20px"}}>
            <span className="badge rounded-pill bg-primary">Bootstrap </span>
            <div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: "90%"}}>
                <span>90%</span>
              </div>
            </div>
          </div>

          <div className="col-md-6" style={{paddingTop: "20px"}}>
            <span className="badge rounded-pill bg-primary">React-JS </span>
            <div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: "45%"}}>
              <span>45%</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;