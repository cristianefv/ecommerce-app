import '../src/styles/App.css';
import '../src/styles/Navbar.css';
import '../src/styles/CartWidget.css';
import '../src/styles/ItemListContainer.css';

import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={true} />
    </>
  );
}

export default App;
