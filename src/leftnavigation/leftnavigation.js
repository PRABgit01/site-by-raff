import {
  LeftScrollContainer,
  Line,
  LeftNavigationContainer,
  NaviagationDesign,
  StyledLinkWrapper,
  ScrollNavigationContainer,
} from "./leftNavigation.styled";

import { Link } from "react-router-dom";

export function LeftScroll() {
  return (
    <>
      <LeftScrollContainer>
        <ScrollNavigationContainer>
          <NaviagationDesign>
            <LeftNavigationContainer>
              <Line>
                <a href="#artmesection">
                  <StyledLinkWrapper>art</StyledLinkWrapper>
                </a>
              </Line>
            </LeftNavigationContainer>
          </NaviagationDesign>
          <NaviagationDesign>
            <LeftNavigationContainer>
              <Line></Line>
            </LeftNavigationContainer>
          </NaviagationDesign>
          <NaviagationDesign>
            <LeftNavigationContainer>
              <Line></Line>
            </LeftNavigationContainer>
          </NaviagationDesign>
          <NaviagationDesign>
            <LeftNavigationContainer>
              <Line></Line>
            </LeftNavigationContainer>
          </NaviagationDesign>
        </ScrollNavigationContainer>
      </LeftScrollContainer>
    </>
  );
}
