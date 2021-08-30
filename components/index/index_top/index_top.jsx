import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useInView} from 'react-intersection-observer';
import {useDispatch} from 'react-redux';
import {setCurrentIconColor} from "../../../redux/styles/styles.action";

import styles from '../../../styles/icon_colors.module.scss';
import backgroundColors from '../../../styles/svg_background_colors.module.scss';

import TopPillars from "./top_pillars/top_pillars";

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
            window.location = '#index-top';
        }
    }, [dispatch, inView]);


    return (
        <Container ref={ref} className="index index-top" id="index-top">

            <TopPillars />

        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export default IndexTop;
