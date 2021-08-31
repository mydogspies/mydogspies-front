import styled from 'styled-components';

import topProjectImage from '../../../../public/assets/remote/images/index/cds.jpg';
import DogBlueSvg from "../../../logos/dog_blue";

import FlagMexicoSvg from "../../../clipart/flag_mexico";
import FlagUsaSvg from "../../../clipart/flag_usa";
import FlagGermanySvg from "../../../clipart/flag_germany";
import FlagSpainSvg from "../../../clipart/flag_spain";
import FlagUzbekistanSvg from "../../../clipart/flag_uzbekistan";
import FlagChinaSvg from "../../../clipart/flag_china";
import FlagUkSvg from "../../../clipart/flag_uk";
import FlagFranceSvg from "../../../clipart/flag_france";
import FlagAustriaSvg from "../../../clipart/flag_austria";
import FlagSwissSvg from "../../../clipart/flag_switzerland";
import FlagBrazilSvg from "../../../clipart/flag_brazil";
import FlagUkraineSvg from "../../../clipart/flag_ukraine";

const PillarsProject = () => {

    return (
        <PillarContainerProject backgroundImage={topProjectImage.src}>
            <ContentContainerProject className="index project">

                <HeaderProject>
                    <h1 className="header global-text-shadow">Projects</h1>
                </HeaderProject>

                <ProdManTextBox>
                    <p><span>Production management</span> | Large scale corporate events and international meetings</p>
                </ProdManTextBox>
                <ProdManFlags>
                    <FlagSpain>
                        <FlagSpainSvg/>
                    </FlagSpain>
                    <FlagAustria>
                        <FlagAustriaSvg/>
                    </FlagAustria>
                    <FlagUk>
                        <FlagUkSvg/>
                    </FlagUk>
                    <FlagSwitzerland>
                        <FlagSwissSvg/>
                    </FlagSwitzerland>
                    <FlagFrance>
                        <FlagFranceSvg/>
                    </FlagFrance>
                    <FlagUkraine>
                        <FlagUkraineSvg/>
                    </FlagUkraine>
                </ProdManFlags>

                <QuoteBoxOne>
                    <p>"So many interesting things to quite that I have to fill this box with to sound anywhere
                        interesting"</p>
                </QuoteBoxOne>

                <TouringTextBox>
                    <p><span>Audio-visual projects & international touring</span> | Audio & systems design, staffing,
                        logistics and project planning</p>

                </TouringTextBox>
                <TouringFlags>
                    <FlagMexico>
                        <FlagMexicoSvg/>
                    </FlagMexico>
                    <FlagUzbekistan>
                        <FlagUzbekistanSvg/>
                    </FlagUzbekistan>
                    <FlagChina>
                        <FlagChinaSvg/>
                    </FlagChina>
                    <FlagGermany>
                        <FlagGermanySvg/>
                    </FlagGermany>
                    <FlagUsa>
                        <FlagUsaSvg/>
                    </FlagUsa>
                    <FlagBrazil>
                        <FlagBrazilSvg/>
                    </FlagBrazil>
                </TouringFlags>

                <QuoteBoxTwo>
                    <p>"So many interesting things to quite that I have to fill this box with to sound anywhere
                        interesting"</p>
                </QuoteBoxTwo>

                <DogBlue>
                    <DogBlueSvg/>
                </DogBlue>

                <FooterProject>
                    <h2 className="footer">in locations all over the globe</h2>
                </FooterProject>

            </ContentContainerProject>
        </PillarContainerProject>
    )

}

export default PillarsProject;

// GENERAL STYLES //
//
const PillarContainerProject = styled.div`
  pointer-events: none;
  height: 100vh;

  @keyframes projectBackgroundPos {
    from {
      background-position: 45% 50%;
    }
    to {
      background-position: 50% 50%;
    }
  }

  @keyframes projectBackgroundOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  background-image: linear-gradient(to top, rgba(182, 214, 215, 1), rgba(1, 1, 1, 0)), url(${props => props.backgroundImage});
  animation: projectBackgroundPos 0.7s ease-out, projectBackgroundOpacity 2.1s ease-out;
  background-size: cover;
  background-position: 50% 50%;

  @media only screen and (max-height: 1000px) {

  }

  @media only screen and (max-height: 700px) {

  }

}
`;

