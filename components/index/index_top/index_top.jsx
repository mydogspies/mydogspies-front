import React, {useEffect} from 'react';
import styled from "styled-components";
import {useInView} from 'react-intersection-observer';
import {useDispatch} from 'react-redux';

import {setCurrentIconColor} from "../../../redux/styles/styles.action";
import styles from '../../../styles/icon_colors.module.scss';
import backgroundColors from '../../../styles/svg_background_colors.module.scss';
import IndexBackgroundSvg from "./svg_index_background";

const IndexTop = () => {

    const dispatch = useDispatch();
    const [ref, inView] = useInView({
        threshold: .7
    });
    const css = {
        icon_color: styles.iconColorIndex,
        background_color: backgroundColors.backgroundIndex
    }

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentIconColor(css.icon_color));
        }
    }, [dispatch, inView]);

    return (
        <Container ref={ref} className="index index-top">

            <HeadingContainer>
                <HeadingCode>
                    <h1>Programming</h1>
                </HeadingCode>

                <HeadingProject>
                    <h1>Project Management</h1>
                </HeadingProject>

                <HeadingVisual>
                    <h1>3D Visualisation</h1>
                </HeadingVisual>
            </HeadingContainer>

            <Background>
                <IndexBackgroundSvg background_color={css.background_color}/>
            </Background>

        </Container>
    )

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const Background = styled.div`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  height: 80vh;
  text-align: center; // centering hack for firefox
`;

const HeadingContainer = styled.div`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const HeadingCode = styled.div`
  color: white;
  position: absolute;
  top: -200px;
  left: 400px;
  z-index: 6;
`;

const HeadingVisual = styled.div`
  color: white;
  position: absolute;
  top: 200px;
  right: 200px;
  z-index: 7;
`;

const HeadingProject = styled.div`
  color: white;
  position: absolute;
  top: 100px;
  left: 350px;
  z-index: 8;
  width: 200px;
`;


export default IndexTop;
