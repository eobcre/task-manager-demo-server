import { useState } from 'react';
import Grid from '../components/Grid';
import Tab from '../components/Tab';
import Button from '../components/Button';

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('My Tasks');

  return (
    <div className='p-14'>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-medium py-4'>Tasks Management</h1>
          <Button buttonName='Assign Task' buttonStyle='text-white bg-purple hover:opacity-90 rounded-md px-6 py-2' />
        </div>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'My Tasks' && <Grid />}
      </div>
    </div>
  );
};

export default Tasks;
