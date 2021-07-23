import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useInView} from "react-intersection-observer";
import React, {useEffect} from "react";

const Scroll   = require('react-scroll');
const ScrollWrapper  = Scroll.Element;

import {setCurrentIconColor} from "../../../redux/styles/styles.action";
import styles from "../../../styles/icon_colors.module.scss";

const IndexVisual = () => {

    const dispatch = useDispatch();
    const [ref, inView] = useInView({
        threshold: .7
    });
    const css = {
        icon_color: styles.iconColorVisual
    }

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentIconColor(css.icon_color));
        }
    }, [dispatch, inView]);

    return (
        <ScrollWrapper name="visual">
            <ContainerVisual ref={ref} className="index index-code" id="index-code">
                <VisualLeft />
                <VisualRight />
            </ContainerVisual>
        </ScrollWrapper>

    )

}

const ContainerVisual = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 2.5fr 1fr;
  height: 100vh;
`;

const VisualLeft = styled.div`
  grid-column-start: 2;
  background-color: darkorchid;
`;

const VisualRight = styled.div`
  grid-column-start: 3;
  background-color: white;
`;




export default IndexVisual;
