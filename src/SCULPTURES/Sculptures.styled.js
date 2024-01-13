import styled from "styled-components";

export const SculptureSection = styled.section``;

export const SculptureContainer = styled.div`
  background-image: url(https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgPrintArt.jpg);
  background-position: center;
  height: 100%;
`;

export const ProductContainer = styled.section`
  width: 100%;
  max-width: 1185px;
  margin: 0 auto;
`;

export const HeadingSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;

  @media (max-width: 991px) {
    margin: 0;
  }
`;

export const SecondDiscription = styled.div`
  width: 100%;
  font-family: Graphik-Semibold;
  font-size: 88px;
  font-weight: 600;
  line-height: 0.51;
  text-align: left;
  text-transform: uppercase;
  color: #1c1b1c;
  position: relative;
  left: -7px;
  top: 104px;

  @media (max-width: 991px) {
    font-size: 32px;
    top: 41px;
  }
`;

export const SubTitle = styled.div`
  font-family: Graphik-Super;
  font-size: 102px;
  line-height: 1;
  letter-spacing: 19px;
  text-align: left;
  text-transform: uppercase;
  padding-left: 21px;
  margin-bottom: 10px;
  color: #4b4b4b;
  z-index: 1;

  @media (max-width: 991px) {
    font-size: 25px;
    letter-spacing: 3px;
  }
`;

export const SculpturesHomeProduct = styled.div``;

export const SculpturesHomeBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;

  @media (max-width: 991px) {
    margin: 0px 23px;
  }
`;

export const SculptureProductGrid = styled.div``;

export const SculptureList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Sculpture = styled.li`
  border: 1px solid #ddd;
  width: 100%;
  min-width: 247px;
  min-height: 362px;
  max-width: 200px;
  margin: 64px 65px 64px 0;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-20px);
  }
`;

export const SculptureContent = styled.div``;

export const ProductImageBox = styled.div`
  position: absolute;
  top: -60px;
  left: -30px;
  z-index: 2;
`;

export const SculptureImage = styled.img`
  min-height: 305px;
  max-height: 305px;
  max-width: 247px;
  min-width: 247px;
`;

export const SculptureProducInfoBox = styled.div`
  padding: 22px 9px 22px 15px;
  text-align: left;
  padding: 22px 20px 22px 25px;
  position: relative;
  margin-top: 240px;
`;

export const SculptureTitle = styled.a`
  font-family: "Graphik";
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
`;

export const SculptureName = styled.div``;

export const SculpturePrice = styled.div`
  font-family: Graphik-Bold;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin: 2px 0 9px;
`;

export const SculptureDetails = styled.div`
  margin: 5px 0 0 0;
  font-family: Graphik;
  font-size: 13px;
  line-height: 1.15;
  color: #919191;
  text-transform: uppercase;
`;

export const AddCartbutton = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  border: 1px solid #d8cf91;
  padding: 5px 8.2px 6px;
`;

export const LoadmoreContainer = styled.div``;

export const ViewButtonInnerCOntainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadMoreButton = styled.div`
  border: 1px solid #fff;
  border-radius: 30px;
  padding: 15px 30px;
  width: 100%;
  max-width: 125px;
  color: #fff;
  text-align: center;
`;
