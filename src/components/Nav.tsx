import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { navData, NavItemProps } from '../data/navData';

const Nav = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleClickNavOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('.nav-items') || target.closest('.home-icon')) {
      return;
    }
    if (target.classList.contains('nav-container')) {
      setNavOpen((prev) => !prev);
      return;
    }
    setNavOpen(true);
  };

  return (
    <div className={`nav-container bg-purple duration-500 h-screen ${isNavOpen ? 'w-80' : 'w-20'}`} onClick={handleClickNavOpen}>
      <div className='flex flex-col justify-center gap-10 py-5'>
        <nav className='relative flex flex-col gap-10'>
          <Icon icon='fluent-emoji-high-contrast:raccoon' className='home-icon absolute left-[1rem] text-white w-[40px] h-[40px]' />
          <div className='absolute top-[6rem] flex flex-col justify-center cursor-pointer w-full'>
            {navData.map((item: NavItemProps) => (
              <NavLink key={item.id} to={item.link} className={({ isActive }) => `nav-items px-5 py-5 w-full ${isActive ? 'bg-darkPurple' : ''}`}>
                <div className='flex items-center gap-6'>
                  <Icon icon={item.iconName} className={item.style} />
                  {isNavOpen && <span className='text-white'>{item.nav}</span>}
                </div>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
