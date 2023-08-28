import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Shoaib Zafar</HighlightSpan>!
      </p>
      <br />
      <p>
        I am a seasoned <HighlightSpan>Software Engineer</HighlightSpan> with a
        wealth of experience spanning several years, specializing in{" "}
        <HighlightAlt>Fullstack development</HighlightAlt> and{" "}
        <HighlightAlt>Software Architecture</HighlightAlt>.
      </p>
      <br />

      <p>
        My journey encompasses a profound understanding of Web Applications,
        Architecture, and Data-Driven Technologies. While my background extends
        to Financial Applications and Python Web Services (JSON/REST), my
        skillset resonates far beyond these domains.
      </p>
      <br />
      <p>
        As a leader and motivator, I have honed my ability to guide teams
        towards success. Through strategic planning and adept management, I've
        steered projects that yield multiple benefits for both enterprises and
        stakeholders alike. My proficiency extends across a spectrum of
        technologies, including Python, Django, Flask, FastAPI, AWS, MongoDB,
        Postgres, JavaScript, and VueJS.
      </p>
      <br />

      <p>
        My passion lies in crafting solutions that stand as a testament to both
        innovation and precision. I am dedicated to delivering excellence in
        every endeavor I undertake. Join me on this journey of technological
        excellence, where your vision and my expertise converge to create
        remarkable outcomes.
      </p>
    </AboutWrapper>
  );
};

export default About;
