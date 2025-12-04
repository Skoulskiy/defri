import './App.css';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Team from './components/Team/Team';
import Technologies from './components/Technologies/Technologies';
import TopSection from './components/TopSection/TopSection';

function App() {
  return (
    <div className="App">
      <Header />
      <TopSection />
      <Technologies />
      <Team />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
