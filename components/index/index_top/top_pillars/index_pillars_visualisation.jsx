import styled from 'styled-components';

import picTreeOneImage from '../../../../public/assets/remote/images/index/pic_tree_1.jpg';
import moodFilmOneImage from '../../../../public/assets/remote/images/index/moods_film_1.jpg';
import henkaOneImage from '../../../../public/assets/remote/images/index/henka_1.jpg';
import henkaTwoImage from '../../../../public/assets/remote/images/index/henka_2.jpg';
import DogPurpleSvg from "../../../logos/dog_purple";

import topVisualImage from '../../../../public/assets/remote/images/index/chouse.jpg';


const PillarsVisualisation = () => {

    return (
        <PillarContainerVisual backgroundImage={topVisualImage.src}>
            <ContentContainerVisual className="index visual">

                <HeaderVisual>
                    <h1 className="header global-text-shadow">3D/Imagery/Video</h1>
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
                            With 'Henka' I found some interesting ways of simulating exactly that; to the right is the
                            result on the wall."</p>
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

  @media only screen and (max-height: 1000px) {

  }

  @media only screen and (max-height: 700px) {

  }
}
`;

const ContentContainerVisual = styled.div`
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

const HeaderVisual = styled.div`
  pointer-events: none;
  position: relative;
  top: -53px;
  left: -35px;
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
  top: -19px;
  left: 257px;
`;

const PicTreeTextBox = styled.div`
  pointer-events: none;
  position: absolute;
  width: 401px;
  top: 261px;
  left: 62px;
  border-radius: 10px;
  padding: 8px;
  background-color: rgba(1, 1, 1, 0.6);
  transform: rotate(1deg);

  @keyframes picTreeTextBoxPos {
    from {
      top: 265px;
    }
    to {
      top: 261px;
    }
  }

  animation: picTreeTextBoxPos 0.5s ease-out;
`;

const PicTreeTextBoxTwo = styled.div`
  pointer-events: none;
  position: absolute;
  width: 315px;
  top: 218px;
  left: 126px;
  border-radius: 10px;
  padding: 8px;
  background-color: rgba(1, 1, 1, 0.7);
  transform: rotate(-1deg);

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
  top: 296px;
  left: -112px;
  transform: rotate(1deg);
`;

const HenkaTextBox = styled.div`
  pointer-events: none;
  position: absolute;
  width: 340px;
  top: 202px;
  left: -59px;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(1, 1, 1, 0.6);
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
  top: 10px;
  left: -20px;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(1, 1, 1, 0.6);
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
  top: 425px;
  left: 342px;
  transform: rotate(-2deg);
`;

const MoodFilmTextBox = styled.div`
  pointer-events: none;
  position: absolute;
  width: 335px;
  top: 270px;
  left: -100px;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(1, 1, 1, 0.7);
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
  top: -10px;
  left: 50px;
  padding: 8px;
  border-radius: 8px;
  background-color: rgba(1, 1, 1, 0.7);
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
  left: 50px;
  transform: rotate(-2deg);

  @keyframes dogAnim {
    from {
      top: 94px;
      left: 48px;
      transform: rotate(-3deg);
    }
    to {
      top: 96px;
      left: 50px;
      transform: rotate(-2deg);
    }
  }

  animation: dogAnim 0.8s ease-out;
`;
