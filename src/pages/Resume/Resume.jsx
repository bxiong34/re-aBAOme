import './Resume.css';

export default function Resume() {
    return (
      <div>
      <h2>Resume</h2>
      <h5>Proficiencies</h5>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <a className='pdf' href="/assets/resume-example.jpeg" download>Download Resume</a>
    </div>
  );
}