import './Portfolio.css';
import work1 from '../../assets/nami.png';
import work2 from '../../assets/abaome-portfolio.png';
import work3 from '../../assets/javascript-quiz.png';
import work4 from '../../assets/daily-planner.png';
import work5 from '../../assets/moodvie-generator.png';
import work6 from '../../assets/weather-forecast.png';import work7 from '../../assets/expense-insight-tracker.png';
import work8 from '../../assets/text-editor.png';

const work = [
  {
    image: work1,
    deployed: 'https://bxiong34.github.io/Nami/',
    github: 'https://github.com/bxiong34/Nami.git',
  },
  {
    image: work2,
    deployed: 'https://bxiong34.github.io/aBAOme/',
    github: 'https://github.com/bxiong34/aBAOme.git',
  },
  {
    image: work3,
    deployed: 'https://bxiong34.github.io/JavaScript-Quiz/',
    github: 'https://github.com/bxiong34/JavaScript-Quiz.git',
  },
  {
    image: work4,
    deployed: 'https://bxiong34.github.io/daily-planner/',
    github: 'https://github.com/bxiong34/daily-planner.git',
  },
  {
    image: work5,
    deployed: 'https://bxiong34.github.io/moodvie-generator/',
    github: 'https://github.com/bxiong34/moodvie-generator.git',
  },
  {
    image: work6,
    deployed: 'https://bxiong34.github.io/weather-forecast/',
    github: 'https://github.com/bxiong34/weather-forecast.git',
  },
  {
    image: work7,
    deployed: 'https://expense-insight-tracker-f044b665c1bb.herokuapp.com/login',
    github: 'https://github.com/DavidJ92/Expense-Insight-Tracker.git',
  },
  {
    image: work8,
    deployed: 'https://text-editor-hh1w.onrender.com',
    github: 'https://github.com/bxiong34/text-editor.git',
  },
]

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className='container'>
        {work.map((item, index) => (
          <div key={index} className='work-container'>
           <div className='image-container'>
              <img src={item.image} alt={`Work ${index}`} />
              <div className='links'>
                <a href={item.deployed} className='hide-link'>Deployed Site</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={item.github} className='hide-link'>Github URL</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}