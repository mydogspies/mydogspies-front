import styled from "styled-components";

import DogBlueSvg from "../../../logos/dog_blue";

const PillarsProgramming = () => {

    return (
        <PillarContainer>
            <DogBlueSvg />
            <ContentBoxOne>
                <div>
                    <p>Pretty much language agnostic... JS, Java, Python; like with spoken languages - the more the merrier</p>
                </div>
            </ContentBoxOne>
            <ContentBoxTwo>
                <div>
                    <p>Frameworks are tools - not holy grails - CRA, NextJS, Spring, whatever fits the project</p>
                </div>
            </ContentBoxTwo>
        </PillarContainer>
    )

}

export default PillarsProgramming;

const PillarContainer = styled.div`
  pointer-events: none;
`;

const ContentBoxOne = styled.div`
  pointer-events: none;
  position: relative;
  width: 50%;
  top: 50px;
  left: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 25px;
  transform: rotate(3deg);
  transform-origin: center;
`;

const ContentBoxTwo = styled.div`
  pointer-events: none;
  position: relative;
  width: 40%;
  top: 100px;
  left: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 25px;
`;
