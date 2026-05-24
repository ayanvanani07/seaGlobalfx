import "./App.css";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Header from "./components/header";
import WhatsappIcon from "./components/whatsappIcon";
import Accounts from "./routes/accounts";
import Forex from "./routes/forex";
import HomePage from "./routes/homePage";
import Partners from "./routes/partners";
import Plateforms from "./routes/plateforms";

function App() {
  return (
    <>
      <div>
        <WhatsappIcon />
      </div>
      {/* <div className="homepage">
        <Header />
        <HomePage />
        <Footer />
      </div> */}

      {/* <div className="forex">
        <Header />
        <Forex />
        <Footer />
      </div> */}

      {/* <div className="accounts">
        <Header />
        <Accounts />
        <Footer />
      </div> */}

      {/* <div className="plateforms">
        <Header />
        <Plateforms />
        <Footer />
      </div> */}

      <div className="partners">
        <Header />
        <Partners />
        <Footer />
      </div>
    </>
  );
}

export default App;
