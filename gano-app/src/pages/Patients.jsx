import styled from "@emotion/styled";
import Header from "components/common/Header";
import PatientList from "components/patient/PatientList";
import RoomList from "components/patient/RoomList";
const PatientsPageWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 20vw;
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

const PageContent = styled.div`
  margin-top: 30px;
`;
export default function PatientsPage() {
  return (
    <>
      <Header />
      <PatientsPageWrapper>
        <HeaderText>Patients List</HeaderText>
        <HeaderSubText>Remember your patients!</HeaderSubText>
        <PageContent>
          <RoomList />
          <PatientList />
        </PageContent>
      </PatientsPageWrapper>
    </>
  );
}
