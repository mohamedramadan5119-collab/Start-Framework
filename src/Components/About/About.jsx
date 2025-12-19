import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-5 mt-5  d-flex justify-content-center align-items-center"
    >
      <div className="container text-white py-5 mt-4">
        <h2 className="text-uppercase text-center fw-bolder fs-1 m-3">
          about component
        </h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line"></div>
          <i className="fa-solid fa-star mx-2"></i>
          <div className="line"></div>
        </div>
        <div className="row col-10 mx-auto g-3">
          <div className="col-md-6">
            <div className="item">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="item">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
