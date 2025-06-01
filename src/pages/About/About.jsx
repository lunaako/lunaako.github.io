/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Service from "./Service";

const About = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Load services
    fetch('services.json').then(res => res.json()).then(data => {
      setServices(data)
    });
  }, [])

  return (
    <article className="about active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hi there! 👋 I'm Yicheng Wang, a passionate full-stack developer with a unique blend of AI infrastructure experience and web development expertise. Currently pursuing my Master's in Computer Science at CU Boulder while bringing real-world engineering experience from Alibaba Cloud.
        </p>

        <p>
          I love building useful tools that solve real problems. Whether it's developing high-performance GPU diagnostic systems, creating AI-powered web applications, or optimizing CUDA kernels, I enjoy turning complex challenges into elegant solutions. My experience spans from low-level system optimization to modern web development with React and AI integration.
        </p>

        <p>
          When I'm not coding, you'll find me bouldering or having conversations with AI (sometimes more than with people!). I believe in learning by doing and am always excited to collaborate on interesting projects that can make a meaningful impact.
        </p>
      </section>

      {/* Service Section */}
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>

        <ul className="service-list">
          {services.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* Experience Highlights */}
      <section className="experience-highlights">
        <h3 className="h3 service-title">Experience Highlights</h3>
        
        <div className="experience-grid">
          <div className="experience-item">
            <div className="experience-icon">🚀</div>
            <h4>Alibaba Cloud AI Infrastructure</h4>
            <p>Developed high-performance GPU diagnostic tools, optimized CUDA kernels achieving 26% throughput improvement, and built APIs supporting 200+ nodes</p>
          </div>

          <div className="experience-item">
            <div className="experience-icon">🤖</div>
            <h4>AI-Powered Applications</h4>
            <p>Created Planr - an intelligent planning tool with OpenAI integration, featuring natural language task planning and schema-based AI workflows</p>
          </div>

          <div className="experience-item">
            <div className="experience-icon">💻</div>
            <h4>Full-Stack Web Development</h4>
            <p>Built multiple production applications including e-commerce platforms and booking systems using React, Redux, Flask, and cloud technologies</p>
          </div>

          <div className="experience-item">
            <div className="experience-icon">⚡</div>
            <h4>Performance Engineering</h4>
            <p>Expert in system optimization, database performance tuning, and scalable architecture design for high-load applications</p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="technologies">
        <h3 className="h3 service-title">Tech Stack</h3>
        
        <div className="tech-categories">
          <div className="tech-category">
            <h4>Languages</h4>
            <div className="tech-tags">
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Go</span>
              <span className="tech-tag">Java</span>
              <span className="tech-tag">C++</span>
              <span className="tech-tag">SQL</span>
            </div>
          </div>

          <div className="tech-category">
            <h4>Frontend</h4>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Redux</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Tailwind CSS</span>
            </div>
          </div>

          <div className="tech-category">
            <h4>Backend & AI</h4>
            <div className="tech-tags">
              <span className="tech-tag">Flask</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">FastAPI</span>
              <span className="tech-tag">OpenAI API</span>
              <span className="tech-tag">PyTorch</span>
            </div>
          </div>

          <div className="tech-category">
            <h4>Cloud & DevOps</h4>
            <div className="tech-tags">
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Kubernetes</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">MySQL</span>
            </div>
          </div>
        </div>
      </section>

    </article>
  )
}

export default About