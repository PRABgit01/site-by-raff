import styled from "styled-components";

export const ArtbyyRaffSection = styled.section``;

export const ArtByRaffWrapper = styled.div`
  background: url(https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgIntroduction.jpg);
  height: 682px;
  background-position: center;
  background-size: 100% auto;

  @media (max-width: 991px) {
    height: auto;
    background-position: center;
    background-size: contain;
    margin: 0;
    padding: 45px 0 0px;
  }
`;
export const ArtbyyRaffContainer = styled.div`
  width: 100%;
  max-width: 1128px;
  margin: 0 auto;
`;

export const ArtByRaffHeadingBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ArtbyRaffSubtitle = styled.div`
  font-family: Graphik-Semibold;
  font-size: 88px;
  font-weight: 600;
  line-height: 0.51;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  left: 17px;
  top: 16px;
  color: #1c1b1c;

  @media (max-width: 991px) {
    font-size: 26px;
    left: 53px;
    top: 9px;
  }
`;

export const ArtbyRaffSubPArt = styled.div`
  font-family: Graphik-Super;
  font-size: 102px;
  line-height: 1;
  letter-spacing: 19px;
  text-transform: uppercase;
  margin-bottom: 0;
  position: relative;
  left: 10px;
  color: #4b4b4b;

  @media (max-width: 991px) {
    font-size: 31px;
    letter-spacing: 3.38px;
  }
`;

export const ArtbYRAffInnerArtByRaffWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;

  @media (max-width: 991px) {
    margin: 0px 26px 0px;
    font-size: 20px;
  }
`;

export const ArtByRaffInsideBox = styled.div`
  width: 100%;
  max-width: auto;
  flex: 0 0 auto;
`;

export const IntroDescription = styled.div`
  width: 100%;
  max-width: 967px;
  margin-top: 80px;
  padding-left: 67px;
  font-family: Graphik-Light;
  font-size: 22px;
  font-weight: 300;
  line-height: 2;
  text-align: left;
  color: #d8d8d8;
  border-left: 5px solid #d8cf91;

  @media (max-width: 991px) {
    margin-top: 40px;
    font-size: 15px;
    padding: 0px 7px 0px;
  }
`;
