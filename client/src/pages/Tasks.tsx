import { useState } from 'react';
import Grid from '../components/Grid';
import Tab from '../components/Tab';
import Button from '../components/Button';
import AssignTask from './AssignTask';

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('My Tasks');
  const [assignTaskOpen, setAssignTaskOpen] = useState(false);

  const handleClickAssignTask = () => {
    setAssignTaskOpen(true);
  };

  const onSubmit = () => {
    console.log('Submitted!!!');
  };

  return (
    <div className='p-14'>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-medium py-4'>Tasks Management</h1>
          <Button buttonName='Assign Task' buttonStyle='text-white bg-purple hover:opacity-90 rounded-md px-6 py-2' buttonClick={handleClickAssignTask} />
        </div>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'My Tasks' && <Grid />}
      </div>
      {assignTaskOpen && <AssignTask onSubmit={onSubmit} />}
    </div>
  );
};

export default Tasks;
