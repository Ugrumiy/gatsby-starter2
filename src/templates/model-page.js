/*eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from "styled-components"
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
const Type1 = ({title, color, type}) => <div style={{backgroundColor: `${color}`}}><h3>{type}</h3><h4>{title}</h4></div>;
const Type2 = ({title, color, type}) => <div style={{backgroundColor: `${color}`}}><h3>{type}</h3><h4>{title}</h4></div>;
const Gallery = (props) => {
  console.log(props);
  return (<div>
    <h4>{props.title}</h4>
    <div>{props.items.map(item => <img src="" alt="werwer" />)}
    </div>
  </div>)
};
  const compMap = {
    type1: Type1,
    type2: Type2,
    gallery: Gallery
  };
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <h2>
        {title}
      </h2>
      <PageContent content={content} />
    </section>
  )
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log('xxxxx', JSON.parse(post.frontmatter.description));
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
      {data.markdownRemark.frontmatter.layout.map((item) => React.createElement(compMap[item.type], {...item}))}
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
query Wage($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      description
      layout {
        color
        title
        type
        items {
          title
        }
      }
    }
  }
}
`
