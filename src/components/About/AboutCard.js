import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           💡 Skills & Competencies <br />
           I have developed a balanced set of hard skills and soft skills that support my growth as a designer and developer.

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hard Skills <br />
              Proficient in HTML, CSS, JavaScript, React.js, and UI/UX design principles. 
              Experienced in responsive web development and design tools such as Figma.
            </li> <br />
            <li className="about-activity">
              <ImPointRight /> Soft Skills <br />
              Strong communication and collaboration abilities, 
              adaptability when working with cross-functional teams, problem-solving mindset, and the ability to learn new technologies quickly.
            </li>
          </ul>
        </blockquote> <br /> <br />

        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           📈 Future Development Plan <br />
           I am committed to continuous learning and professional growth.

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Short-term goals <br />
              Enhance my expertise in modern frameworks such as Next.js and Tailwind CSS, while deepening my knowledge in user research and usability testing.
            </li> <br />
            <li className="about-activity">
              <ImPointRight /> Long-term goals <br />
              Broaden my perspective by contributing to open-source projects and developing products that are both scalable and impactful.
            </li>
          </ul>
        </blockquote> <br /> <br />

        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           🔎 Self-Reflection <br />
           Through academic projects and personal experiences, I have identified key strengths and areas of improvement that shape my journey:

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Strengths<br />
              Creativity in design, attention to detail, ability to work independently as well as within a team, and dedication to delivering high-quality results.
            </li> <br />
            <li className="about-activity">
              <ImPointRight /> Weaknesses <br />
              At times, I tend to be perfectionistic, which can slow down progress.
            </li> <br />
            <li className="about-activity">
              <ImPointRight /> Improvement <br />
              Currently refining my time management skills and embracing a more iterative approach to design and development.
            </li>
          </ul>
        </blockquote> <br /> <br />

        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Contact Information<br />
          📧 Email: farrelmuhammadrizkywibawa@email.com <br />
          💼 LinkedIn: Farrel Muhammad Rizky Wibawa <br />
          🌐 Website/Portfolio: fw-taupe-six.vercel.app <br />
          📱 WhatsApp: +6281285377443  <br />
          </p>
        </blockquote>


      </Card.Body>
    </Card>
  );
}

export default AboutCard;
