import styled from "styled-components";
import Shimmer from "./Shimmer";
import SkeletonElement from "./Skeleton";

const SkeletonRecords = () => {
  return (
    <Container>
      <Record>
        <Top>
          <SkeletonElement skeletonType="text" />
          <SkeletonElement skeletonType="text" />
        </Top>
        <SkeletonElement skeletonType="title" />
      </Record>
      <Shimmer />
    </Container>
  );
};

export default SkeletonRecords;

const Container = styled.div`
  padding: 10px 15px;
  position: relative;
  max-width: 644px;
  border-radius: 10px;
  margin-top: 20px;
  background: #f2f2f2;
`;
const Record = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
