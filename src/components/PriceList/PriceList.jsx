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
            <td>220zł</td>
          </tr>
          <tr>
            <td>Fizjoterapia uroginekologiczna z wykorzystaniem USG - Iwona Mazur-Ważny</td>
            <td>55 minut</td>
            <td>240zł</td>
          </tr>
          <tr>
            <td>
              Konsultacja uroginekologiczna - Iwona Mazur-Ważny (terapia prowadzona w innym
              gabinecie)
            </td>
            <td>55 minut</td>
            <td>260zł</td>
          </tr>
        </tbody>
      </StyledTable>
      <Note>* obowiązuje od 1.01.2026</Note>
    </Wrapper>
  );
};

export default PriceList;
