import styled, { keyframes } from "styled-components";

const Shimmer = () => {
  return (
    <ShimmerWrapper>
      <MainShimmer />
    </ShimmerWrapper>
  );
};

export default Shimmer;

const loading = keyframes`
  0% {
    transform: translateX(-150%);
  }
  50% {
    transform: translateX(-60%);
  }
  100% {
    transform: translateX(150%);
  }
`;

const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${loading} 2.5s infinite;
`;

const MainShimmer = styled.div`
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  transform: skewX(-20deg);
`;
