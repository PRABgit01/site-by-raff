import styled from "styled-components";

export const LeftScrollContainer = styled.div`
  position: fixed;
  left: 15px;
  top: 40%;
  z-index: 2;
`;

export const ScrollNavigationContainer = styled.ul`
  background: none;
  float: left;
  position: relative;
`;

export const NaviagationDesign = styled.li`
  list-style-type: none;
  background-color: #fff;
  margin: 6px 0px;

  &::before {
    display: contents;
    content: "";
    display: inline-block;
    height: 8px;
    padding: 20px 0 0 0;
  }
`;

export const LeftNavigationContainer = styled.div`
  float: left;
  padding: 0 6px 0 0px;
  background-color: #fff;
`;

export const Line = styled.a`
  width: 100%;
  max-width: 1px;
  border-radius: 0 1px 1px 0;
  background: #ddd;
`;

export const StyledLinkWrapper = styled.div`
  color: #ffffff;
  width: 100%;
  max-width: 1px;
  line-height: 1;
  visibility: hidden;
`;
