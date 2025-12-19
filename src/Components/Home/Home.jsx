import React from "react";
import avatar from "../../assets/avatar.svg";

export default function Home() {
  return (
    <section
      id="home"
      className="pt-5 d-flex justify-content-center align-items-center"
    >
      <div className="container py-5 text-white text-center ">
        <img src={avatar} alt="" className="mb-4 " />
        <h2 className="text-uppercase text-center fw-bolder fs-1 m-3">
          start Framework
        </h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line"></div>
          <i className="fa-solid fa-star mx-2"></i>
          <div className="line"></div>
        </div>

        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  );
}
