import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const AddNewRecordSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 65px 65px 0 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 74px;
  img {
    width: 300px;
    height: auto;
  }
  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.darkGray};
    margin: 12px 0 0 300px;
  }
`;
export const ContentSearchTitle = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  color: ${colors.darkest};
  margin-bottom: 18px;
`;
export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10px auto 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchTitle = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  color: ${colors.darkest};
  margin-bottom: 18px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  color: #000000;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const ResultContent = styled.div<{ view?: boolean }>`
  padding: 16px 37px;
  min-width: 750px;
  background: #ffffff;
  border: 1px solid #484848;
  border-radius: 24px;
  display: ${(p) => (p.view ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 16px 0 0 -50px;
`;
export const CarouselSection = styled.div<{ isHaveContent?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: ${(p) =>
    p.isHaveContent ? "90px auto 0 auto" : "150px auto 0 auto"};
  position: relative;
  .slick-prev {
    display: none;
  }
  .slick-next {
    display: none;
  }
  .slick-slide {
    margin-left: 5px;
  }
`;
export const CarouselTitle = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  color: ${colors.darkest};
  margin-bottom: 50px;
`;
export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px !important;
  margin-left: 20px;
  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.darkest};
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${colors.light};
  }
`;
export const ArrowLeftContainer = styled.div`
  padding: 12px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: #eeeeee;
  border-radius: 50%;
  left: -30px;
  top: 170px;
`;
export const ArrowRightContainer = styled.div`
  padding: 12px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: #eeeeee;
  border-radius: 50%;
  right: -30px;
  top: 170px;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 27px 55px;
  background-color: ${colors.footerBackground};
`;
export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  img {
    width: 220px;
    height: auto;
    margin-right: 25px;
  }
`;
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 170px;
  color: white;
`;
export const ContactTitle = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;
export const Adress = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;
export const Email = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;
export const RightSection = styled.div`
  width: 467.49px;
  height: 222.49px;
  .leaflet-container {
    height: 100%;
  }
`;
