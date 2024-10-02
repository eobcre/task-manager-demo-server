import Button from './Button';

const Grid = () => {
  return (
    <div className='border border-slate-500 rounded-md w-full h-auto'>
      {/* header row */}
      <div className='col-span-4 grid grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr_0.4fr] text-white font-bold bg-purple opacity-90 border-b border-slate-400 p-4'>
        <div>Task</div>
        <div>Assigned By</div>
        <div>Document Type</div>
        <div>Date</div>
        <div></div>
      </div>
      {/* data row */}
      <div className='col-span-4 grid grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr_0.4fr] text-dark border-b border-slate-300 p-4'>
        <div>Review</div>
        <div>John Doe</div>
        <div>Application</div>
        <div>10/24/2024</div>
        <div>
          <Button buttonName='View' buttonStyle='text-white bg-purple hover:opacity-90 rounded-md px-6 py-1' />
        </div>
      </div>
      {/* data row*/}
      <div className='col-span-4 grid grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr_0.4fr] text-dark border-b border-slate-300 p-4'>
        <div>Approval</div>
        <div>Jane Smith</div>
        <div>Contract</div>
        <div>10/25/2024</div>
        <div>
          <Button buttonName='View' buttonStyle='text-white bg-purple hover:opacity-90 rounded-md px-6 py-1' />
        </div>
      </div>
    </div>
  );
};

export default Grid;
