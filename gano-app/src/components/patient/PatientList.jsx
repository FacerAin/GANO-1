import React from "react";
import styled from "@emotion/styled";
import PatientCard from "components/patient/PatientCard";


const PatientListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

let patients = [1,2,3]

const PatientList = function () {
  return (
    <PatientListWrapper>
      {patients.map((num) => (
        <PatientCard/>
      ))}
    </PatientListWrapper>
  );
};

export default PatientList;
