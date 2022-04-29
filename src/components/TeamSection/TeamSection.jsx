import React from 'react';
import { PageWrapper } from '../../assets/styles/PageStyles.styles';
import agata from '../../assets/images/photo-4-agata.jpg';
import dominika from '../../assets/images/photo-5-dominika.jpg';
import iwona from '../../assets/images/photo-6-iwona.jpg';
import { Wrapper, TeamList, StyledLink, StyledIcon } from './TeamSection.styles';

const TeamSection = () => {
  return (
    <Wrapper>
      <PageWrapper>
        <h2>Poznaj nasz wspaniały zespół</h2>
        <TeamList>
          <li>
            <img src={iwona} alt='' />
            <h3>Iwona Mazur-Ważny</h3>
            <p>Właścicielka, fizjoterapeutka</p>
            <StyledLink>
              więcej <StyledIcon />
            </StyledLink>
          </li>
          <li>
            <img src={iwona} alt='' />
            <h3>Katarzyna Kaim</h3>
            <p>Fizjoterapeutka</p>
            <StyledLink>
              więcej <StyledIcon />
            </StyledLink>
          </li>
          <li>
            <img src={dominika} alt='' />
            <h3>Dominika Terka</h3>
            <p>Fizjoterapeutka</p>
            <StyledLink>
              więcej <StyledIcon />
            </StyledLink>
          </li>
          <li>
            <img src={agata} alt='' />
            <h3>Agata Rozwadowska</h3>
            <p>Fizjoterapeutka</p>
            <StyledLink>
              więcej <StyledIcon />
            </StyledLink>
          </li>
        </TeamList>
      </PageWrapper>
    </Wrapper>
  );
};

export default TeamSection;