// GENERAL
//
const ContentContainerProject = styled.div`
  pointer-events: none;
  position: absolute;
  top: 40%;
  left: 57%;
  transform: translate(-50%, -50%);


  @media only screen and (max-height: 1000px) {
    position: absolute;
    transform: translate(-50%, -50%) scale(0.75, 0.75); // scale MUST come AFTER translate or this will not work
    left: 50%;
  }

  @media only screen and (max-height: 700px) {
    position: absolute;
    transform: translate(-50%, -50%) scale(0.5, 0.5);
    left: 50%;
  }
`;

const HeaderProject = styled.div`
  pointer-events: none;
  position: relative;
  top: -12px;
  left: -10px;
`;

const FooterProject = styled.div`
  pointer-events: none;
  position: relative;
  top: 175px;
  left: 50px;
`;


// PRODUCTION MANAGEMENT
//
const ProdManTextBox = styled.div`
  pointer-events: none;
  position: relative;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 11px 17px 35px 20px;
  width: 380px;
  left: -50px;
`;

const ProdManFlags = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1.29fr 1fr 0.68fr 1fr 1fr;
  top: 218px;
  width: 200px;
`;

const FlagSpain = styled.div`
  pointer-events: none;
  grid-column-start: 1;
  grid-row-start: 1;
  padding: 0 5px 0 0;
`;

const FlagUk = styled.div`
  pointer-events: none;
  grid-column-start: 2;
  grid-row-start: 1;
  padding: 0 5px 0 0;
`;

const FlagAustria = styled.div`
  pointer-events: none;
  grid-column-start: 3;
  grid-row-start: 1;
  padding: 0 5px 0 0;
`;

const FlagSwitzerland = styled.div`
  pointer-events: none;
  grid-column-start: 4;
  grid-row-start: 1;
  padding: 0 5px 0 0;
`;

const FlagFrance = styled.div`
  pointer-events: none;
  grid-column-start: 5;
  grid-row-start: 1;
  padding: 0 5px 0 0;
`;

const FlagUkraine = styled.div`
  pointer-events: none;
  grid-column-start: 6;
  grid-row-start: 1;
  padding: 0 5px 0 0;
`;

// AUDIO-VISUAL
//
const TouringTextBox = styled.div`
  pointer-events: none;
  position: relative;
  top: 100px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 11px 17px 35px 20px;
  width: 462px;
`;

const TouringFlags = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1.15fr 1.33fr 1fr 1fr 1.2fr 0.99fr;
  top: 497px;
  left: 65px;
  width: 200px;
`;

const FlagMexico = styled.div`
  pointer-events: none;
  grid-column-start: 1;
  grid-row-start: 1;
  padding: 0 5px 0 0;
`;

const FlagUzbekistan = styled.div`
  pointer-events: none;
  grid-column-start: 2;
  grid-row-start: 1;
  padding: 0 5px 0 0;;
`;

const FlagChina = styled.div`
  pointer-events: none;
  grid-column-start: 3;
  grid-row-start: 1;
  padding: 0 5px 0 0;
`;

const FlagGermany = styled.div`
  pointer-events: none;
  grid-column-start: 4;
  grid-row-start: 1;
  padding: 0 5px 0 0;
`;

const FlagUsa = styled.div`
  pointer-events: none;
  grid-column-start: 5;
  grid-row-start: 1;
  padding: 0 5px 0 0;
`;

const FlagBrazil = styled.div`
  pointer-events: none;
  grid-column-start: 6;
  grid-row-start: 1;
  padding: 1px 5px 0 0;
`;

// QUOTES
//
const QuoteBoxOne = styled.div`
  pointer-events: none;
  position: relative;
  top: 50px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 10px;
  width: 520px;
`;

const QuoteBoxTwo = styled.div`
  pointer-events: none;
  position: relative;
  top: 150px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 10px;
  width: 520px;
`;

// LOGOS
//
const DogBlue = styled.div`
  pointer-events: none;
  position: absolute;
  width: 120px;
  top: 400px;
  left: -200px;
`;




