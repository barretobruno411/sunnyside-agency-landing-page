import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import ArticleGraphic from "./components/ArticleGraphic"
import Testimonials from "./components/Testimonials"
import Pictures from "./components/Pictures"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ArticleGraphic />
      <Testimonials />
      <Pictures />
      <Footer />
    </div>
  );
}

export default App;
