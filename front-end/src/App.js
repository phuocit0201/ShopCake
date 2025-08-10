import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;