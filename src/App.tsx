import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Col, Container, Row } from "reactstrap";
import { TypeAnimation } from "react-type-animation";
import { apiGetWorkExperience } from "./api/work-experience.service";
import { apiGetSkills } from "./api/skills.service";

function App() {
  const [workExperiences, setWorkExperiences] = useState<any[]>([]);
  const [skills, setSkills] = useState<any[]>([]);
  const [skillCategories, setSkillCategories] = useState<string[]>([]);

  useEffect(() => {
    apiGetSkills().then((data) => {
      setSkills(data.data);
      let allCategories: string[] = data.data.map((item: any) => {
        return item.category;
      });
      allCategories = allCategories.filter(
        (n, i) => allCategories.indexOf(n) === i
      );
      setSkillCategories(allCategories);
    });
  }, []);

  useEffect(() => {
    apiGetWorkExperience().then((data) => {
      setWorkExperiences(data.data.reverse());
    });
  }, []);

  return (
    <Container>
      <Row className="mt-2">
        <Col md="5" lg="4">
          <div className="m-2 shadow p-3 text-bg-light rounded">
            <h4>Morgan Sundqvist</h4>
            <h6 className="text-muted mb-2">
              <TypeAnimation
                sequence={[
                  "CTO", // Types 'One'
                  2000, // Waits 1s
                  "ERP specialist", // Deletes 'One' and types 'Two'
                  3000, // Waits 2s
                  "Solution architect", // Types 'Three' without deleting 'Two'
                  2000, // Waits 2s
                  "Fullstack developer", // Types 'Three' without deleting 'Two'
                  3000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1em" }}
              />
            </h6>
            <h5>About me</h5>
            <p>
              I'm a developer by heart but I often end up in some kind of
              leadership role.
            </p>
            <p>
              10+ years experience of large and complex ERP implementations.
              Mostly within the Automotive sector. Both as developer and
              functional consultant.
            </p>
            <p>
              Have been lucky to be a part of two successful startups{" "}
              <a href="https://pingdom.com">Pingdom</a> and{" "}
              <a href="https://dooer.com">Dooer</a> as the CTO. Managing large
              teams and large scale infrastructure and applications.
            </p>
            <p>
              Currently I'm a senior Solution IT Architect at Volvo Construction
              Equipment where I'm also a product owner of the microservice
              strategy.
            </p>
            <p>
              This React app and API is available on my GitHub account in all
              languages I develop in.
            </p>
            <Row>
              <Col className="text-center">
                <a
                  className="link-dark"
                  href="https://github.com/morgansundqvist"
                  target={"_blank"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </Col>
              <Col className="text-center">
                <a
                  className="link-dark"
                  href="https://www.linkedin.com/in/morgan-sundqvist/"
                  target={"_blank"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </Col>
            </Row>
          </div>
          <div className="m-2 shadow p-3 text-bg-light rounded">
            <h5>Skills</h5>
            <ul>
              {skillCategories.map((category, index) => (
                <li key={index}>
                  {category}
                  <ul>
                    {skills
                      .filter((item) => item.category === category)
                      .map((item, itemIndex) => (
                        <li key={itemIndex}>{item.skill}</li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col>
          <div className="m-2 shadow p-3 text-bg-light rounded">
            <h5 className="mb-2">Work experience</h5>
            {workExperiences.map((workExperience) => (
              <div key={workExperience.id}>
                <h6>{workExperience.company}</h6>
                <p className="text-muted">
                  {workExperience.role}
                  <br />
                  {workExperience.startDate} - {workExperience.endDate}
                </p>
                <ul>
                  {workExperience.keyFacts.map(
                    (fact: string, index: number) => (
                      <li key={index}>{fact}</li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
