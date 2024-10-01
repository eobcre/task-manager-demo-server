import { Routes, Route } from 'react-router-dom';
import useStore from './store/useStore';
import Nav from './components/Nav';
import Tasks from './pages/Tasks';

const App = () => {
  const { isNavOpen } = useStore();

  return (
    <div className='flex'>
      <Nav />
      <main className={`w-full ${isNavOpen ? '330px' : '65px'}`}>
        <Routes>
          <Route path='/Tasks' element={<Tasks />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
