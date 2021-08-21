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
                        <DogGreenSvg classes="global-svg-icon-shadow"/>
                    </DogGreen>
                </ContentBoxTwo>

                <ContentBoxThree className="global-box-shadow">
                    <div>
                        <p className="smaller">"Coding is like a novel. C++ is like a book of law;
                            old, stuffy and rigid. Java is the lengthy verbose science report. Python has elegance and depth like the writings of Jonathan Franzen.
                            Javascript is the quirky, chaotic but highly entertaining art piece in the sunday edition of The Guardian."</p>
                    </div>
                </ContentBoxThree>

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
  top: -122px;
  left: 57px;
  transform: rotate(2deg);
`;

const Signature = styled.div`
  pointer-events: none;
  position: relative;
  top: 21px;
  left: 155px;
  transform: rotate(2deg);
`;

// CONTENT BOX STYLES //
//
const ContentBoxOne = styled.div`

  @keyframes boxOneMovement {
    from {
      top: -123px;
      left: 45px;
      transform: rotate(1deg);
    }
    to {
      top: -120px;
      left: 50px;
      transform: rotate(0);
    }
  }
  
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 25px;
  width: 520px;
  position: relative;
  top: -120px;
  left: 50px;
  transform-origin: center;
  animation: boxOneMovement 0.8s ease-out;
`;

const ContentBoxTwo = styled.div`

  @keyframes boxTwoMovement {
    from {
      transform: rotate(0deg);
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
  top: 100px;
  left: 100px;
  transform: rotate(-1deg);
  transform-origin: center;
  animation: boxTwoMovement 0.5s ease-out;
`;

 const ContentBoxThree = styled.div`

   @keyframes boxThreeMovement {
     from {
       left: 10px;
     }
     to {
       left: 0;
     }
   }

   pointer-events: none;
   background-color: rgba(255, 255, 255, 0.8);
   border-radius: 10px;
   padding: 25px;
   width: 750px;
   position: relative;
   top: -215px;
   left: 0;
   transform: rotate(1.5deg);
   transform-origin: center;
   animation: boxThreeMovement 0.8s ease-out;
 `;

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
