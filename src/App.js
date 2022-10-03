import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import ArticleGraphic from "./components/ArticleGraphic"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ArticleGraphic />
      <Testimonials />
    </div>
  );
}

export default App;
