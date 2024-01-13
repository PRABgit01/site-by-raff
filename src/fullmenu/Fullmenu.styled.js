import styled from "styled-components";



export const BannerSection = styled.section``;

export const SliderHerr = styled.section``;

export const DragAble = styled.section`
  width: 100%;

  &::before {
    display: table;
    content: "";
  }
`;

export const MainBannerBAckground = styled.div`
  width: 100%;
  height: 100%;
  min-height: 771px;
  max-height: 771px;
  outline: none;
`;

export const HomeBanner = styled.div`
  background-image: url(https://artbyraff.com/wp-content/uploads/2021/03/820870D6-04C6-4081-B048-A2B6C3FBAE51.jpg);
  width: 100%;
  height: 100%;
  background-size: cover; 
  background-position: center; 

  @media (max-width: 991px) {
    background-size: cover; 
    background-position: center; 
    
  }
`;

export const ButoonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 773px;
`;

export const AnchorButton = styled.a`
  width: 100%;
  max-width: 37px;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.31;
  text-transform: uppercase;
  border: 1px solid #fff;
  border-radius: 25px;
  color: #ffffff;
  padding: 22px 96px;
`;
