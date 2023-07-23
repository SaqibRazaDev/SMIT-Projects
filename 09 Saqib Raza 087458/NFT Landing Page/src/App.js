import './App.css';
import Navbar from './Components/Navbar';
import DiscoverSection from './Components/DiscoverSection';
import TrendingSection from './Components/TrendingSection';
import MoreNftSection from './Components/MoreNftSection';
import TopCreatorSection from './Components/TopCreatorSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <DiscoverSection />
      <TrendingSection />
      <MoreNftSection />
      <TopCreatorSection />
    </div>
  );
}

export default App;
