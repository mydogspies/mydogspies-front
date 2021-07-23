import {useState} from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Scroll   = require('react-scroll');
const scroller = Scroll.scroller;

import styles from '../../../../styles/svg_background_colors.module.scss';

import PillarsProgramming from './index_pillars_programming';
import PillarsVisualisation from './index_pillars_visualisation';
import PillarsProject from './index_pillars_project';

const IndexPillars = () => {

    const router = useRouter();

    const [mouseOver, setMouseOver] = useState(false);
    const [code, setCode] = useState(false);
    const [visual, setVisual] = useState(false);
    const [project, setProject] = useState(false);

    const css = {
        background_color: styles.backgroundIndex,
        pillarWidth: {cc: '33.33%', cv: '33.33%', cp: '33.33%'}
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

                <ColumnCode id="cc" width={css.pillarWidth.cc}
                            className="index coding"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            onClick={handleOnClick}>
                    {code ? (
                        <PillarsProgramming />
                    ) : (
                        <VerticalText><h1>Programming</h1></VerticalText>
                    )}
                </ColumnCode>

                <ColumnVisual id="cv" width={css.pillarWidth.cv}
                              className="index visual"
                              onMouseOver={handleMouseOver}
                              onMouseOut={handleMouseOut}
                              onClick={handleOnClick}>
                    {visual ? (
                        <PillarsVisualisation />
                    ) : (
                        <VerticalText><h1>3D Visualisation</h1></VerticalText>
                    )}
                </ColumnVisual>

                <ColumnProject id="cp" width={css.pillarWidth.cp}
                               className="index project"
                               onMouseOver={handleMouseOver}
                               onMouseOut={handleMouseOut}
                               onClick={handleOnClick}>
                    {project ? (
                        <PillarsProject />
                    ) : (
                        <VerticalText><h1>Project Management</h1></VerticalText>
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
  background-color: #bae7a9;
`;

const ColumnVisual = styled.div`
  flex-basis: ${props => props.width};
  transition: flex-basis 0.9s;
  background-color: #c8b7d4;
`;

const ColumnProject = styled.div`
  flex-basis: ${props => props.width};
  transition: flex-basis 0.9s;
  background-color: #b1d4d7;
`;

export default IndexPillars;
