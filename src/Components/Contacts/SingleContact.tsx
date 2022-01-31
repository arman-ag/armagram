import React from 'react';
import './contactStyle.scss';

const SingleContact = ({ profileData }: any) => {
  const image = () => {
    switch (profileData?.name) {
      case 'Shakira':
        return (
          <img src={require('assets/images/shakira.jpg')} alt="profile " className="profile" />
        );

      case 'Joe Biden':
        return <img src={require('assets/images/biden.jpg')} alt="profile " className="profile" />;

      default:
        break;
    }
  };

  return (
    <div className="single-contact">
      {image()}
      <div className="profile-info">
        <h3>{profileData?.name}</h3>
        <div className="single-contact-phone">
          <span className="single-contact-phone-text">{profileData?.phone} </span>
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
