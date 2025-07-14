export default function Skills() {
  return (
    <main className="mySkills">
      <h1>
        My <span>Skills</span>
      </h1>
      <div className="skills-container">
        <div className="skills-box">
          <h2>Coding Skills</h2>
          <div className="skill">
            <div className="skill-name">HTML</div>
          </div>
          <div className="skill">
            <div className="skill-name">CSS</div>
          </div>
          <div className="skill">
            <div className="skill-name">Basic of JavaScript</div>
          </div>
          <div className="skill">
            <div className="skill-name">Basic TypeScript
            </div>
          </div>
        </div>

        <div className="skills-box">
          <h2>Professional Skills</h2>
          <div className="skill">
            <div className="skill-name">UI/UX</div>
          </div>
          <div className="skill">
            <div className="skill-name">Figma to Next.js</div>

          </div>
          <div className="skill">
            <div className="skill-name">Figma to HTML and CSS</div>
          </div>
          <div className="skill">
            <div className="skill-name">C++</div>
          </div>
        </div>
      </div>
    </main>
  );
}
