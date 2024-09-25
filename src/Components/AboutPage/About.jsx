import React from "react";
function About() {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <div className="text-secondary fs-6">
          The world’s only enterprise blockchain solution for global payments
        </div>
        <div className="text-dark fs-2">
          Best Blockchain & Better Than Any Blockchain
        </div>
        <br />
        <div className="text-secondary fs-6">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </div>
        <br />
        <div className="text-secondary fs-6">
          Cupiditate non provident, similique sunt in culpa qui officia deserunt
          mollitia animi, id est laborum et dolorum fuga.
        </div>
        <div className="">
          <label>Webicode</label>
          <span className="mx-2">-</span>
          <label>Ceo/Founder Chain</label>
          <div className="d-flex gap-2 justify-content-start align-items-center cursor-pointer">
            <section
              className="border border-dark d-flex justify-content-center align-items-center cursor-pointer"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50px",
              }}
            >
              <label className="bi bi-play-circle-fill text-dark cursor-pointer"></label>
            </section>
            <div className="cursor-pointer mb-3">
              <span className="text-secondary fs-5 cursor-pointer">
                Watch Video
              </span>
              <br />
              <span className="text-secondary cursor-pointer">How it work</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <img className="w-100" src="images/image.png" alt="" />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        
      </div>
    </div>
  );
}

export default About;
