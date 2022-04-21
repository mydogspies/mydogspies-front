import styled from 'styled-components';
import useDimensions from "react-cool-dimensions";

import picTreeOneImage from '../../../../public/assets/remote/images/index/pic_tree_1.jpg';
import moodFilmOneImage from '../../../../public/assets/remote/images/index/moods_film_1.jpg';
import henkaOneImage from '../../../../public/assets/remote/images/index/henka_1.jpg';
import henkaTwoImage from '../../../../public/assets/remote/images/index/henka_2.jpg';
import DogPurpleSvg from "../../../logos/dog_purple";

import topVisualImage from '../../../../public/assets/remote/images/index/chouse.jpg';


const PillarsVisualisation = () => {

    /* The following scaling code is using https://github.com/wellyshen/react-cool-dimensions
    in order to find out the size of the about overlay window. This hook uses ResizeObserver
    to measure the size of the AboutOverlayBase div. We then run it through getScaleFactor, do some math,
    and plug it into the styled component via AboutOverlayContainer.
     */
    const {observe, unobserve, width, height, entry} = useDimensions({
        onResize: ({observe, unobserve, width, height, entry}) => {
            unobserve(); // To stop observing the current target element
            observe(); // To re-start observing the current target element
        },
    });

    const getScaleFactor = () => {
        let widthChecked = width;
        if (width <= 0) {widthChecked = 1000;}
        /* Do not touch low2 & high2 or it will break the scaling - use low1 and high1 to tune the element to fit */
        let scale = roundToTwo(mapRange((1 / widthChecked) * 1000, 0.1, 2.8, 1.1, 0));
        let isFF = !!navigator.userAgent.match(/firefox/i);
        if (isFF) {scale = scale * 0.9} // adapt to firefox different widths
        return scale;
    };

    return (
        <PillarContainerVisual backgroundImage={topVisualImage.src}
                               ref={observe}>

            <ContentContainerVisual className="index visual"
                                    scaleFactor={getScaleFactor()}>

                <HeaderVisual>
                    <h1 className="header global-text-shadow">Visual Design</h1>
                </HeaderVisual>

                <PicTreeBox>
                    <PicTreeOne src={picTreeOneImage.src}
                                alt="Picture Tree - 3D visualisation of the image tree video screens"
                                className="global-box-shadow"/>
                    <PicTreeTextBox>
                        <p className="top">"Such a simple idea but fun in its technical challenges!"</p>
                    </PicTreeTextBox>
                    <PicTreeTextBoxTwo>
                        <p className="top smaller">PictureTree | Original design using Maya + Arnold</p>
                    </PicTreeTextBoxTwo>
                </PicTreeBox>

                <HenkaBox>
                    <HenkaOne src={henkaOneImage.src}
                              alt="Editing of Henka - simulating spray paints in Manga Studio EX"
                              className="global-box-shadow"/>
                    <HenkaTwo src={henkaTwoImage.src}
                              alt="One of the Henka symbols sprayed on the wall - preview for the Henka wall illustration series"
                              className="global-box-shadow"/>
                    <HenkaTextBox>
                        <p className="top">"Designing previews of spray paints and mural mixed media work can be a bit
                            of challenge in the digital domain.
                            With 'Henka' I found some interesting ways of simulating exactly that" (To the right is the
                            result on the wall.)</p>
                    </HenkaTextBox>
                    <HenkaTextBoxTwo>
                        <p className="top smaller">Henka | Original design using Clip Studio Paint + mixed media</p>
                    </HenkaTextBoxTwo>
                </HenkaBox>

                <MoodFilmBox>
                    <MoodFilmOne src={moodFilmOneImage.src}
                                 alt="Moods Film - part of the Moods art photo project"
                                 className="global-box-shadow"/>
                    <MoodFilmTextBox>
                        <p className="top">"The 'MOODS' videos came about as sort of an extension of the photo series,
                            while exploring local backyards and passages."</p>
                    </MoodFilmTextBox>
                    <MoodFilmTextBoxTwo>
                        <p className="top smaller">MOODS videos | Video & Fine Art Photo series</p>
                    </MoodFilmTextBoxTwo>
                </MoodFilmBox>

                <DogPurple>
                    <DogPurpleSvg/>
                </DogPurple>

            </ContentContainerVisual>

        </PillarContainerVisual>
    )

}

