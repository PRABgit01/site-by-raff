import {
  HeadingSection,
  LoadMoreButton,
  LoadmoreContainer,
  ProductContainer,
  SculptureContainer,
  SculptureSection,
  SculpturesHomeBox,
  SecondDiscription,
  SubTitle,
  ViewButtonInnerCOntainer,
} from "./Sculptures.styled";
import { SculptureProduc } from "./sculptureProduct";

export function Sculptures() {
  return (
    <>
      <SculptureSection>
        <SculptureContainer>
          <ProductContainer>
            <HeadingSection>
              <SecondDiscription>
                <p>ART BY RAFF</p>
              </SecondDiscription>
              <SubTitle>Sculptures & furniture</SubTitle>
            </HeadingSection>
            <SculpturesHomeBox>
              <SculptureProduc />
            </SculpturesHomeBox>
          </ProductContainer>
          <LoadmoreContainer>
          <ViewButtonInnerCOntainer>
            <LoadMoreButton>Load more</LoadMoreButton>
          </ViewButtonInnerCOntainer>
        </LoadmoreContainer>
        </SculptureContainer>
      </SculptureSection>
    </>
  );
}
