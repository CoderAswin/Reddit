import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Page from "./Components/Page/Page";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Content />
              <Footer/>
            </>} />
          <Route path="/image/:id" element={
          <>
            <Navbar />
            <Page/>
          </>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
