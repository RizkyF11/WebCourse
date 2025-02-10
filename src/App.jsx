import { Routes, Route} from "react-router";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";


import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";

function App() {
  return(
    <>
    <NavbarComponent/>
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/kelas" Component={KelasPage}/>
      <Route path="/testimonial" Component={TestimonialPage}/>
      <Route path="/faq" Component={FaqPage}/>
      <Route path="/syaratketentuan" Component={SyaratKetentuanPage}/>
    </Routes>
    <FooterComponent/>
    </>
  )
}
export default App
