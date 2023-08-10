import React, { useState } from 'react'
import "./App.css";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';


const App = () => {
  const [openMenue,setOpenMenue]=useState(false);
  
  return (
    <>
      <header className='header'>
        <a href="#" className='logo' id='logo'>Prajjwal's Portfolio.</a>

        <nav className={openMenue ? 'navbar active' : 'navbar'}>
          <a href="#" onClick={()=>setOpenMenue(false)}><i  className='fas fa-times active mobile-x' ></i></a>
          <Link to='home' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
          <Link to='about' spy={true} smooth={true} offset={20} duration={500}>About</Link>
          <Link to='skill' spy={true} smooth={true} offset={-150} duration={500}>Skills</Link>
          <Link to='project' spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
          <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
        </nav>
        <div id='mobile'>
          <a href="#" onClick={()=>setOpenMenue(true)}><i  className='fas fa-bars mobile-bar' ></i></a>
        </div>
        
      </header>
      <section className="home" id='home'>
        <div className="home-content">
          <h3>Hello, I am</h3>
          <h1>Prajjwal Shrotriya</h1>
          <h3>And I'm a < TypeAnimation sequence={["Front-End developer", 1000, "React Js developer", 1000]} speed={50} repeat={Infinity} className='text-ani' /></h3>
          <p>I'm a skilled front-end web developer with a passion<br />for crafting engaging user experiences. Proficient in<br />React.js, I specialize in translating design concepts<br />into interactive and dynamic interfaces that captivate users.</p>
        <a href="https://www.linkedin.com/in/prajjwal-shrotriya-7a5805257/" id='linkd' target='_blank'><i class="fa-brands fa-linkedin"></i></a>
          
        </div>
        <div className="img-shap">
          <img src="./img/photo.png" alt="prajjwal's-photo" />
        </div>
      </section>

      <section className="about" id='about'>
        <div id='img-2'>
          <img src="./img/photo.png" alt="prajjwal's-photo" />
        </div>
        <div className="about-text">
          <h2>About <span>Me</span></h2>
          <h4>Front-End Devloper</h4>
          <p>I'm a dedicated front-end web developer with a versatile skill set encompassing HTML, CSS, JavaScript, React.js, and SQL. My proficiency extends beyond code, as I focus on crafting websites that blend elegant designs with seamless functionality. With a keen eye for detail, I create user-centric interfaces by thoroughly researching and understanding end-users' needs. This approach allows me to tailor my designs to ensure an intuitive and enriching experience. My passion lies in not just coding, but in turning concepts into reality – transforming ideas into visually appealing and interactive websites. Whether it's responsive layouts, fluid animations, or efficient data handling, I take pride in bringing these elements together to deliver exceptional web solutions. Let's collaborate to bring your digital visions to life!</p>
        </div>
      </section>
      <h1 className='sub-titel'>My <span>Skills</span></h1>

      <section className='skill-sec' id='skill'>
        <div className="container1">
          <h1 className="heading1">Technical Skills</h1>
          <div className="bar-container">
          <p>HTML</p>
          <div class="container">
            <div class="skills html ">90%</div>
          </div>

          <p>CSS</p>
          <div class="container">
            <div class="skills css">65%</div>
          </div>

          <p>JavaScript</p>
          <div class="container">
            <div class="skills js">70%</div>
          </div>

          <p>React</p>
          <div class="container">
            <div class="skills react">75%</div>
          </div>
          <p>SQL</p>
          <div class="container">
            <div class="skills sql">70%</div>
          </div>
          </div>
        </div>
        <div className="container1">
          <h1 className="heading1" id='proskil'>professional  Skills</h1>
          <div className="bar-container">
          <p>Communication</p>
          <div class="container">
            <div class="skills comm">90%</div>
          </div>

          <p>Team-Work</p>
          <div class="container">
            <div class="skills teamw">90%</div>
          </div>

          <p>Time-Management</p>
          <div class="container">
            <div class="skills Timem">80%</div>
          </div>

          <p>Problem-solving</p>
          <div class="container">
            <div class="skills prosol">70%</div>
          </div>
          <p>Leadership</p>
          <div class="container">
            <div class="skills leader">85%</div>
          </div>
          </div>
        </div>
      </section>
      <h3 className='sub-titel1'>Positions of <span>Responsibility</span> & <span>Achievements</span></h3>
      <section className='skill-con'>
<ul >
  <li>Achieved <span>Rajasthan Book of Record</span> for making the picture of Mahatma Gandhi and Lal Bahadur Shastri on a large sheet of dimensions 5x11 meters, which is created by combining 200 small chart sheets. Winner in College speech delivering competition.</li>
  <li><span>Teacher at “Zarurat-The Help Beyond”,</span> a social initiative by students of Jaipur Engineering College and Research Centre, Jaipur that aims to impart free education to underprivileged children living in the nearby slum areas. . Organizer of “Zarurat-Celebrating Innocence” for two years in 2019 and 2022 a full day event organized for 300+ children various NGOs of Jaipur every year.</li>
  <li><span>Finance manager (Zarurat):</span> Managed the finances of this club and maintained expense and collection of donation on a large scale, successfully conducted two events with limited resources.</li>
  <li><span>Junior coordinator (Zarurat):</span> Exchanged ideas with senior team, provided communication between senior and junior team, giving instructions to juniors, developed leadership and professional skills.
</li>
</ul>
      </section>

      <section>
        <div className="projects" id='project'>
          <div className="pro-container">
          <h1 className='sub-titel'>Personal <span>Projects</span></h1>
          <div className="project-list">
            <div>
              <h2>Gauu Maa App</h2>
              <p>Gauu Maa App, a RealWorld responsive React e-commerce project, bridges the gap between village dairy farms and consumers. Seamlessly developed for a local farm, this app offers a diverse range of dairy products.</p>
              <a href="#" className='demo'>See Demo</a>
            </div>
            <div>
              <h2>weather information website</h2>
              <p>Explore real-time global weather through my React.js-based weather information website. Leveraging my expertise in API utilization and implementation, this platform fetches and presents current weather data for cities worldwide. Working on this project, I have learned the uses and implementation of real-world APIs.</p>
              <a href="#" className='demo'>See Demo</a>
            </div>
            <div>
              <h2>Prajjwal's Portfolio</h2>
              <p>My digital portfolio , a curated responsive space showcasing my diverse projects, skills, and contact information. From innovative project details to an insight into my skill set. Connect with me to collaborate or learn more about my expertise in web development and beyond</p>
              <a href="#" className='demo'>See Demo</a>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className='contact' id='contact'>
        <div className='contect-text'>
          <h2>Contact <span>Me</span></h2>
          <h4>I can start working with you from next week</h4>
          <p>I'm looking to join a reputable organization and can readily commence contributing. Excited to bring my skills onboard at the earliest opportunity.</p>
          <div className="contact-list">
            <li><i class="fa-regular fa-envelope"></i> &nbsp;  prajjwalshrotriya@gmail.com</li>
            <li><i class="fa-solid fa-phone"></i> &nbsp; 8209906773</li>
            <li><i class="fa-brands fa-whatsapp"></i> &nbsp; 9983987387</li>
            <li> <a href="https://www.linkedin.com/in/prajjwal-shrotriya-7a5805257/" id='linkd2' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
          </div>
        </div>

        <div className="contact-form">
          <form action="">
            <input type="text" placeholder='Enter Your Name/Organization' required/>
            <input type="email" name="" id="" placeholder='EnterYour Email' required/>
            <textarea name="" id="" cols="40" rows="10" placeholder='Your Message' required></textarea>
            <input type="submit" value="Submit" className='send'/>
          </form>
        </div>
      </section>

      <div className="copyright">
        <p>A Web-portfolio of Prajjwal Shrotriya &copy; 2023</p>
      </div>

    </>
  )
}

export default App

