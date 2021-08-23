import styled from 'styled-components';

import picTreeOneImage from '../../../../public/assets/remote/images/index/pic_tree_1.jpg';
import moodFilmOneImage from '../../../../public/assets/remote/images/index/moods_film_1.jpg';
import henkaOneImage from '../../../../public/assets/remote/images/index/henka_1.jpg';
import henkaTwoImage from '../../../../public/assets/remote/images/index/henka_2.jpg';
import DogPurpleSvg from "../../../logos/dog_purple";


const PillarsVisualisation = () => {

    return (
        <PillarContainerVisual>
            <ContentContainerVisual>

                <HeaderVisual>
                    <h1 className="header global-text-shadow">3D/Imagery/Video</h1>
                </HeaderVisual>

                <PicTreeBox>
                    <PicTreeOne src={picTreeOneImage.src}
                                alt="Picture Tree - 3D visualisation of the image tree video screens"
                                className="global-box-shadow"/>
                    <PicTreeTextBox>
                        <p className="bigger">PictureTree</p>
                        <p>Original design and 3D visualisation</p>
                    </PicTreeTextBox>
                </PicTreeBox>

                <MoodFilmBox>
                    <MoodFilmOne src={moodFilmOneImage.src}
                                 alt="Moods Film - part of the Moods art photo project"
                                 className="global-box-shadow"/>
                    <MoodFilmTextBox>
                        <p className="bigger">MOODS photo series & art video</p>
                        <p>Original ideas, direction, lighting and editing</p>
                    </MoodFilmTextBox>
                </MoodFilmBox>

                <HenkaBox>
                    <HenkaOne src={henkaOneImage.src}
                              alt="Editing of Henka - simulating spray paints in Manga Studio EX"
                              className="global-box-shadow"/>
                    <HenkaTwo src={henkaTwoImage.src}
                              alt="One of the Henka symbols sprayed on the wall - preview for the Henka wall illustration series"
                              className="global-box-shadow"/>
                    <HenkaTextBox>
                        <p className="bigger">Henka street art project</p>
                    <p>Simulating spray paints and mixed media digitally </p>
                    </HenkaTextBox>
                </HenkaBox>

                <DogPurple>
                    <DogPurpleSvg />
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
`;

const ContentContainerVisual = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50%;
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
  // transform: rotate(2deg);
`;

// PIC TREE
//
const PicTreeBox = styled.div`
  pointer-events: none;
  display: block;
  position: relative;
`;

const PicTreeTextBox = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  border-radius: 10px;
  background-color: rgba(1, 1, 1, 0.8);
`;

const PicTreeOne = styled.img`
  pointer-events: none;
  display: block;
  position: relative;
  width: 550px;
  border-radius: 10px;
`;

// MOOD FILM
//
const MoodFilmBox = styled.div`
  pointer-events: none;
  display: block;
  position: relative;
`;

const MoodFilmTextBox = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  border-radius: 10px;
  background-color: rgba(1, 1, 1, 0.8);
`;

const MoodFilmOne = styled.img`
  pointer-events: none;
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: 300px;
  border-radius: 10px;
  // transform: rotate(2deg);
`;

// HENKA SYMBOL
//
const HenkaBox = styled.div`
  pointer-events: none;
  display: block;
  position: relative;
`;

const HenkaTextBox = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  border-radius: 10px;
  background-color: rgba(1, 1, 1, 0.8);
`;

const HenkaOne = styled.img`
  pointer-events: none;
  display: block;
  position: relative;
  width: 400px;
  border-radius: 10px;
  // transform: rotate(2deg);
`;

const HenkaTwo = styled.img`
  pointer-events: none;
  display: block;
  position: relative;
  width: 100px;
  border-radius: 10px;
  // transform: rotate(2deg);
`;

// LOGO STYLES //
//
const DogPurple = styled.div`
  pointer-events: none;
  position: absolute;
  width: 100px;
`;
