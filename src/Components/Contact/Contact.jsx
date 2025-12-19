import React, { useState } from "react";

export default function Contact() {
  const [inputActive, setActive] = useState("");
  return (
    <section id="contact" className="py-5">
      <div className="container py-5 mt-4">
        <h2 className="text-center text-uppercase fw-bolder fs-1 mb-3">
          conatact section
        </h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line"></div>
          <i className="fa-solid fa-star mx-2"></i>
          <div className="line"></div>
        </div>
        <form className="col-8 mx-auto">
          <div className="position-relative pt-4 mb-3">
            <label
              htmlFor="userName"
              className={`position-absolute  px-2 ${
                inputActive == "userName" ? "top-0" : "top-50"
              }`}
            >
              userName:
            </label>
            <input
              type="text"
              placeholder="userName"
              className="form-control border-0 py-3 px-2 border-bottom z-0"
              id="userName"
              name="userName"
              onInput={(el) => {
                el.target.value ? setActive(el.target.id) : setActive("");
              }}
            />
          </div>
          <div className="position-relative pt-4">
            <label
              htmlFor="userAge"
              className={`position-absolute px-2 ${
                inputActive == "userAge" ? "top-0" : "top-50"
              }`}
            >
              userAge:
            </label>
            <input
              type="text"
              placeholder="userAge"
              className="form-control border-0 py-3 px-2  mb-3 border-bottom"
              id="userAge"
              name="userAge"
              onInput={(el) => {
                el.target.value ? setActive(el.target.id) : setActive("");
              }}
            />
          </div>
          <div className="position-relative pt-4">
            {" "}
            <label
              htmlFor="userEmail"
              className={`position-absolute px-2 ${
                inputActive == "userEmail" ? "top-0" : "top-50"
              }`}
            >
              userEmail:
            </label>
            <input
              type="text"
              placeholder="userEmail"
              className="form-control border-0 py-3 mb-3 px-2 border-bottom "
              id="userEmail"
              name="userEmail"
              onInput={(el) => {
                el.target.value ? setActive(el.target.id) : setActive("");
              }}
            />
          </div>
          <div className="position-relative pt-4">
            {" "}
            <label
              htmlFor="userPassword"
              className={`position-absolute px-2 ${
                inputActive == "userPassword" ? "top-0" : "top-50"
              }`}
            >
              userPassword:
            </label>
            <input
              type="password"
              placeholder="userPassword"
              className="form-control border-0 py-3 mb-3 border-bottom mb-3 px-2"
              id="userPassword"
              name="userPassword"
              onInput={(el) => {
                el.target.value ? setActive(el.target.id) : setActive("");
              }}
            />
          </div>

          <button className="btn text-white mt-4">Send Message</button>
        </form>
      </div>
    </section>
  );
}
