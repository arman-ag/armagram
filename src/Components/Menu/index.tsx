import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction, profileAction } from '../../redux/actions';
import MenuItem from './MenuItem';
import './menuStyle.scss';

const Menu = () => {
  const [width, setWindowWidth] = useState(0);
  const dispatch = useDispatch();

  const contacts: any = useSelector((state: any) => state.selectedProfile);
  const openMenu: any = useSelector((state: any) => state.menuPosition.openMenu);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    dispatch(profileAction.getAllProfile());
  }, [dispatch]);
  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

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
      <div className="menu-header">
        <div className="search-box">
          <button>
            <AiOutlineSearch color="#A8ABAD" size="25px" />
          </button>
          <input placeholder="Search..." type="text" />
        </div>
        <button className="contact-list" onClick={() => dispatch(modalAction.open('contact'))}>
          {' '}
          contact list{' '}
        </button>
      </div>
      {contacts?.map((item: any, index: number) => (
        <MenuItem profileData={item} key={item.id} />
      ))}
    </div>
  );
};

export default Menu;
