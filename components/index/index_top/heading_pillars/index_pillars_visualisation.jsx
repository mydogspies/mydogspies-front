import styled from 'styled-components';

import picTreeOneImage from '../../../../public/assets/remote/images/index/pic_tree_1.jpg'

const PillarsVisualisation = () => {

    return (
        <PillarContainerVisual>
            <ContentContainerVisual>

                <HeaderVisual>
                    <h1 className="header global-text-shadow">3D/Imagery/Video</h1>
                </HeaderVisual>

                <PicTreeOne src={picTreeOneImage.src} alt="Picture Tree - 3D visualisation of the image tree video screens" />

            </ContentContainerVisual>
        </PillarContainerVisual>
    )

}

export default PillarsVisualisation;

// GENERAL STYLES //
//
const PillarContainerVisual = styled.div`
  pointer-events: none;
`;

const ContentContainerVisual = styled.div`
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

const HeaderVisual = styled.div`
  pointer-events: none;
  position: relative;
  // transform: rotate(2deg);
`;

const PicTreeOne = styled.img`
  pointer-events: none;
  position: relative;
  width: 600px;
  // transform: rotate(2deg);
`;
