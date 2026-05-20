import "./App.css";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Header from "./components/header";
import WhatsappIcon from "./components/whatsappIcon";
import HomePage from "./routes/homePage";

function App() {
  return (
    <>
      <div>
        <WhatsappIcon />
      </div>
      <div className="homepage">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

export default App;
