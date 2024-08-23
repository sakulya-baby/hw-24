import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { Main } from "./components/Main";
import { MainCart } from "./components/MainCart";

function App() {
  return (
    <div>
      <Header />
      <MainCart />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
