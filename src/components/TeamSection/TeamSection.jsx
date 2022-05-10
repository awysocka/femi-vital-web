import React from 'react';
import { PageWrapper } from '../../assets/styles/PageStyles.styles';
import { Wrapper, TeamList, StyledGatsbyLink, StyledIcon } from './TeamSection.styles';
import { StaticImage } from 'gatsby-plugin-image';

const TeamSection = () => {
  return (
    <Wrapper id="team">
      <PageWrapper>
        <h2>Poznaj nasz wspaniały zespół</h2>
        <TeamList>
          <li>
            <StaticImage
              src='../../assets/images/photo-6-iwona.jpg'
              alt='zdjęcie twarzy kobiecej'
            />
            <h3>Iwona Mazur-Ważny</h3>
            <p>Właścicielka, fizjoterapeutka</p>
            <StyledGatsbyLink to='/'>
              <span>więcej</span>
              <StyledIcon />
            </StyledGatsbyLink>
          </li>
          <li>
            <StaticImage
              src='../../assets/images/photo-6-iwona.jpg'
              alt='zdjęcie twarzy kobiecej'
            />
            <h3>Katarzyna Kaim</h3>
            <p>Fizjoterapeutka</p>
            <StyledGatsbyLink to='/'>
              <span>więcej</span>
              <StyledIcon />
            </StyledGatsbyLink>
          </li>
          <li>
            <StaticImage
              src='../../assets/images/photo-5-dominika.jpg'
              alt='zdjęcie twarzy kobiecej'
            />
            <h3>Dominika Terka</h3>
            <p>Fizjoterapeutka</p>
            <StyledGatsbyLink to='/'>
              <span>więcej</span>
              <StyledIcon />
            </StyledGatsbyLink>
          </li>
          <li>
            <StaticImage
              src='../../assets/images/photo-4-agata.jpg'
              alt='zdjęcie twarzy kobiecej'
            />
            <h3>Agata Rozwadowska</h3>
            <p>Fizjoterapeutka</p>
            <StyledGatsbyLink to='/'>
              <span>więcej</span>
              <StyledIcon />
            </StyledGatsbyLink>
          </li>
        </TeamList>
      </PageWrapper>
    </Wrapper>
  );
};

export default TeamSection;
