import styled from "styled-components";

type props = {
  skeletonType: string;
};

const SkeletonElement = ({ skeletonType }: props) => {
  return <SkeletonContainer skeletonType={skeletonType} />;
};
export default SkeletonElement;

const SkeletonContainer = styled.div<{ skeletonType?: string }>`
  background: #ddd;
  overflow: hidden;
  margin: 10px 0;
  border-radius: 4px;
  ${({ skeletonType }) => {
    switch (skeletonType) {
      case "text":
        return `width: 300px; height: 12px;`;
      case "title":
        return `width: 50%; height: 12px;`;
      default:
        return `width: 100%; height: 100%;`;
    }
  }}
`;
