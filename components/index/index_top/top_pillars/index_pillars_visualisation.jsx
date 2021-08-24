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

                <BottomText>
                    <p className="top extra">In the background;</p><p className="top extra">CoffeeHouse | an original
                    trade fair design for a US-based coffeehouse.</p>
                </BottomText>

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

  @keyframes animatedVisualBackground {
    from {
      background-position: -235px 0;
      opacity: 0;
    }
    to {
      background-position: -270px 0;
      opacity: 1;
    }
  }

  background-image: linear-gradient(to top, rgba(200, 182, 211, 1), rgba(1, 1, 1, 0)), url(${props => props.backgroundImage});
  animation: animatedVisualBackground 2s ease-out;
  background-size: cover;
  background-position: -270px 0;
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
  left: 45px;
  transform: rotate(1deg);
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
`;

const PicTreeOne = styled.img`
  pointer-events: none;
  position: absolute;
  width: 500px;
  border-radius: 10px;
  transform: rotate(-1deg);
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
  width: 350px;
  top: 202px;
  left: -59px;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(1, 1, 1, 0.6);
  transform: rotate(-2deg);
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
  top: 407px;
  left: 342px;
  transform: rotate(-1deg);
`;

const MoodFilmTextBox = styled.div`
  pointer-events: none;
  position: absolute;
  width: 350px;
  top: 270px;
  left: -100px;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(1, 1, 1, 0.7);
  transform: rotate(3deg);
`;

const MoodFilmTextBoxTwo = styled.div`
  pointer-events: none;
  position: absolute;
  width: 293px;
  top: 15px;
  left: 50px;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(1, 1, 1, 0.7);
  transform: rotate(-2deg);
`;

const MoodFilmOne = styled.img`
  pointer-events: none;
  position: absolute;
  width: 325px;
  border-radius: 10px;
  transform: rotate(-1deg);
`;

const BottomText = styled.div`
  pointer-events: none;
  position: absolute;
  top: 812px;
  left: -87px;
  width: 245px;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  transform: rotate(1deg);
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
`;
