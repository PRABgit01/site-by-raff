import { ArtbyRaff } from "../artbyraff/artbyraffabout";
import { OrignalCanva } from "../orignalcanvas/orignalscanva";

import {
  AnchorButton,
  BannerSection,
  ButoonContainer,
  DragAble,
  HomeBanner,
  MainBannerBAckground,
  SliderHerr,
} from "./Fullmenu.styled";
import { Link } from "react-router-dom";
import { SliderArrow } from "./sliderArro/SliderArrow";
import { ContactPage } from "../contactpage/ContactPage";
import { Sculpture } from "../SCULPTURES/Sculptures.styled";
import { Sculptures } from "../SCULPTURES/Sculptures";

export function FullMenu() {
  return (
    <>
      <BannerSection>
        <SliderHerr>
          <DragAble>
            <MainBannerBAckground>
              <HomeBanner>
                <ButoonContainer>
                  <Link to="/about" target="_self">
                    <AnchorButton>About</AnchorButton>
                  </Link>
                </ButoonContainer>
              </HomeBanner>
            </MainBannerBAckground>
          </DragAble>
        </SliderHerr>
      </BannerSection>
      <SliderArrow />
      <ArtbyRaff />
      <OrignalCanva />
<Sculptures/>
      {/* <ContactPage /> */}
    </>
  );
}
