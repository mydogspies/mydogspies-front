import {useState} from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

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
    }

    const handleMouseOver = (event) => {
        const id = event.target.id;

        switch (id) {
            case 'cc':
                if(!mouseOver) {
                    event.target.parentElement.style.gridTemplateColumns = '0.9fr 0.1fr 4fr 0.25fr 0.25fr 0.1fr 0.9fr';
                    document.body.style.cursor = "pointer";
                    setCode(true);
                    setMouseOver(true);
                }
                break;
            case 'cv':
                if(!mouseOver) {
                    event.target.parentElement.style.gridTemplateColumns = '0.9fr 0.1fr 0.25fr 4fr 0.25fr 0.1fr 0.9fr';
                    document.body.style.cursor = "pointer";
                    setVisual(true);
                    setMouseOver(true);
                }
                break;
            case 'cp':
                if(!mouseOver) {
                    event.target.parentElement.style.gridTemplateColumns = '0.9fr 0.1fr 0.25fr 0.25fr 4fr 0.1fr 0.9fr';
                    document.body.style.cursor = "pointer";
                    setProject(true);
                    setMouseOver(true);
                }
                break;
            default:
                break;
        }
    }

    const handleMouseOut = (event) => {
        setMouseOver(false);
        event.target.parentElement.style.gridTemplateColumns = '0.9fr 0.1fr 1.5fr 1.5fr 1.5fr 0.1fr 0.9fr';
        document.body.style.cursor = "default";
        setCode(false);
        setVisual(false);
        setProject(false);
    }

    const handleOnClick = (event) => {
        const id = event.target.id;

        switch (id) {
            case 'cc':
                event.preventDefault();
                router.push('/#index-code');
                break;
            case 'cv':
                event.preventDefault();
                router.push('/#index-visual');
                break;
            case 'cp':
                event.preventDefault();
                router.push('/#index-project');
                break;
            default:
                break;
        }
    }

    return (
        <Container>
            <ColumnSpacerLeft backgroundcolor={css.background_color} />

            <ColumnCode id="cc"
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

            <ColumnVisual id="cv"
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

            <ColumnProject id="cp"
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

            <ColumnSpacerRight/>
        </Container>
    );

}

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 0.1fr 1.5fr 1.5fr 1.5fr 0.1fr 0.9fr;
  height: 100vh;
`;

// Spacer is a fix for some erratic onMouseEnter firing when entering from the left
// Notice we pass current background color as a props via the return above
const ColumnSpacerLeft = styled.div`
  grid-column-start: 2;
  background-color: ${props => props.backgroundcolor};
`;

const ColumnSpacerRight = styled.div`
  grid-column-start: 6;
  background-color: ${props => props.backgroundcolor};
`;

// Defines all three text columns and by wrapping in a div, fixes some odd grid resizing issues
const VerticalText = styled.div`
  writing-mode: vertical-lr;
  text-orientation: sideways;
  text-align: left;
  padding: 5% 0 0 5%;
`;

const ColumnCode = styled.div`
  grid-column-start: 3;
  background-color: #bae7a9;
`;

const ColumnVisual = styled.div`
  grid-column-start: 4;
  background-color: #c8b7d4;
`;

const ColumnProject = styled.div`
  grid-column-start: 5;
  background-color: #b1d4d7;
`;

export default IndexPillars;
