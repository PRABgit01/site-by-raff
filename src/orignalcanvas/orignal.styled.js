import styled from "styled-components";

export const CanvaSection = styled.section``;

export const HandPainting = styled.section`
  background-image: url(https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgHandPainting.jpg);
  min-height: 682px;
  background-position: right center;
  background-size: 100% auto;
  padding: 0 0 50px;

  @media (max-width: 991px) {
    height: auto;
    background-position: right center;
    margin: 0;
    background-size: 100% auto;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1185px;
  margin: 0 auto;

  @media (max-width: 991px) {
    max-width: 0;
    margin: 0px 0px 0px 59px;
  }
`;

export const TextDesign = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CanvaTitle = styled.div`
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;

export const Subtitle = styled.div`
  font-family: Graphik-Super;
  font-size: 102px;
  line-height: 1;
  letter-spacing: 19px;
  text-align: right;
  color: #4b4b4b;
  text-transform: uppercase;
  position: relative;
  right: -45px;

  @media (max-width: 991px) {
    letter-spacing: 2px;
    right: 26px;
    font-size: 26px;
    top: 20px;
  }
`;

export const Subpara = styled.div`
  font-family: Graphik-Semibold;
  font-size: 88px;
  font-weight: 600;
  line-height: 1;
  text-align: right;
  text-transform: uppercase;
  color: #86847bc9;
  position: relative;
  right: 30px;
  margin-bottom: 40px;

  @media (max-width: 991px) {
    font-size: 30px;
    line-height: 2;
  }
`;

export const CanvaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 -15px;

  @media (max-width: 991px) {
    margin: 0;
  }
`;

export const ProductGrid = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Unorderlist = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const ListProduct = styled.li`
  border: 1px solid #ddd;
  width: 20%;
  margin: 64px 44px 64px 0;
  min-width: 247px;
  min-height: 362px;
  position: relative;
  transition: opacity 1s ease;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-30px);
  }
`;

export const TextAlignProduct = styled.div`
  text-align: center;
`;

export const Producimage = styled.div`
  position: absolute;
  top: -60px;
  left: -30px;
  z-index: 2;
  min-height: 250px;
  max-height: 250px;
  max-width: 247px;
  min-width: 247px;
`;

export const Product = styled.img`
  min-height: 305px;
  max-height: 305px;
  max-width: 247px;
  min-width: 247px;
`;

