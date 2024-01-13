import {
  AboutMainImage,
  AboutSection,
  AboutWrapper,
  Copywrite,
  AboutDiscription,
  LeftBox,
  Line,
  RightBox,
  RightInerrBox,
  Signature,
  SignatureContainer,
  SignatureText,
  AboutTitle,
} from "./About.styled";

export function AboutApge() {
  return (
    <>
      <AboutSection>
        <AboutWrapper>
          <LeftBox>
            <AboutMainImage
              src="https://artbyraff.com/wp-content/uploads/2020/06/aboutImage.png"
              alt="art by raff client"
            ></AboutMainImage>
          </LeftBox>
          <RightBox>
            <RightInerrBox>
              <AboutTitle>ABOUT ME</AboutTitle>
              <AboutDiscription>
                <p>
                  I am a self-taught Viennese artist. Since my early childhood,
                  I have been involved in making graphic art. I have
                  experimented with pretty much any material and technique there
                  is. I love to mix a wide variety of materials from sprays,
                  acrylics to chalk, colored pencils and more. Thats are my
                  preferred media because they allow me to work flexibly and
                  intuitively.
                </p>
                <p>
                  My style is strongly oriented on form and color. I draw
                  inspiration from everyday life and my surroundings. It is
                  especially important to me that my art is approachable and
                  that it reflects life. I want to draw the viewer in with
                  intriguing combinations of shapes and colors and evoke
                  feelings of joy and pleasure.
                </p>
              </AboutDiscription>
              <SignatureContainer>
                <SignatureText>RAFFAELLO DJORDJEVIC</SignatureText>
                <Signature src="https://artbyraff.com/wp-content/uploads/2020/07/logo.png" />
              </SignatureContainer>
            </RightInerrBox>
          </RightBox>
        </AboutWrapper>
        <Line />
        <Copywrite>© 2024 ArtbyRaff</Copywrite>
      </AboutSection>
    </>
  );
}
