import styled from "styled-components";

export const CustomizedSection = styled.div``;

export const CustomizedContainer = styled.div`
  width: 100%;
  max-width: 1128px;
  margin: 0 auto;
`;

export const CustomizeHeadingWrapper = styled.div`
  text-align: center;
`;

export const StyledNextArrow = styled.div`
  &.slick-arrow {
    margin: 55px 0;
    height: 44px;
    width: 100%;
    max-width: 53px;
    display: block;
    position: relative;
    right: -661px;
    top: -411px;
    background: #2d2b2b;
    border-radius: 25px;

    &:before {
      position: absolute;
      top: 13px;
      right: 18px;
    }
  }
`;

export const StyledPreviousArrow = styled.div`
  &.slick-arrow {
    margin: 55px 0;
    position: relative;
    left: 593px;
    top: 700px;
    background: #2d2b2b;
    height: 44px;
    width: 100%;
    max-width: 53px;
    display: flex;
    border-radius: 25px;
    cursor: pointer;
    
    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const CustomizeCustomSlider = styled.div`
  height: max-content;
  text-align: center;
  border-radius: 10px;
`;

export const CustomArrowIcon = styled.div`
  svg {
    fill: #ffffff;
  }
`;

export const CostomizedSlider = styled.div`
  display: flex;
`;

export const CustomizedSliderWrapper = styled.div`
  border-radius: 10px 10px 0 0;
`;

export const CostomizedSliderImage = styled.div`
  margin: 20px -14px 9px 0;
  position: relative;

  img {
    width: 330px;
    height: 420px;
  }

  @media (max-width: 991px) {
    margin: 20px -24px 9px 0;
    
    img {
      max-width: 100px;
      width: 100%;
      max-height: 200px;
    }
  }
`;

export const CustomizeHeading = styled.h3`
  font-family: "Graphik-Super";
  font-size: 84px;
  line-height: 1.58;
  letter-spacing: 9.88px;
  text-align: center;
  color: #4b4b4b;
  text-transform: uppercase;
  margin: 0 0 -30px 0;

  @media (max-width: 991px) {
    font-size: 36px;
  }
`;

export const CostomizedSliderName = styled.p`
  font-family: "Graphik-Super";
  font-size: 24px;
  font-weight: bold;
  color: #d8cf91;
  margin: 0;
`;

export const CostomizedSliderNameWrapper = styled.div`
  text-align: center;
  padding: 10px;
  margin: 10px 0 0;
`;


export const ArrowContainer = styled.div`

  &.slick-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    transform: translateX(-50%);
    background: #2d2b2b;
    height: 44px;
    width: 100%;
    max-width: 54px;
    border-radius: 25px;
  }
`;
