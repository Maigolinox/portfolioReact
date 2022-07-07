import "./about.css"
import fc1 from "../../img/IMG_VUELO.jpg"
import lssgbpc from "../../img/LSSGBPC.jpg"
export const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
              <img 
              src={fc1}
              alt="" 
              className="a-img" />  
            </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
          Hello, my name is Victor Terron. I am a technotronic engineer, I love technology, mathematics and programming. <br /><br />
          I have enrolled in 
          courses to learn Web Development, analyze data with python and R (also graph it) or programming scripts to automate task like web 
          scrappers also one of my majors is develop IoT systems using MCU's like ESP32, PIC and arduino with a real server (using EC2 of AWS) that in the background 
          has my own IoT broker to control and monitoring some variables like on/off of lights or any other device, monitoring temperature, 
          register and control certain events on a DB using MySQL. <br /><br />

          I have been a candidate to participate in different scholarships from Santander Mexico and fortunately I won a scholarship to study data science in a course 
          taught by BEDU, from where I learned the foundations of data science. <br /><br />
          </p>
          <p className="a-desc">

          I have academic experience leading teams, I love taking control of the situation because I create different paths that can help me solve a 
          situation and as the situation requires, make decisions to reduce the risk of failing in achieving my goal. I like to take risk when it is 
          controlled, I usually consider every opinion of my team to approach any problem from different perspectives. <br /><br />

          In the same way I got the Lean Six Sigma Green Belt Certification. For me the most important thing in my life is to never stop developing my knowledge,
          I want to go as far as my decisions and actions allow me, I want to continue growing and being at the forefront of technological development and make a
          great contribution able to create economic and social well-being for my environment. <br /><br />
          </p>
          <div className="a-award">
            <img 
            src={lssgbpc}
            alt=""
            className="a-award-img" />
            <div className="a-award-texts">
              <h3 className="a-title">International Lean Six Sigma Green Belt Certification </h3>
              <p className="a-award-desc">
                <br />
                Focused on reducing waste in every process, this certification is oriented to industry but also can be applied to every professional and personal field.
              </p>
            </div>
          </div>


        </div>
        
    </div>

  )
}

export default About

