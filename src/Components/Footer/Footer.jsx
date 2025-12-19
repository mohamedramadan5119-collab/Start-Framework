import React from "react";

export default function Footer() {
  return (
    <section className="text-white text-center pt-5" id="footer">
      <div className="container py-5">
        <div className="row gy-4 py-3">
          <div className="col-md-4">
            <div className="item">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <h3>AROUND THE WEB</h3>
              <div>
                <i className="fa-brands fa-facebook rounded-circle border border-1 border-white me-2 "></i>
                <i className="fa-brands fa-twitter rounded-circle border border-1 border-white  me-2"></i>
                <i className="fa-brands fa-linkedin-in rounded-circle border border-1 border-white  me-2"></i>
                <i className="fa-solid fa-globe rounded-circle border border-1 border-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mb-0 py-4">Copyright © Your Website 2021</p>
    </section>
  );
}
