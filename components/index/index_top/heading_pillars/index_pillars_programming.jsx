import styled from "styled-components";

import JavaLogoSvg from "../../../logos/java_logo";

const PillarsProgramming = () => {

    return (
        <PillarContainer>

            <ContentContainer>

                <ContentBoxOne className="global-box-shadow">
                    <div>
                        <p>"Pretty much language agnostic... JS, Java, Python; like with spoken languages - the more the merrier"</p>
                    </div>
                    <JavaLogo>
                        <JavaLogoSvg />
                    </JavaLogo>
                </ContentBoxOne>

                <ContentBoxTwo className="global-box-shadow">
                    <div>
                        <p className="bigger">"Frameworks are tools - not holy grails - CRA, NextJS, Spring, whatever fits the project"</p>
                    </div>
                </ContentBoxTwo>

                <ContentBoxThree className="global-box-shadow">
                    <div>
                        <p className="smaller">"Coding is to problem solving what the written word is to a novel. C++ is the the book of law,
                        verbose and rigid, Python has elegance and depth like a Jonathan Franzen novel while Javascript can
                        be fluffy, quirky and a highly entertaining read."</p>
                    </div>
                </ContentBoxThree>

            </ContentContainer>

        </PillarContainer>
    )

}

export default PillarsProgramming;

const PillarContainer = styled.div`
  pointer-events: none;
`;

const ContentContainer = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContentBoxOne = styled.div`
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 25px;
  width: 55%;
  position: relative;
  top: -100px;
  transform: rotate(3deg);
  transform-origin: center;
`;

const ContentBoxTwo = styled.div`
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 25px;
  width: 55%;
  position: relative;
  top: -50px;
  left: 100px;
  transform: rotate(-1deg);
  transform-origin: center;
`;

const ContentBoxThree = styled.div`
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 25px;
  width: 70%;
  position: relative;
  top: 0;
  left: 75px;
  transform: rotate(1.5deg);
  transform-origin: center;
`;

const JavaLogo = styled.div`
  pointer-events: none;
  position: absolute;
  top: -50px;
  left: -40px;
  width: 100px;
`;
