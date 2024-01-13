import { AboutApge } from "./Aboutme/About";
import { GlobalStyles } from "./App.styled";
import { Sculptures } from "./SCULPTURES/Sculptures";

import "./App.css";
import { StyledWrapper } from "./App.styled";
import { FullMenu } from "./fullmenu/Fullmenu";
import { Header } from "./header/Header";
import { Route, Routes } from "react-router-dom";
import { OrignalCanva } from "./orignalcanvas/orignalscanva";
import { ArtbyRaff } from "./artbyraff/artbyraffabout";
import { LeftScroll } from "./leftnavigation/leftnavigation";
import { DetailPAge } from "./navigationinformation/navigation";
import { ContactPage } from "./contactpage/ContactPage";
import Customized from "./customization/customization";
function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Header />
        <LeftScroll />
      </div>
      <StyledWrapper>
        <Routes>
          <Route path="/" element={<FullMenu />}></Route>
          {/* <Route path="art" element={<ArtbyRaff id="art" />}></Route> */}
          <Route path="about" element={<AboutApge />}></Route>
          {/* <Route path="info" element={<DetailPAge />}></Route> */}
        </Routes>
        <Sculptures />  
     <Customized/>
        <ContactPage />

      </StyledWrapper>
    </>
  );
}

export default App;
