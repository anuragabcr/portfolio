import Header from "./container/Header/Header";
import Footer from "./container/Footer/Footer";
import Skills from "./container/Skills/Skills";
import Work from "./container/Work/Work";
import About from "./container/About/About";
import Navbar from "./components/Navbar/Navbar";
import Certificate from "./container/Certificate/Certificate";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Certificate />
      <Skills />
      <Footer />
    </div>
  );
}
