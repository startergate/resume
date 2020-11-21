import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  JavaScript,
  Python,
  TypeScript,
} from '../components/profiles/language';
import Project from '../components/projects/simple';

import './index.css';

const IndexPage = () => {
  const highlighted = useStaticQuery(graphql`
    query getHighlightedProjects {
      allProjectsJson(filter: { isHighlighted: { eq: true } }, limit: 4) {
        nodes {
          id
          name
          description
          startedAt
          finishedAt
          tags
          links
          imgSrc
        }
      }
    }
  `).allProjectsJson.nodes;

  return (
    <Layout>
      <SEO title="Home" />
      <section
        className="title"
        id="title"
        style={{ width: '100%', height: '100vh' }}
      >
        <div>
          <h1>
            <span>Learn, Find, Figure Out</span>
          </h1>
          <p className="title-name">STARTERGATE / 최호승</p>
          <p>백엔드 엔지니어</p>
          <p>게임 개발자</p>
          <p>
            3학년 고등학생 @{' '}
            <a href="https://gsm.gen.hs.kr">광주소프트웨어마이스터고등학교</a>
          </p>
        </div>
      </section>
      <section id="backend-dev">
        <h2>Backend Engineer</h2>
      </section>
      <section id="game-dev">
        <h2>Game Developer</h2>
      </section>
      <section id="project">
        <h2>Project Highlights</h2>
        <div className="list">
          {highlighted.map((value) => (
            <Project data={value} />
          ))}
        </div>
        <Link to="/projects/">See More...</Link>
      </section>
      <section id="link"></section>
      <section id="cv-languages">
        <h2>Languages</h2>
        <h3>Expert</h3>
        <div className="list">
          <JavaScript />
          <TypeScript />
          <Python />
        </div>
      </section>
      <section id="cv">
        <h2>Curriculum Vitae</h2>
        <a href="/cv.pdf" download>
          Download CV as PDF
        </a>
      </section>
    </Layout>
  );
};

export default IndexPage;
