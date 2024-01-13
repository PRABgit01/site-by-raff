import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SliderAroowMainContainer,
  SliderARoowLink,
} from "./SliderArrow.styled";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";
export function SliderArrow() {
  const scrollToArt = () => {
    scroll.scrollTo("1", {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <>
      <SliderAroowMainContainer>
        <SliderARoowLink onClick={scrollToArt}>
          <FontAwesomeIcon icon={faAngleDown} color="white" />
        </SliderARoowLink>
      </SliderAroowMainContainer>
    </>
  );
}
