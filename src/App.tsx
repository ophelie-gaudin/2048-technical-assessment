import { useState } from 'react'
import './App.css'

function App() {

  const [state,setState]=useState(0)
const doSmth=()=> {




  console.log(
    "is it ok ?"
  );

}

  return (
    <div className="App">
      <h1>
        Are you up to the task ?
        <br />
        Will you join our team of dedicated problem solvers ? 😃
      </h1>
      <h3>
      Introducing IWCI:
      <br />
      A Passionate and Innovative Team Creating Value Through Technology and Design
      </h3>
      <p>
        At IWCI, we are a small, tight-knit team of skilled developers and designers based in the beautiful city of Toulouse. Our mission is simple: to continuously improve our expertise in software and product development and design, while delivering exceptional value to our diverse client base. From e-commerce shops to state agencies, startups to small and medium-sized businesses, we pride ourselves on our ability to adapt to the unique needs of each client.
      </p>
      <p>
        Our company culture is rooted in the principles of learning, growth, and collaboration. We believe that every day is an opportunity to expand our knowledge and refine our skills. We place a strong emphasis on open and honest communication, both within our team and with our clients, as we believe it is the key to fostering creativity and innovation.
      </p>
      <p>
        As a group of dedicated professionals, we strive for excellence in everything we do. However, we recognize the importance of maintaining a healthy work-life balance. We understand that our best work comes when we are energized and inspired, which is why we encourage our team members to prioritize their personal well-being alongside their professional development.
      </p>
      <p>
        At IWCI, we don't shy away from challenges. We see failure as an essential part of the journey to success. We are a team that is not afraid to take risks, and we embrace the lessons that come with failure. We believe that it is through our setbacks that we gain valuable insights and experiences that drive our future successes. While acknowledging that failure is normal, we trust each other to take responsibility and find solutions, ensuring our team can always deliver for our clients.
      </p>
      <p>
        We also recognize the importance of human processes in our organization. We are committed to ensuring that communication and quality of life at work are optimal for everyone on our team. If we ever reach a point where we stop learning, we consider that to be our real defeat. Our dedication to continuous improvement and a positive work environment is unwavering.
      </p>
      <p>
        We are always on the lookout for passionate, talented individuals who share our values and vision. If you are a web developer looking for an opportunity to work with a supportive team that is committed to helping you grow, we would love to hear from you. At IWCI, you will have the chance to work on exciting projects that make a real difference in the world, while enjoying a positive work environment that celebrates your individuality and creativity.
      </p>
      <p>
        When you join our team, you can expect to be surrounded by colleagues who are eager to learn from one another, challenge each other, and push the boundaries of what is possible. We are committed to fostering an inclusive and supportive environment where everyone can thrive.
      </p>
      <p>
        In addition to our strong company culture, we also offer competitive salaries, flexible working hours, and opportunities for professional development. We know that investing in our team members is essential to our continued success, and we are committed to providing the resources and opportunities you need to grow your career with us.
      </p>
      <p>
        At IWCI, we are more than just a group of developers and designers – we are a team of creative problem solvers, dedicated to making a meaningful impact in the world through innovative software and product solutions. If you are a motivated, talented individual with a passion for technology and design, we invite you to join our exciting journey as we continue to push the boundaries of what's possible.
      </p>
      <p>
        Ho, you've taken the time to read up to here ? Well, the clock is ticking... Don't loose time.
        But you are right : it's important to thoroughly read the documentation before starting to code. So, writte down this: "Peanut butter jelly time" in the <code>CODE.md</code> file to get a nice surprise.
      </p>
      <p>
        In conclusion, IWCI is a great place for those who are eager to learn, grow, and be proud of their commitment toward an honnest, great quality work. We invite you to join our team, where you will find a culture of excellence, innovation, and balance – a place where you can truly belong and thrive.
      </p>
    </div>
  )
}

export default App