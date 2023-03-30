import React from 'react';

const IntroText: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 offset-md-1 offset-lg-2">
          <div className="intro-text-wrapper">
            <h2 className="text-white pt-custom mb-5">
              <div className="intro-text-line">Hello! My name is Kyle Parks.</div>
              <div className="intro-text-line">
                I am a Full Stack Developer, and I love to create and learn new things.
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroText;
