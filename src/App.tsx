import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import './App.css';
import IssueXI from './pages/issues/IssueXI'
import IssueX from './pages/issues/IssueX'
import IssueIX from './pages/issues/IssueIX'
import IssueVIII from './pages/issues/IssueVIII'
import IssueVII from './pages/issues/IssueVII'
import IssueVI from './pages/issues/IssueVI'
import IssueV from './pages/issues/IssueV'
import IssueIV from './pages/issues/IssueIV'
import IssueIII from './pages/issues/IssueIII'
import IssueII from './pages/issues/IssueII'
import IssueI from './pages/issues/IssueI'
import Submissions from './pages/Submissions'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/issue-i" element={<IssueI />} />
            <Route path="/issue-ii" element={<IssueII />} />
            <Route path="/issue-iii" element={<IssueIII />} />
            <Route path="/issue-iv" element={<IssueIV />} />
            <Route path="/issue-v" element={<IssueV />} />
            <Route path="/issue-vi" element={<IssueVI />} />
            <Route path="/issue-vii" element={<IssueVII />} />
            <Route path="/issue-viii" element={<IssueVIII />} />
            <Route path="/issue-ix" element={<IssueIX />} />
            <Route path="/issue-x" element={<IssueX />} />
            <Route path="/issue-xi" element={<IssueXI />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
