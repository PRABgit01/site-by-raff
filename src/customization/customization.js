import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  CustomizedSection,
  CustomizedContainer,
  CustomizeCustomSlider,
  CustomizedSliderWrapper,
  CostomizedSliderImage,
  CostomizedSlider,
  CostomizedSliderNameWrapper,
  CostomizedSliderName,
  CustomizeHeadingWrapper,
  CustomizeHeading,
} from "./customization.styled";
import { CustomizeData } from "./customizationData";

const Customized = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const handleBeforeChange = (current, next) => {
    setCenterIndex(next);
  };

  const ImageOpacity = (currentIndex, slideIndex) => {
    return currentIndex === slideIndex ? 1 : 0.2;
  };

  const settings = {
    dots: false,
    arrows: true,
    centerMode: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: handleBeforeChange,
  };

  useEffect(() => {
    setCenterIndex(settings.initialSlide);
  }, [settings.initialSlide]);

  return (
    <div>
      <CustomizedSection>
        <CustomizedContainer>
          <CustomizeHeadingWrapper>
            <CustomizeHeading>„ customized “</CustomizeHeading>
          </CustomizeHeadingWrapper>
          <Slider {...settings}>
            {CustomizeData.map((c, index) => (
              <CustomizeCustomSlider key={c.CustomizationHeading}>
                <CustomizedSliderWrapper>
                  <CostomizedSlider isActive={index === centerIndex}>
                    <CostomizedSliderImage
                      style={{
                        opacity: ImageOpacity(centerIndex, index),
                      }}
                    >
                      <img src={c.CustomizationImg} alt="" />
                    </CostomizedSliderImage>
                    {index === centerIndex && (
                      <CostomizedSliderNameWrapper>
                        <CostomizedSliderName>
                          {c.CustomizationHeading}
                        </CostomizedSliderName>
                      </CostomizedSliderNameWrapper>
                    )}
                  </CostomizedSlider>
                </CustomizedSliderWrapper>
              </CustomizeCustomSlider>
            ))}
          </Slider>
        </CustomizedContainer>
      </CustomizedSection>
    </div>
  );
};

export default Customized;
