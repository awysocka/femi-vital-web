import React from 'react';
import { PageWrapper } from '../../assets/styles/PageStyles.styles';
import { Wrapper, AdvantagesList } from './AdvantagesSection.styles';

const AdvantagesSection = () => {
  return (
    <Wrapper>
      <PageWrapper>
        <h2>Dlaczego szukasz właśnie nas?</h2>
        <AdvantagesList>
          <li>
            <h3>Indywidualne podejście</h3>
            <p>
              Jesteśmy tutaj dla Ciebie. Słuchamy uważnie aby doskonale zrozumieć Twoje potrzeb i na
              tej podstawie dobrać odpowiednią terapię.
            </p>
          </li>
          <li>
            <h3>Wykwalifikowana kadra</h3>
            {/* <p>
              W Femi-Vital mamy wspaniałe fizjoterapeutki, które regularnie podnoszą swoje
              kwalifikacje.
            </p> */}
            <p>
              Posiadamy wieloletnią praktykę zawodową, popartą doświadczeniem klinicznym,
              wysokospecjalistycznymi szkoleniami, a także pracą na poziomie instruktorskim.
            </p>
          </li>
          <li>
            <h3>Tysiące zadowolonych kobiet</h3>
            <p>
              Kilkunastoletnie doświadczenie pozwoliło nam już pomóc tysiącom kobietom w odzyskaniu
              kontroli nad własnym ciałem.
            </p>
          </li>
        </AdvantagesList>
      </PageWrapper>
    </Wrapper>
  );
};

export default AdvantagesSection;
