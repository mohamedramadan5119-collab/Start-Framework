import React, { useState } from "react";
import first from "../../assets/poert1.png";
import second from "../../assets/port2.png";
import third from "../../assets/port3.png";
import Modal from "../Modal/Modal";

export default function Portfolio() {
  const [modalState, setModal] = useState("d-none");
  const [imagePath, setPath] = useState("");
  const images = [first, second, third, first, second, third];
  return (
    <>
      <section id="portfolio" className="py-5 mt-4">
        <div className="container py-5">
          <h2 className="text-center text-uppercase fw-bolder fs-1 mb-3">
            portfolio component
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line"></div>
            <i className="fa-solid fa-star mx-2"></i>
            <div className="line"></div>
          </div>
          <div className="row g-5 pt-3">
            {images.map((ele, i) => {
              return (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div className="item position-relative">
                    <img
                      src={ele}
                      alt=""
                      className="w-100 rounded-3"
                      onClick={(el) => {
                        setModal("d-flex");
                        setPath(el.target.getAttribute("src"));
                      }}
                    />
                    <div className="layer position-absolute top-0 start-0 rounded-3 w-100 h-100 d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-plus text-white fa-6x"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Modal
        setModal={setModal}
        imagePath={imagePath}
        modalState={modalState}
      />
    </>
  );
}
