import { useState } from 'react';
import { Icon } from '@iconify/react';
import { navData, NavItemProps } from '../data/navData';

const Nav = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleClickNavOpen = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div className={`bg-purple duration-500 h-screen ${isNavOpen ? 'w-48' : 'w-20'}`} onClick={handleClickNavOpen}>
      <div className='flex flex-col justify-center gap-10 py-5'>
        <nav className='relative flex flex-col gap-10'>
          <Icon icon='fluent-emoji-high-contrast:raccoon' className='absolute left-[1.2rem] text-white w-[40px] h-[40px]' />
          <div className='absolute top-[6rem] left-[1.5rem] flex flex-col justify-center gap-10'>
            {navData.map((item: NavItemProps) => (
              <div key={item.id} className='flex items-center gap-6'>
                <Icon icon={item.iconName} className={item.style} />
                <span className='text-white'>{item.nav}</span>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
