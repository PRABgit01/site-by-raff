import {
  ArtbYRAffInnerArtByRaffWrapper,
  ArtbyRaffSubPArt,
  ArtbyRaffSubtitle,
  ArtbyyRaffContainer,
  ArtbyyRaffSection,
  ArtByRaffHeadingBox,
  ArtByRaffInsideBox,
  IntroDescription,
  ArtByRaffWrapper,
} from "./artbyraffstyled";

export function ArtbyRaff() {
  return (
    <div id="artmesection">
      <ArtbyyRaffSection>
        <ArtByRaffWrapper>
          <ArtbyyRaffContainer>
            <ArtByRaffHeadingBox>
              <ArtbyRaffSubtitle>welcome</ArtbyRaffSubtitle>
              <ArtbyRaffSubPArt>ART BY RAFF</ArtbyRaffSubPArt>
              <ArtbYRAffInnerArtByRaffWrapper>
                <ArtByRaffInsideBox>
                  <IntroDescription>
                    <p>
                      Welcome to my page. My name is Raffaello Djordevic and I
                      am a Viennese artist. I make mostly pop-arts and
                      mixed-media pieces.
                    </p>
                    <p>
                      You can purchase original works as well as prints on my
                      homepage. I also take commissions. To commission a piece,
                      just contact me via the homepage.
                    </p>
                  </IntroDescription>
                </ArtByRaffInsideBox>
              </ArtbYRAffInnerArtByRaffWrapper>
            </ArtByRaffHeadingBox>
          </ArtbyyRaffContainer>
        </ArtByRaffWrapper>
      </ArtbyyRaffSection>
    </div>
  );
}
