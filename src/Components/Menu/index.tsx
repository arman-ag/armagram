import useScreenSize from 'hooks/useScreenSize';
import { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction, profileAction } from '../../redux/actions';
import MenuItem from './MenuItem';
import './menuStyle.scss';

const Menu = () => {
  const dispatch = useDispatch();
  const [width] = useScreenSize();
  const contacts: any = useSelector((state: any) => state.selectedProfile);
  const openMenu: any = useSelector((state: any) => state.menuPosition.openMenu);
  useEffect(() => {
    dispatch(profileAction.getAllProfile());
  }, [dispatch]);

  const responsive = () => {
    if (width > 500) {
      return { display: 'block' };
    } else if (width < 500 && openMenu) {
      return { display: 'block' };
    } else {
      return { display: 'none' };
    }
  };
  return (
    <div style={responsive()} className="menu">
      <div style={{ position: 'sticky', top: 0 }}>
        <div className="menu-header">
          <img src="/images/Armagram.png" />
          <div className="search-box">
            <button>
              <AiOutlineSearch color="#A8ABAD" size="25px" />
            </button>
          </div>
        </div>
        <div className="menu-container">
          {contacts?.map((item) => (
            <MenuItem profileData={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="menu-add-contact">
        <button
          className="menu-add-contact-button"
          onClick={() => dispatch(modalAction.open('contact'))}>
          <BiPlus size="2.1rem" color="white" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
