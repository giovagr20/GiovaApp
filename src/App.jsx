import { Header } from "./components/_layouts/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/_layouts/Footer";
import { Spanish } from "./pages/spanish/Spanish";
import { English } from "./pages/english/English";
import { ErrorNotFound } from "./components/error/Error";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<English />} />
          <Route path="/english" element={<English />} />
          <Route path="/spanish" element={<Spanish />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
