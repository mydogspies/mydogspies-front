import styled from 'styled-components';

import topProjectImage from '../../../../public/assets/remote/images/index/cds.jpg';

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
                    <h1>Project locations all over the globe</h1>
                </HeaderProject>

                    <ProdManTextBox>
                        <p><span>Production management</span> | Large scale corporate events and  international meetings</p>
                        <FlagSpain>
                            <FlagSpainSvg />
                        </FlagSpain>
                        <FlagAustria>
                            <FlagAustriaSvg />
                        </FlagAustria>
                        <FlagUk>
                            <FlagUkSvg />
                        </FlagUk>
                        <FlagSwitzerland>
                            <FlagSwissSvg />
                        </FlagSwitzerland>
                        <FlagFrance>
                            <FlagFranceSvg />
                        </FlagFrance>
                        <FlagUkraine>
                            <FlagUkraineSvg />
                        </FlagUkraine>
                    </ProdManTextBox>

                <QuoteBoxOne>
                    <p>"So many interesting things to quite that I have to fill this box with to sound anywhere interesting"</p>
                </QuoteBoxOne>

                <TouringTextBox>
                    <p><span>Audio-visual projects & international touring</span> | Audio & systems design, staffing, logistics and project planning</p>
                    <FlagMexico>
                        <FlagMexicoSvg />
                    </FlagMexico>
                    <FlagUzbekistan>
                        <FlagUzbekistanSvg />
                    </FlagUzbekistan>
                    <FlagChina>
                        <FlagChinaSvg />
                    </FlagChina>
                    <FlagGermany>
                        <FlagGermanySvg />
                    </FlagGermany>
                    <FlagUsa>
                        <FlagUsaSvg />
                    </FlagUsa>
                    <FlagBrazil>
                        <FlagBrazilSvg />
                    </FlagBrazil>
                </TouringTextBox>

                <QuoteBoxTwo>
                    <p>"So many interesting things to quite that I have to fill this box with to sound anywhere interesting"</p>
                </QuoteBoxTwo>

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
  top:50%;
  left: 50%;
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
  top: -53px;
  left: -35px;
`;


// PRODUCTION MANAGEMENT
//
const ProdManTextBox = styled.div`
  pointer-events: none;
  position: relative;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 10px;
  width: 520px;
`;

const FlagSpain = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50px;
  left: 205px;
  width: 60px;
`;

const FlagAustria = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50px;
  left: 375px;
  width: 60px;
`;

const FlagSwitzerland = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50px;
  left: 455px;
  width: 45px;
`;

const FlagUk = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50px;
  left: 285px;
  width: 65px;
`;

const FlagFrance = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50px;
  left: 520px;
  width: 60px;
`;

const FlagUkraine = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50px;
  left: 590px;
  width: 60px;
`;

// PRODUCTION MANAGEMENT
//
const TouringTextBox = styled.div`
  pointer-events: none;
  position: relative;
  top: 100px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 10px;
  width: 520px;
`;

const FlagMexico = styled.div`
  pointer-events: none;
  position: absolute;
  width: 60px;
`;

const FlagUzbekistan = styled.div`
  pointer-events: none;
  position: absolute;
  left: 100px;
  width: 70px;
`;

const FlagChina = styled.div`
  pointer-events: none;
  position: absolute;
  left: 200px;
  width: 60px;
`;

const FlagGermany = styled.div`
  pointer-events: none;
  position: absolute;
  left: 280px;
  width: 60px;
`;

const FlagUsa = styled.div`
  pointer-events: none;
  position: absolute;
  left: 370px;
  width: 60px;
`;

const FlagBrazil = styled.div`
  pointer-events: none;
  position: absolute;
  left: 440px;
  width: 60px;
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




