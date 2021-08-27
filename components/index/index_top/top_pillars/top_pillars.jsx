import {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Scroll = require('react-scroll');
const scroller = Scroll.scroller;

import backgroundColors from '../../../../styles/svg_background_colors.module.scss';
import shapeColors from '../../../../styles/shape_colors.module.scss';

import PillarsProgramming from './index_pillars_programming';
import PillarsVisualisation from './index_pillars_visualisation';
import PillarsProject from './index_pillars_project';


const TopPillars = () => {

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
                if (!mouseOver) {
                    changeWidths(['90%', '5%', '5%']);
                    document.body.style.cursor = "pointer";
                    document.getElementById('cc').style.opacity = "0";
                    setCode(true);
                    setMouseOver(true);
                }
                break;
            case 'cv':
                if (!mouseOver) {
                    changeWidths(['5%', '90%', '5%']);
                    document.body.style.cursor = "pointer";
                    document.getElementById('cv').style.opacity = "0";
                    setVisual(true);
                    setMouseOver(true);
                }
                break;
            case 'cp':
                if (!mouseOver) {
                    changeWidths(['5%', '5%', '90%']);
                    document.body.style.cursor = "pointer";
                    document.getElementById('cp').style.opacity = "0";
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
        document.getElementById('cc').style.opacity = "1";
        document.getElementById('cv').style.opacity = "1";
        document.getElementById('cp').style.opacity = "1";
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
                            className="global-box-shadow"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            onClick={handleOnClick}
                            active={code}>
                    <VerticalText>
                        <h1>Programming</h1>
                    </VerticalText>
                </ColumnCode>

                <ColumnVisual id="cv"
                              width={css.pillarWidth.cv}
                              shapeColor={css.shapeColors.cvColor}
                              className="global-box-shadow"
                              onMouseOver={handleMouseOver}
                              onMouseOut={handleMouseOut}
                              onClick={handleOnClick}
                              active={visual}>
                    <VerticalText>
                        <h1>Visual Design</h1>
                    </VerticalText>
                </ColumnVisual>

                <ColumnProject id="cp"
                               width={css.pillarWidth.cp}
                               shapeColor={css.shapeColors.cpColor}
                               className="global-box-shadow"
                               onMouseOver={handleMouseOver}
                               onMouseOut={handleMouseOut}
                               onClick={handleOnClick}
                               active={project}>
                    <VerticalText>
                        <h1>Project Management</h1>
                    </VerticalText>
                </ColumnProject>

            </ContainerPillars>

            <BackgroundContent>
                {code ? (
                    <PillarsProgramming/>
                ) : null}
                {visual ? (
                    <PillarsVisualisation/>
                ) : null}

                {project ? (
                    <PillarsProject/>
                ) : null}
            </BackgroundContent>

        </Container>
    );
}

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  height: 100vh;
`;

const ContainerPillars = styled.div`
  position: absolute;
  display: flex;
  z-index: 1;
  grid-column-start: 2;
  grid-column-end: 2;
  width: 100%;
  height: 100vh;
`;

const BackgroundContent = styled.div`
  position: absolute;
  grid-column-start: 2;
  grid-column-end: 2;
  width: 100%;
  height: 100vh;
`;

// Defines all three text columns and by wrapping in a div, fixes some odd grid resizing issues
const VerticalText = styled.div`
  writing-mode: vertical-lr;
  text-orientation: sideways;
  text-align: left;
  padding: 22px 0 0 11px;
`;

const ColumnCode = styled.div`
  flex-basis: ${props => props.width};
  transition: flex-basis 0.9s;
  background-color: ${props => props.shapeColor};
  border-radius: 5px 0 0 0;
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

export default TopPillars;
