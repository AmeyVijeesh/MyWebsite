import React, { useState, useEffect } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import Home from './components/Home';
import Page2 from './components/page2';
import NavBar from './components/navbar';
import Footer from './components/footer';
import About from './components/aboutPage';
import Contact from './components/contact';
import AnimatedCursor from 'react-animated-cursor';
import SiteMapComp from './components/sitemap.jsx';
import PageNotFound from './components/404';
import Test from './components/test.jsx';

const TrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag('config', 'G-X7024L5107', {
      page_path: location.pathname,
    });
  }, [location]);

  return null; 
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        trailingSpeed={9}
        innerStyle={{
          backgroundColor: 'white',
        }}
        outerStyle={{
          border: '3px solid white',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}
      />
      <BrowserRouter>
        <TrackPageViews />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/MyGarage" element={<Page2 />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sitemap" element={<SiteMapComp />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="test" element={<Test />} />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </>
  );
};



export default App;
