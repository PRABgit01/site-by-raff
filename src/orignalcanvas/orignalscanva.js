import {
  CanvaRow,
  CanvaSection,
  CanvaTitle,
  HandPainting,
  InnerWrapper,
  ProductGrid,
  Subpara,
  Subtitle,
  TextDesign,
} from "./orignal.styled";
import { ProductList } from "./productlist/productlist";

export function OrignalCanva() {
  return (
    <>
      <CanvaSection>
        <HandPainting>
          <InnerWrapper>
            <TextDesign>
              <CanvaTitle>
                <Subtitle>ORIGINALS</Subtitle>
                <Subpara>ON CANVAS</Subpara>
              </CanvaTitle>
            </TextDesign>
            <CanvaRow>
              <ProductGrid>
                <ProductList></ProductList>
              </ProductGrid>
            </CanvaRow>
          </InnerWrapper>
        </HandPainting>
      </CanvaSection>
    </>
  );
}
