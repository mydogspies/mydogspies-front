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
        return height / 1091 * 0.85;
    }

    const scaleW = () => {
        return width / 1189 * 0.85;
    }

    return (
        <PillarContainerVisual backgroundImage={topVisualImage.src}
                               ref={observe}>

            <ContentContainerVisual className="index visual"
                                    scaleHeight={scaleH()}
                                    scaleWidth={scaleW()}>

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
  top: 25%;
  left: 65%;
  transform: translate(-50%, -50%) scale(
          ${props => props.scaleWidth},
          ${props => props.scaleHeight});
`;

const HeaderVisual = styled.div`
  pointer-events: none;
  display: block;
  position: relative;
  top: -40px;
  left: -35px;
  width: 960px;
  transform: rotate(-2deg);

  @keyframes headerPosition {
    from {
      left: -40px;
    }
    to {
      left: -35px;
    }
  }

  animation: headerPosition 1s ease-out;
`;

// PIC TREE
//
const PicTreeBox = styled.div`

  pointer-events: none;
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

  @keyframes picTreeTextBoxPos {
    from {
      top: 275px;
    }
    to {
      top: 280px;
    }
  }

  animation: picTreeTextBoxPos 0.5s ease-out;
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

  @keyframes picTreeTextBoxTwoPos {
    from {
      left: 135px;
    }
    to {
      left: 126px;
    }
  }

  animation: picTreeTextBoxTwoPos 0.8s ease-out;
`;

const PicTreeOne = styled.img`
  pointer-events: none;
  position: absolute;
  top: -10px;
  width: 500px;
  border-radius: 10px;
  transform: rotate(-1deg);

  @keyframes picTreePos {
    from {
      transform: rotate(-2deg);
    }
    to {
      transform: rotate(-1deg);
    }
  }

  animation: picTreePos 1s ease-out;
`;

// HENKA SYMBOL
//
const HenkaBox = styled.div`
  pointer-events: none;
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

  @keyframes henkaTextBoxPos {
    from {
      transform: rotate(-1deg);
    }
    to {
      transform: rotate(-2deg);
    }
  }

  animation: henkaTextBoxPos 1s ease-out;
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

  @keyframes moodTextBoxPos {
    from {
      transform: rotate(4deg);
    }
    to {
      transform: rotate(3deg);
    }
  }

  animation: moodTextBoxPos 1s ease-out;
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

  @keyframes moodTextBoxTwoPos {
    from {
      // top: -12px;
      left: 52px;
      transform: rotate(3deg);
    }
    to {
      // top: -10px;
      left: 50px;
      transform: rotate(4deg);
    }
  }

  animation: moodTextBoxTwoPos 0.7s ease-out;
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

  @keyframes dogAnim {
    from {
      top: 94px;
      left: -67px;
      transform: rotate(-3deg);
    }
    to {
      top: 96px;
      left: -57px;
      transform: rotate(-2deg);
    }
  }

  animation: dogAnim 0.8s ease-out;
`;
