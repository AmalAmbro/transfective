import logo from './logo.svg';
import './assets/styles/main.css';
import Header from './components/Header';
import Spotlight from './components/Spotlight';
import InnovativeSection from './components/InnovativeSection';
import WhyChooseSection from './components/whychoose/WhyChooseSection';
import Footer from './components/Footer';
import TranslationSection from './components/TranslationSection';
import FaqSection from './components/FaqSection';
import ErrorBoundary from './components/error/errorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <Spotlight />
        <InnovativeSection />
        <TranslationSection />
        <FaqSection />
        <WhyChooseSection />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
