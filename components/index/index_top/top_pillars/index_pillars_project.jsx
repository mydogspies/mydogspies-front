import styled from "styled-components";

import topProjectImage from '../../../../public/assets/remote/images/index/cds.jpg';

const PillarsProject = () => {

    return (
        <PillarContainerProject backgroundImage={topProjectImage.src}>
            <ContentContainerProject className="index visual">

                <h1>project content</h1>

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

  @keyframes animatedProjectBackground {
    from {
      // background-position: -35px 0;
      opacity: 0;
    }
    to {
      // background-position: -65px 0;
      opacity: 1;
    }
  }

  background-image: linear-gradient(to top, rgba(182, 214, 215, 1), rgba(1, 1, 1, 0)), url(${props => props.backgroundImage});
  // animation: animatedProjectBackground 1s ease-out;
  background-size: cover;
  // background-size: 120%;
  background-position: -65px 0;

  @media only screen and (max-height: 1000px) {

  }

  @media only screen and (max-height: 700px) {

  }

}
`;

const ContentContainerProject = styled.div`
  pointer-events: none;
  position: absolute;
  top: 20%;
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






