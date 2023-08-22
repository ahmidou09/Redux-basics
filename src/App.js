import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';

function App() {
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <>
      <Navbar />
      <CartContainer />
      {isOpen ? <Modal /> : ''}
    </>
  );
}
export default App;
