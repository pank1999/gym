import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero-section/HeroSection";
import Join from "./components/join/Join";
import Plans from "./components/plans/Plans";
import Programs from "./components/programs/Programs";
import Reasons from "./components/reasons/Reasons";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Programs />
                <Reasons />
                <Plans />
                <Testimonials />
                <Join />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <HeroSection />
                <Blog />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
