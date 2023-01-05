import { menuItemProps } from 'Components/Menu/types';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction, selectedProfile } from 'redux/actions';
import './contactStyle.scss';

const SingleContact = ({ profileData }: menuItemProps) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: any) => state.selectedProfile);

  const choseUser = (profileData) => {
    if (!contacts.includes(profileData)) {
      dispatch(selectedProfile.chosesProfile('addContact', profileData));
    }
    dispatch(modalAction.close());
  };

  return (
    <div className="single-contact" onClick={() => choseUser(profileData)}>
      <img src={profileData.profileImage} alt="profile " className="profile" />
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
