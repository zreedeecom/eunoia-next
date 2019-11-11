import React from 'react';

const SectionHeading = props => {

  const blobs = {
    pink: {
      svg: `<svg width="177" height="174" viewBox="0 0 177 174" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M80.9913 0.20132C106.272 1.2178 130.028 10.4054 147.1 29.0563C165.892 49.5851 182.483 76.3394 175.281 103.209C168.257 129.411 138.807 139.107 114.408 151.02C89.7214 163.073 62.9557 182.365 38.4046 170.039C14.0366 157.806 14.5913 124.786 9.03288 98.1176C3.68951 72.4808 -7.66051 44.5676 7.85317 23.4576C23.781 1.78394 54.0952 -0.880105 80.9913 0.20132Z" fill="#E2ACD7"/></svg>` }
  }

  return (
    <>
      <h2 className="section-heading position-relative mt-5">
        <span className={`blob blob-${props.blob}`}></span>
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
          background-image: url("/images/blob-pink.svg");
          background-size: 100%;
          width: 177px;
          height: 174px;
          top: -35px;
          left: -80px;
          z-index: -1;
        }
        .blob {
        }
        .blob-pink {
        }
        .blob-green {
        }
        .blob-blue {
        }
      `}</style>
    </>
  );
}

export default SectionHeading