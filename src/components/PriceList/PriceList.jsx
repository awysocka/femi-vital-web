import React from 'react';
import { Wrapper, StyledTable, Note } from './PriceList.style';

const PriceList = () => {
  return (
    <Wrapper id='cennik'>
      <h2>Cennik</h2>
      <StyledTable>
        <tbody>
          <tr>
            <td>Fizjoterapia uroginekologiczna z wykorzystaniem USG</td>
            <td>55 minut</td>
            <td>180zł</td>
          </tr>
          <tr>
            <td>Fizjoterapia uroginekologiczna z wykorzystaniem USG - Iwona Mazur-Ważny</td>
            <td>55 minut</td>
            <td>200zł</td>
          </tr>
          <tr>
            <td>
              Konsultacja uroginekologiczna - Iwona Mazur-Ważny (terapia prowadzona w innym
              gabinecie)
            </td>
            <td>55 minut</td>
            <td>220zł</td>
          </tr>
        </tbody>
      </StyledTable>
      <Note>* obowiązuje od 1.09.2023</Note>
    </Wrapper>
  );
};

export default PriceList;
