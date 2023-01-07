import { Header } from "./components/_layouts/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/_layouts/Footer";
import { Spanish } from "./components/spanish/Spanish";
import { English } from "./components/english/English";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<English />} />
          <Route path="/english" element={<English />} />
          <Route path="/spanish" element={<Spanish />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
