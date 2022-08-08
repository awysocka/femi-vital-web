import React from 'react';
import { PageWrapper } from '../../assets/styles/PageStyles.styles';
import { Wrapper, TeamList, StyledGatsbyLink, StyledIcon } from './TeamSection.styles';
import { StaticImage } from 'gatsby-plugin-image';

const TeamSection = () => {
  return (
    <Wrapper id='zespol'>
      <PageWrapper>
        <h2>Poznaj nasz wspaniały zespół</h2>
        <TeamList>
          <li>
            <StaticImage
              src='../../assets/images/photo-6-iwona.jpg'
              alt='zdjęcie kobiety, Iwona Mazur-Ważny'
              placeholder='blurred'
            />
            <h3>Iwona Mazur-Ważny</h3>
            <p>Właścicielka, fizjoterapeutka</p>
            <StyledGatsbyLink to='/iwona-mazur-wazny'>
              <span>więcej</span>
              <StyledIcon />
            </StyledGatsbyLink>
          </li>
          <li>
            <StaticImage
              src='../../assets/images/photo-7-katarzyna.jpg'
              alt='zdjęcie kobiety, Katarzyna Kaim'
              placeholder='blurred'
            />
            <h3>Katarzyna Kaim</h3>
            <p>Fizjoterapeutka</p>
            <StyledGatsbyLink to='/katarzyna-kaim'>
              <span>więcej</span>
              <StyledIcon />
            </StyledGatsbyLink>
          </li>
          <li>
            <StaticImage
              src='../../assets/images/photo-4-agata.jpg'
              alt='zdjęcie kobiety, Agata Jung'
              placeholder='blurred'
            />
            <h3>Agata Jung</h3>
            <p>Fizjoterapeutka</p>
            <StyledGatsbyLink to='/agata-jung'>
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
