import styled from "@emotion/styled";
import Header from "components/common/Header";
const PatientsPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const HeaderText = styled.div`
  margin-top: 100px;
  font-size: 50px;
  text-align: center;
`;

const HeaderSubText = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: gray;
  text-align: center;
`;
const SideBar = styled.div`
  width: 15vw;
  background-color: gray;
`;
const PageContentWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 20vw;
`;
export default function DetailPage() {
  return (
    <>
      <PatientsPageWrapper>
        <SideBar>asd</SideBar>
        <PageContentWrapper>
          <HeaderText>Patient Detail</HeaderText>
          <HeaderSubText>Remember your patients!</HeaderSubText>
        </PageContentWrapper>
      </PatientsPageWrapper>
    </>
  );
}
