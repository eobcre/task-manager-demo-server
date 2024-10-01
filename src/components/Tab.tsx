import React from 'react';

interface TabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tab: React.FC<TabProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className='flex gap-10 py-10'>
      <div
        onClick={() => {
          setActiveTab('My Tasks');
        }}
        className={activeTab === 'My Tasks' ? 'text-dark font-bold border-b-4 border-purple cursor-pointer pb-1' : 'border-transparent'}
      >
        <a href='#MyTasks'>My Tasks</a>
      </div>
      <div
        onClick={() => {
          setActiveTab('Assigned');
        }}
        className={activeTab === 'Assigned' ? 'text-dark font-bold border-b-4 border-purple cursor-pointer pb-1' : 'border-transparent'}
      >
        <a href='#Assigned'>Assigned</a>
      </div>
    </div>
  );
};

export default Tab;
