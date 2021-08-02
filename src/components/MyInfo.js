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
        <h3>Motto: </h3>
        <p> {props.motto}</p>
        <h3>Hobbies: </h3>
        <p>{props.hobbies} </p>
        <h3>Skills: </h3>
        <p> {props.programmingLanguages}</p>

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
      </Parallax>

      <div className="link_Projects">
        <Link onClick={goToProjectsPage}>To Projects page</Link>
      </div>
    </div>
  );
}
