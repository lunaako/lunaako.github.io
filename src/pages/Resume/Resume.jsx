import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="University of Colorado Boulder"
            date="2025 — 2026"
            description="Master of Computer Science - Pursuing advanced studies in computer science with focus on AI, systems, and software engineering."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Software Engineer Intern"
            date="Jan 2025 — Apr 2025"
            description="Alibaba Cloud - Developed RESTful diagnosis APIs with Go and MySQL, optimized CUDA kernels achieving 26% throughput improvement, and built high-performance GPU diagnostic tools supporting 200+ nodes with <0.1% error rate."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Python" value={80} />
          <SkillItem title="JavaScript" value={70} />
          <SkillItem title="SQL" value={70} />
          <SkillItem title="Linux" value={70} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
