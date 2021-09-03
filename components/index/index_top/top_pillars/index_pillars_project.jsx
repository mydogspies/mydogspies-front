import styled from 'styled-components';
import useDimensions from "react-cool-dimensions";

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

    /* The following scaling code is using https://github.com/wellyshen/react-cool-dimensions
        in order to find out the size of the about overlay window. This hook uses ResizeObserver
        to measure the size of the AboutOverlayBase div. We then run it through the two tiny funcs, scaleH resp. scaleW,
        and plug it into the styled component via AboutOverlayContainer.
         */
    const {observe, unobserve, width, height, entry} = useDimensions({
        onResize: ({observe, unobserve, width, height, entry}) => {
            unobserve(); // To stop observing the current target element
            observe(); // To re-start observing the current target element
        },
    });

    /*Note! The scaling ratio is based on the screen size at which the content has been originally created to */
    const scaleH = () => {
        return height / 1091;
    }

    const scaleW = () => {
        return width / 1189;
    }

    return (
        <PillarContainerProject backgroundImage={topProjectImage.src}
                                ref={observe}>

            <ContentContainerProject className="index project"
                                     scaleHeight={scaleH()}
                                     scaleWidth={scaleW()}>

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
                    <p>"It's amazing but also frightening to realize that a major music festival produces waste and uses up
                        resources daily equivalent of an entire small to mid-sized UK town."</p>
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
                    <p>"The age old joke of the band's front person mentioning the wrong town when welcoming the audience
                        is not a myth at all! Spinal Tap is far closer
                        to reality than many think..."</p>
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
}
`;

// GENERAL
//
const ContentContainerProject = styled.div`
  pointer-events: none;
  position: absolute;
  top: 40%;
  left: 60%;
  transform: translate(-50%, -50%) scale(
          ${props => props.scaleWidth},
          ${props => props.scaleHeight});
`;

const HeaderProject = styled.div`
  pointer-events: none;
  position: relative;
  top: -25px;
  left: -10px;
  transform: rotate(1deg);
`;

const FooterProject = styled.div`
  pointer-events: none;
  display: block;
  position: relative;
  top: 170px;
  left: 50px;
  width: 550px;
  transform: rotate(1deg);
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
  grid-template-columns: 1fr 1.29fr 1fr 0.7fr 1fr 1fr;
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
  transform: rotate(-1deg);
`;

const TouringFlags = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 1.33fr 1fr 1fr 1.2fr 0.99fr;
  top: 70px;
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
  left: 45px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 10px;
  width: 520px;
`;

const QuoteBoxTwo = styled.div`
  pointer-events: none;
  position: relative;
  top: 125px;
  left: -40px;
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
  width: 90px;
  top: 340px;
  left: -100px;
  transform: rotate(3deg);
`;




