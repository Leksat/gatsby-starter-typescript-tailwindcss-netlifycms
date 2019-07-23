import * as React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { P } from "../components/typography/p";

export interface INotFoundPage {
  data: INotFoundPageQuery;
}

const PageWrapper = styled.div({
  textAlign: "center",
  paddingTop: 64,
  paddingBottom: 64,
});

const NotFoundPage: React.SFC<INotFoundPage> = ({ data }) => (
  <Layout>
    <SEO title={data.content.frontmatter.title} />
    <PageWrapper>
      <h1>{data.content.frontmatter.title}</h1>
      <P>{data.content.frontmatter.subtitle}</P>
    </PageWrapper>
  </Layout>
);

interface INotFoundPageQuery {
  content: {
    frontmatter: {
      title: string;
      subtitle: string;
    };
  };
}

export const query = graphql`
  query NotFoundPageQuery {
    content: markdownRemark(frontmatter: { templateKey: { eq: "404-page" } }) {
      frontmatter {
        title
        subtitle
      }
    }
  }
`;

export default NotFoundPage;