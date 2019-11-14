import React from 'react';

const ProfilePic = props => {
  return (
      <>
        <div className="profilePic col-4">
          <img src={props.src} alt={`Foto de ${props.name}`} />
          <div className="text">
            <h3>{props.name}</h3>
            <h4 className="role">{props.role}</h4>
          </div>
        </div>
      <style jsx>{`
        .profilePic {
          background: url(/images/profile-blob.svg) no-repeat top center;
          text-align: center;
        }
        img {
          width: 145px;
          border-radius: 100%;
          padding: 12px 0;
        }
        h3 {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 17px;
          line-height: 18px;
          text-align: center;
          text-transform: uppercase;
          color: var(--eunoia-black);
        }
        h4.role {
          font-family: Playfair Display;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 18px;
          text-align: center;
          color: var(--eunoia-black);
        }
      `}</style>
    </>
  );
}

export default ProfilePic