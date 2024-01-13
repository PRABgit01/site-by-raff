import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
`;

export const StyledLogoSection = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  @media (max-width: 991px) {
    /* max-width: 274px;  */
  }
`;
export const StyledLogoContainer = styled.nav`
  width: 100%;
  max-width: 1128px;
  padding: 0 15px;
  margin: 0 auto;

  @media (max-width: 991px) {
    max-width: none;
    padding: 0px;
    margin: 0px;
  }
`;

export const CustomizedContainerObject = styled.div`
  width: 100%;
  max-width: 1128px;
`;

export const StyledAlignItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  @media (max-width: 991px) {
    max-width: none;
    padding: 0px;
    margin: 0px;
  }
`;

export const HeadLeftLink = styled.div`
  width: 100%;
  max-width: 300px;
`;

export const IconBox = styled.div`
  font-size: 20px;
  line-height: 2px;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
`;

export const ArtByRafIconContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

export const HeadingImage = styled.img`
  width: 100%;
  max-width: 240px;
`;

export const CartContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  max-width: 30px;
  background-color: #000;
`;
