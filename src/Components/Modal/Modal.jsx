import React from "react";

export default function Modal({ setModal, modalState, imagePath }) {
  return (
    <section
      id="modal"
      className={`position-fixed top-0 w-100 h-100 z-3 ${modalState} justify-content-center align-items-center `}
      onClick={(el) => {
        if (el.target.getAttribute("id")) setModal("d-none");
      }}
    >
      <img src={imagePath} alt="" className="col-lg-6 col-12" />
    </section>
  );
}
