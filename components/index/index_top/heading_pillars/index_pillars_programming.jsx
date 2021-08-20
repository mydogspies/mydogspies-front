import styled from 'styled-components';

import DogGreenSvg from "../../../logos/dog_green";

const PillarsProgramming = () => {

    return (
        <PillarContainer>

            <ContentContainer>

                <Header>
                    <h1 className="header global-text-shadow">Coding</h1>
                </Header>

                <ContentBoxOne className="global-box-shadow">
                    <div>
                        <p>"Pretty much language agnostic... JS, Java, Python; like with spoken languages - the more the
                            merrier"</p>
                    </div>
                </ContentBoxOne>

                <ContentBoxTwo className="global-box-shadow">
                    <div>
                        <p className="bigger">"Would be cool with logging to see if Mydogprobot actually builds anything
                            on push... Have to plan to add the plan to add an issue in the issue tracker!"</p>
                    </div>
                    <DogGreen>
                        <DogGreenSvg />
                    </DogGreen>
                </ContentBoxTwo>

{/*                <ContentBoxThree className="global-box-shadow">
                    <div>
                        <p className="smaller">"Coding is to problem solving what the written word is to a novel. C++ is
                            the the book of law,
                            verbose and rigid, Python has elegance and depth like a Jonathan Franzen novel while
                            Javascript can
                            be fluffy, quirky and a highly entertaining read."</p>
                    </div>
                </ContentBoxThree>*/}

                <Signature>
                    <h1 className="signature global-text-shadow">quotes by mydogspies</h1>
                </Signature>

            </ContentContainer>

        </PillarContainer>
    )

}

export default PillarsProgramming;

// GENERAL STYLES //
//
const PillarContainer = styled.div`
  pointer-events: none;
`;

const ContentContainer = styled.div`
  pointer-events: none;
  position: absolute;
  top: 55%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%);

  @media only screen and (max-height: 1000px) {
    position: absolute;
    transform: translate(-50%, -50%) scale(0.75, 0.75); // scale MUST come AFTER translate or this will not work
    left: 50%;
  }

  @media only screen and (max-height: 700px) {
    position: absolute;
    transform: translate(-50%, -50%) scale(0.6, 0.6);
    left: 50%;
  }
`;

const Header = styled.div`
  pointer-events: none;
  position: relative;
  top: -200px;
  left: -50px;
  transform: rotate(1deg);
`;

const Signature = styled.div`
  pointer-events: none;
  position: relative;
  top: 45px;
  transform: rotate(2deg);
`;

// CONTENT BOX STYLES //
//
const ContentBoxOne = styled.div`

  @keyframes boxOneMovement {
    from {
      top: -135px;
      left: 30px;
      transform: rotate(1deg);
    }
    to {
      top: -120px;
      left: 0;
      transform: rotate(3deg);
    }
  }
  
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 25px;
  width: 520px;
  position: relative;
  top: -120px;
  transform: rotate(3deg);
  transform-origin: center;
  animation: boxOneMovement 0.8s ease-out;
`;

const ContentBoxTwo = styled.div`

  @keyframes boxTwoMovement {
    from {
      transform: rotate(1deg);
    }
    to {
      transform: rotate(-1deg);
    }
  }

  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 25px;
  width: 520px;
  position: relative;
  top: -50px;
  left: 100px;
  transform: rotate(-1deg);
  transform-origin: center;
  animation: boxTwoMovement 0.5s ease-out;
`;

// const ContentBoxThree = styled.div`
//
//   @keyframes boxThreeMovement {
//     from {
//       top: 50px;
//       transform: rotate(1deg);
//     }
//     to {
//       top: 30px;
//       transform: rotate(1.5deg);
//     }
//   }
//
//   pointer-events: none;
//   background-color: rgba(255, 255, 255, 0.8);
//   border-radius: 10px;
//   padding: 25px;
//   width: 750px;
//   position: relative;
//   top: 30px;
//   left: 0;
//   transform: rotate(1.5deg);
//   transform-origin: center;
//   animation: boxThreeMovement 1s ease-out;
// `;

// LOGO STYLES //
//

const DogGreen = styled.div`

  @keyframes dogLogoAnim {
    from {
      left: -120px;
      top: 45px;
    }
    to {
      left: -140px;
      top: 25px;
    }
  }

  pointer-events: none;
  position: absolute;
  width: 100px;
  left: -140px;
  top: 25px;
  transform: rotate(5deg);
  animation: dogLogoAnim 0.7s ease-out;
`;

const JavaLogo = styled.div`

  @keyframes javaLogoMovement {
    from {
      top: -30px;
      left: -35px;
      transform: rotate(1deg);
    }
    to {
      top: -60px;
      left: -60px;
      transform: rotate(-4deg);
    }
  }

  pointer-events: none;
  position: absolute;
  top: -60px;
  left: -60px;
  width: 100px;
  transform: rotate(-4deg);
  animation: javaLogoMovement 1s ease-out;
`;

const PythonLogo = styled.div`

  @keyframes pythonLogoMovement {
    from {
      top: 56px;
      left: 346px;
      transform: rotate(-2deg);
    }
    to {
      top: 70px;
      left: 350px;
      transform: rotate(-4deg);
    }
  }

  pointer-events: none;
  position: absolute;
  top: 70px;
  left: 350px;
  width: 55px;
  transform: rotate(-4deg);
  animation: pythonLogoMovement 1s ease-out;
`;

const ReactLogo = styled.div`

  @keyframes reactLogoMovement {
    from {
      top: 115px;
      left: 275px;
      transform: rotate(-15deg);
    }
    to {
      top: 125px;
      left: 255px;
      transform: rotate(4deg);
    }
  }

  pointer-events: none;
  position: absolute;
  top: 125px;
  left: 255px;
  width: 150px;
  transform: rotate(4deg);
  animation: reactLogoMovement 0.75s ease-out;
`;

const JSLogo = styled.div`

  @keyframes jsLogoMovement {
    from {
      top: -40px;
      left: 500px;
      transform: rotate(-3deg);
    }
    to {
      top: -20px;
      left: 485px;
      transform: rotate(-6deg);
    }
  }

  pointer-events: none;
  position: absolute;
  top: -20px;
  left: 485px;
  width: 45px;
  transform: rotate(-6deg);
  animation: jsLogoMovement 0.8s ease-out;
`;

const IntellijLogo = styled.div`

  @keyframes intellijLogoMovement {
    from {
      top: 15px;
      left: 440px;
      transform: rotate(36deg);
    }
    to {
      top: 25px;
      left: 435px;
      transform: rotate(6deg);
    }
  }

  pointer-events: none;
  position: absolute;
  top: 25px;
  left: 435px;
  width: 45px;
  transform: rotate(6deg);
  animation: intellijLogoMovement 0.8s ease-out;
`;

const LinuxLogo = styled.div`

  @keyframes LinuxLogoMovement {
    from {
      transform: rotate(6deg);
    }
    to {
      transform: rotate(-2deg);
    }
  }

  pointer-events: none;
  position: absolute;
  top: 65px;
  left: 130px;
  width: 120px;
  transform: rotate(-2deg);
  animation: LinuxLogoMovement 1.5s ease-out;
`;
