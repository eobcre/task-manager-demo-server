import { assignTaskData, assignDocumentTypeData } from '../data/assignTaskData';
import Button from '../components/Button';

interface AssignTaskProps {
  onSubmit: () => void;
}

const AssignTask: React.FC<AssignTaskProps> = ({ onSubmit }) => {
  return (
    <div className='flex items-center justify-centermin-h-screen'>
      <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
        <div className='flex flex-col bg-lightGray rounded-lg shadow-lg p-10 w-[600px] h-auto'>
          <h1 className='text-lg font-bold border-b border-gray-300 pb-1'>Task Assignment</h1>
          {/* task selection */}
          <div className='py-4'>
            <h3 className='text-md py-3'>Select the task that you want to assign to your team member</h3>
            <div className='flex gap-6'>
              {assignTaskData.map((task, index) => (
                <div key={task.id} className='flex items-center gap-2'>
                  <input id={`task-${index}`} type='radio' />
                  <label htmlFor={`task-${index}`}>{task.taskName}</label>
                </div>
              ))}
            </div>
          </div>
          {/* document type selection */}
          <div className='py-4'>
            <h3 className='text-md py-3'>Select the document type</h3>
            <div className='flex gap-6'>
              {assignDocumentTypeData.map((type, index) => (
                <div key={type.id} className='flex items-center gap-2'>
                  <input id={`document-${index}`} type='radio' />
                  <label htmlFor={`document-${index}`}>{type.documentType}</label>
                </div>
              ))}
            </div>
          </div>
          {/* desc */}
          <div className='py-4'>
            <h3 className='py-3'>Description</h3>
            <textarea className='w-full h-40 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'></textarea>
          </div>
          {/* submit */}
          <Button buttonName='Submit' buttonStyle='text-white bg-purple hover:opacity-90 rounded-md px-6 py-2' buttonClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AssignTask;
