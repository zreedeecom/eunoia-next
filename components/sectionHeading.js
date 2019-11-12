import React from 'react';

const SectionHeading = props => {

  return (
    <>
      <h2
        className={`section-heading position-relative mt-5 ${
          props.blob ? `blob-${props.blob}` : ""
        }`}
      >
        {props.title}
      </h2>

      <style jsx>{`
        .section-heading {
          font-family: "Playfair Display", serif;
          font-size: 3.56rem;
        }
        .section-heading::after {
          content: "";
          position: absolute;
          background-size: 100%;
          width: 177px;
          height: 174px;
          top: -35px;
          left: -80px;
          z-index: -1;
        }
        .section-heading.blob-pink::after {
          background-image: url("/images/blob-pink.svg");
        }
        .section-heading.blob-green::after {
          background-image: url("/images/blob-green.svg");
          width: 150px;
          height: 170px;
        }
        .section-heading.blob-blue::after {
          background-image: url("/images/blob-blue.svg");
        }
      `}</style>
    </>
  );
}

export default SectionHeading