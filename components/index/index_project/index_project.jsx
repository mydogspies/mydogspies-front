import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useInView} from "react-intersection-observer";
import React, {useEffect} from "react";

const Scroll   = require('react-scroll');
const ScrollWrapper  = Scroll.Element;

import {setCurrentIconColor} from "../../../redux/styles/styles.action";
import backgroundColors from "../../../styles/icon_colors.module.scss";
import shapeColors from '../../../styles/shape_colors.module.scss';

import DogBlueSvg from "../../logos/dog_blue";

const IndexProject = () => {

    const dispatch = useDispatch();
    const [ref, inView] = useInView({
        threshold: .7
    });
    const css = {
        icon_color: backgroundColors.iconColorProject,
        shapeColors: {
            cpColor: shapeColors.shapesColorProject
        }
    }

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentIconColor(css.icon_color));
        }
    }, [dispatch, inView]);

    return (
        <ScrollWrapper name="project">
            <ContainerProject ref={ref} className="index index-code" id="index-code">

                <ProjectLeft>
                    <TempProjectTextBox>
                        <h1>PROJECT MANAGEMENT</h1>
                        <p>This area is still in development.</p>
                        <p>Here will soon come a blog around the PM role and also some case studies.</p>
                    </TempProjectTextBox>
                    <DogBlueLogo>
                        <DogBlueSvg />
                    </DogBlueLogo>
                </ProjectLeft>

                <ProjectRight shapeColor={css.shapeColors.cpColor}>

                </ProjectRight>

            </ContainerProject>
        </ScrollWrapper>

    )

}

export default IndexProject;

const ContainerProject = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 2.5fr 1fr;
  height: 100vh;
`;

/* CONTENT LEFT */
const ProjectLeft = styled.div`
  grid-column-start: 2;
  background-color: white;
`;

// TODO the below styles are TEMP ONLY; remove any TAG-related formatting from here asap
const TempProjectTextBox = styled.div`
  position: relative;
  width: 75%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  p {
    padding: 0 0 10px 0;
  }
  h1 {
    font-size: 55px;
    padding: 0 0 15px 0;
  }
`;

const DogBlueLogo = styled.div`
  position: relative;
  width: 100px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


/* CONTENT RIGHT */
const ProjectRight = styled.div`
  grid-column-start: 3;
  background-color: ${props => props.shapeColor};
\` ;
`;