/* FUNCS */
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

export default PillarsVisualisation;

// GENERAL STYLES //
//
const PillarContainerVisual = styled.div`
  pointer-events: none;
  height: 100vh;

  @keyframes visualBackgroundOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes visualBackgroundPos {
    from {
      background-position: 32% 50%;
    }
    to {
      background-position: 35% 50%;
    }
  }

  background-image: linear-gradient(to top, rgba(200, 182, 211, 1), rgba(1, 1, 1, 0)), url(${props => props.backgroundImage});
  animation: visualBackgroundOpacity 2.4s ease-out, visualBackgroundPos 1.1s ease-out;
  background-size: cover;
  background-position: 35% 50%;
`;

const ContentContainerVisual = styled.div`
  pointer-events: none;
  position: absolute;
  top: 20%;
  left: 64%;
  transform: translate(-50%, -50%) scale(${props => props.scaleFactor});

  @media screen and (max-width: 950px) {
    left: 67%;
  }
`;

const HeaderVisual = styled.div`
  pointer-events: none;
  position: relative;
  top: -40px;
  left: -35px;
  width: 960px;
  transform: rotate(-2deg);
`;

// PIC TREE
//
const PicTreeBox = styled.div`

  pointer-events: none;
  display: block;
  position: relative;
  top: 25px;
  left: 125px;
  transform: rotate(2deg);
`;

const PicTreeTextBox = styled.div`
  pointer-events: none;
  position: absolute;
  width: 401px;
  top: 280px;
  left: 62px;
  border-radius: 10px;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  transform: rotate(1deg);
`;

const PicTreeTextBoxTwo = styled.div`
  pointer-events: none;
  position: absolute;
  width: 315px;
  top: 236px;
  left: 126px;
  border-radius: 10px;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const PicTreeOne = styled.img`
  pointer-events: none;
  position: absolute;
  top: -10px;
  width: 500px;
  border-radius: 10px;
  transform: rotate(-1deg);
`;

// HENKA SYMBOL
//
const HenkaBox = styled.div`
  pointer-events: none;
  display: block;
  position: relative;
  top: 420px;
  left: -112px;
  transform: rotate(1deg);
`;

const HenkaTextBox = styled.div`
  pointer-events: none;
  position: absolute;
  width: 340px;
  top: 220px;
  left: -59px;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  transform: rotate(-2deg);
`;

const HenkaTextBoxTwo = styled.div`
  pointer-events: none;
  position: absolute;
  width: 391px;
  top: -10px;
  left: -50px;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
`;

const HenkaOne = styled.img`
  pointer-events: none;
  position: absolute;
  width: 425px;
  border-radius: 10px;
  transform: rotate(2deg);
`;

const HenkaTwo = styled.img`
  pointer-events: none;
  position: absolute;
  top: 100px;
  left: 308px;
  width: 100px;
  border-radius: 5px;
`;

// MOOD FILM
//
const MoodFilmBox = styled.div`
  pointer-events: none;
  display: block;
  position: relative;
  top: 470px;
  left: 367px;
  transform: rotate(-2deg);
`;

const MoodFilmTextBox = styled.div`
  pointer-events: none;
  position: absolute;
  width: 335px;
  top: 275px;
  left: -100px;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.85);
  transform: rotate(3deg);
`;

const MoodFilmTextBoxTwo = styled.div`
  pointer-events: none;
  position: absolute;
  width: 293px;
  top: -15px;
  left: 50px;
  padding: 8px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9);
  transform: rotate(4deg);
`;

const MoodFilmOne = styled.img`
  pointer-events: none;
  position: absolute;
  width: 325px;
  border-radius: 10px;
  transform: rotate(-1deg);
`;

// LOGO STYLES //
//
const DogPurple = styled.div`
  pointer-events: none;
  position: relative;
  width: 120px;
  top: 96px;
  left: -57px;
  transform: rotate(-2deg);
`;
