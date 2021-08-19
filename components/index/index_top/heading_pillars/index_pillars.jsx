import {useState} from 'react';
import styled , { css } from 'styled-components';
import { useRouter } from 'next/router';

const Scroll   = require('react-scroll');
const scroller = Scroll.scroller;

import backgroundColors from '../../../../styles/svg_background_colors.module.scss';
import shapeColors from '../../../../styles/shape_colors.module.scss';

import PillarsProgramming from './index_pillars_programming';
import PillarsVisualisation from './index_pillars_visualisation';
import PillarsProject from './index_pillars_project';

import topCodeImage from '../../../../public/assets/remote/images/index/coding_screen_1.jpg';

const IndexPillars = () => {

    const router = useRouter();

    const [mouseOver, setMouseOver] = useState(false);
    const [code, setCode] = useState(false);
    const [visual, setVisual] = useState(false);
    const [project, setProject] = useState(false);

    const css = {
        background_color: backgroundColors.backgroundIndex,
        pillarWidth: {cc: '33.33%', cv: '33.33%', cp: '33.33%'},
        shapeColors: {
            ccColor: shapeColors.shapesColorCode,
            cvColor: shapeColors.shapesColorVisual,
            cpColor: shapeColors.shapesColorProject
        }
    }

    const handleMouseOver = (event) => {
        const id = event.target.id;

        switch (id) {
            case 'cc':
                if(!mouseOver) {
                    changeWidths(['90%', '5%', '5%']);
                    document.body.style.cursor = "pointer";
                    setCode(true);
                    setMouseOver(true);
                }
                break;
            case 'cv':
                if(!mouseOver) {
                    changeWidths(['5%', '90%', '5%']);
                    document.body.style.cursor = "pointer";
                    setVisual(true);
                    setMouseOver(true);
                }
                break;
            case 'cp':
                if(!mouseOver) {
                    changeWidths(['5%', '5%', '90%']);
                    document.body.style.cursor = "pointer";
                    setProject(true);
                    setMouseOver(true);
                }
                break;
            default:
                break;
        }
    }

    const changeWidths = (widthArray) => {
        document.getElementById('cc').style.flexBasis = widthArray[0];
        document.getElementById('cv').style.flexBasis = widthArray[1];
        document.getElementById('cp').style.flexBasis = widthArray[2];
    }

    const handleMouseOut = () => {
        setMouseOver(false);
        changeWidths(['33.33%', '33.33%', '33.33%']);
        document.body.style.cursor = "default";
        setCode(false);
        setVisual(false);
        setProject(false);

    }

    const handleOnClick = (event) => {
        const id = event.target.id;

        switch (id) {
            case 'cc':
                // event.preventDefault();
                // router.push('/#index-code');
                scroller.scrollTo('code', {
                    duration: 1000,
                    smooth: true
                });
                break;
            case 'cv':
                scroller.scrollTo('visual', {
                    duration: 1000,
                    smooth: true
                });
                break;
            case 'cp':
                scroller.scrollTo('project', {
                    duration: 1000,
                    smooth: true
                });
                break;
            default:
                break;
        }
    }

    return (
        <Container>

            <ContainerPillars>

                <ColumnCode id="cc"
                            width={css.pillarWidth.cc}
                            shapeColor={css.shapeColors.ccColor}
                            backgroundImage={topCodeImage.src}
                            className="index coding global-box-shadow"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            onClick={handleOnClick}
                            active={code}>
                    {code ? (
                        <PillarsProgramming />
                    ) : (
                        <VerticalText>
                            <h1>Programming</h1>
                        </VerticalText>
                    )}
                </ColumnCode>

                <ColumnVisual id="cv"
                              width={css.pillarWidth.cv}
                              shapeColor={css.shapeColors.cvColor}
                              className="index visual global-box-shadow"
                              onMouseOver={handleMouseOver}
                              onMouseOut={handleMouseOut}
                              onClick={handleOnClick}
                              active={visual}>
                    {visual ? (
                        <PillarsVisualisation />
                    ) : (
                        <VerticalText>
                            <h1>3D Visualisation</h1>
                        </VerticalText>
                    )}
                </ColumnVisual>

                <ColumnProject id="cp"
                               width={css.pillarWidth.cp}
                               shapeColor={css.shapeColors.cpColor}
                               className="index project global-box-shadow"
                               onMouseOver={handleMouseOver}
                               onMouseOut={handleMouseOut}
                               onClick={handleOnClick}
                               active={project}>
                    {project ? (
                        <PillarsProject />
                    ) : (
                        <VerticalText>
                            <h1>Project Management</h1>
                        </VerticalText>
                    )}
                </ColumnProject>

            </ContainerPillars>

        </Container>
    );

}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  height: 100vh;
`;

const ContainerPillars = styled.div`
  display: flex;
  grid-column-start: 2;
`;

// Defines all three text columns and by wrapping in a div, fixes some odd grid resizing issues
const VerticalText = styled.div`
  writing-mode: vertical-lr;
  text-orientation: sideways;
  text-align: left;
  padding: 5% 0 0 5%;
`;

const ColumnCode = styled.div`
  flex-basis: ${props => props.width};
  transition: flex-basis 0.9s;
  background-color: ${props => props.shapeColor};
  border-radius: 5px 0 0 0;
  // border-left: 5px solid #c8b7d4;

  // on mouseover content below
  //
  @keyframes animatedBackground {
    from {
      background-position: 0 0;
      opacity: 0;
    }
    to {
      background-position: -40px 0;
      opacity: 1;
    }
  }
  
  ${props => props.active && css`
    // background-image: linear-gradient(to top,  rgba(186, 231, 169, 1), rgba(1, 1, 1, 0)), url(${props => props.backgroundImage});
    background-image: linear-gradient(to top,  rgba(34, 34, 34, 1), rgba(1, 1, 1, 0)), url(${props => props.backgroundImage});
    animation: animatedBackground 1.5s ease-out;
    background-position: -40px 0;
  `}
  
`;

const ColumnVisual = styled.div`
  flex-basis: ${props => props.width};
  transition: flex-basis 0.9s;
  background-color: ${props => props.shapeColor};
`;

const ColumnProject = styled.div`
  flex-basis: ${props => props.width};
  transition: flex-basis 0.9s;
  background-color: ${props => props.shapeColor};
  border-radius: 0 5px 0 0;
`;

export default IndexPillars;
