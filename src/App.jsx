import '../src/styles/App.css';
import '../src/styles/Navbar.css';
import '../src/styles/CartWidget.css';
import '../src/styles/ItemListContainer.css';
import '../src/styles/Footer.css';

import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={true} />
      <Footer />
    </>
  );
}

export default App;
