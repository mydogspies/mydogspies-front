import styled from 'styled-components';

import topProjectImage from '../../../../public/assets/remote/images/index/cds.jpg';
import FlagMexicoSvg from "../../../clipart/flag_mexico";
import FlagUsaSvg from "../../../clipart/flag_usa";
import FlagGermanySvg from "../../../clipart/flag_germany";
import FlagSpainSvg from "../../../clipart/flag_spain";
import FlagUzbekistanSvg from "../../../clipart/flag_uzbekistan";
import FlagChinaSvg from "../../../clipart/flag_china";

const PillarsProject = () => {

    return (
        <PillarContainerProject backgroundImage={topProjectImage.src}>
            <ContentContainerProject className="index project">

                <AudioDesignBox>
                    <p><span>Audio & systems design</span> | Some stuff I will put here cause there must be a freaking subject to everything</p>
                    <FlagMexico>
                        <FlagMexicoSvg />
                    </FlagMexico>
                    <FlagUsa>
                        <FlagUsaSvg />
                    </FlagUsa>
                    <FlagGermany>
                        <FlagGermanySvg />
                    </FlagGermany>
                    <FlagChina>
                        <FlagChinaSvg />
                    </FlagChina>
                </AudioDesignBox>

                <ProductionManagementBox>
                    <p><span>Production Management</span> | More nonsense shit I have to come up with to make it all believable</p>
                    <FlagSpain>
                        <FlagSpainSvg />
                    </FlagSpain>
                    <FlagUzbekistan>
                        <FlagUzbekistanSvg />
                    </FlagUzbekistan>
                </ProductionManagementBox>

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

const AudioDesignBox = styled.div`
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 25px;
  width: 520px;
`;

const ProductionManagementBox = styled.div`
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 25px;
  width: 520px;
`;

// ICONS
//
const FlagMexico = styled.div`
  pointer-events: none;
  width: 100px;
`;

const FlagUsa = styled.div`
  pointer-events: none;
  width: 100px;
`;

const FlagGermany = styled.div`
  pointer-events: none;
  width: 100px;
`;

const FlagChina = styled.div`
  pointer-events: none;
  width: 100px;
`;

const FlagSpain = styled.div`
  pointer-events: none;
  width: 100px;
`;

const FlagUzbekistan = styled.div`
  pointer-events: none;
  width: 100px;
`;






