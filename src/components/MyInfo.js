import React from "react";
import Jokes from "./Jokes";
import jokesData from "./jokesData";
import styled from "styled-components";
import Projects from "./Projects";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import grappigeKat from "../Assets/grappigeKat.gif";
import { Parallax, Background } from "react-parallax";
//Emoji//
import Emoji from "./Emoji";
export default function MyInfo(props) {
  //Dynamic route for button to Project's page
  const history = useHistory();
  const jokeComponents = jokesData.map((joke) => (
    <Jokes key={joke.id} question={joke.question} punchline={joke.punchline} />
  ));

  const HoverText = styled.p`
    color: rgba(0, 0, 0, 0);
    :hover {
      color: #ffc75f;
      cursor: pointer;
    }
  `;

  const goToProjectsPage = () => {
    history.push(`/projects`);
  };
  return (
    <div className="myInfo">
      <Parallax>
        <h1>{props.name}</h1>
        <p> Motto: {props.motto}</p>
        <p> Hobbies: {props.hobbies} </p>
        <p> Programming languages:</p>
        {props.ervaring}
        <hr />
        <Background className="grappige-kat">
          <img src={grappigeKat} alt="grappigeKat" />
        </Background>
        <h3>
          Hover over Meow! <Emoji symbol="😛" label="face with tongue" />
        </h3>
        <HoverText>
          <p>{jokeComponents}</p>
        </HoverText>

        {/* <section id="projects">
          <h1>Projects </h1>
          <Projects />
        </section> */}

        <Link onClick={goToProjectsPage} id="link_Projects">
          To Projects page
        </Link>
      </Parallax>
    </div>
  );
}
