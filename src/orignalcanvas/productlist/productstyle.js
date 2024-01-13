import styled from "styled-components";

export const Unorderlist = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ListProduct = styled.li`
  border: 1px solid #ddd;
  width: 20%;
  margin: 64px 44px 44px 0;
  min-width: 247px;
  min-height: 362px;
  position: relative;
  transition: opacity 1s ease;
  -webkit-transition: opacity 4s ease;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-10px); /* Adjust the value as needed */
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

export const Producname = styled.div``;

export const ProductInfo = styled.div`
  text-align: left;
  padding: 22px 20px 22px 25px;
  position: relative;
  margin-top: 250px;
`;

export const ProductTitle = styled.div``;

export const ProductPrice = styled.div``;

export const ProductCatogries = styled.div``;

export const ProductPriceInfo = styled.span`
  font-family: Graphik-Bold;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin: 2px 0 9px;
`;

export const FullDiscription = styled.div`
  font-family: Graphik;
  font-size: 13px;
  line-height: 1.15;
  color: #919191;
  text-transform: uppercase;
  width: 80%;
`;
