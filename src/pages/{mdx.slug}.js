import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import { PageWrapper } from '../assets/styles/PageStyles.styles';
import {
  Wrapper,
  StyledLink,
  Content,
  ImageContainer,
} from '../assets/styles/TeamPageStyles.styles';
import { FaCalendarAlt } from 'react-icons/fa';

const TeamMember = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.featuredImage);

  return (
    <PageWrapper>
      <Seo title={`${data.mdx.frontmatter.title}`} description={data.mdx.frontmatter.description} />
      <Wrapper>
        <ImageContainer>
          <GatsbyImage image={image} alt='zdjęcie twarzy kobiecej' loading='eager' objectFit />
        </ImageContainer>
        <Content>
          <h1>{data.mdx.frontmatter.title}</h1>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
          <StyledLink
            href='https://femivitalfizjoterapiakobieca.booksy.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaCalendarAlt />
            <span>Umów się na wizytę</span>
          </StyledLink>
        </Content>
      </Wrapper>
    </PageWrapper>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        description
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      body
    }
  }
`;

export default TeamMember;
