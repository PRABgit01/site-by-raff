import {
  Unorderlist,
  ListProduct,
  Productimage,
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
      <Productimage>
        <a>
          <Product src={output.url}></Product>
        </a>
      </Productimage>
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
