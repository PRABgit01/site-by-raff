import {
  Unorderlist,
  ListProduct,
  Producimage,
  Product,
  TextAlignProduct,
} from "../orignal.styled";
import { ProductListsData } from "./productData";
import {
  FullDiscription,
  ProductCatogries,
  ProductTitle,
  ProductPrice,
  ProductPriceInfo,
  ProductInfo,
} from "./productstyle";

export function ProductList() {
  const ProductMenu = ProductListsData.map((output) => (
    <ListProduct>
      <Producimage>
        <a>
          <Product src={output.url}></Product>
        </a>
      </Producimage>
      <TextAlignProduct>
        <ProductInfo>
          <ProductTitle>
            <a>{output.title}</a>
          </ProductTitle>
          <ProductPrice>
            <ProductPriceInfo>{output.productprice}</ProductPriceInfo>
            <ProductCatogries>{output.productdescription}</ProductCatogries>
            <FullDiscription>{output.productcatagori}</FullDiscription>
          </ProductPrice>
        </ProductInfo>
      </TextAlignProduct>
    </ListProduct>
  ));
  return (
    <>
      <Unorderlist>{ProductMenu}</Unorderlist>
    </>
  );
}
