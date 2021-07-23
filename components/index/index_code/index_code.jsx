import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {useInView} from "react-intersection-observer";

const Scroll   = require('react-scroll');
const ScrollWrapper  = Scroll.Element;

import {setCurrentIconColor} from "../../../redux/styles/styles.action";
import backgroundColors from "../../../styles/icon_colors.module.scss";
import shapeColors from '../../../styles/shape_colors.module.scss';

const IndexCode = () => {

    const dispatch = useDispatch();
    const [ref, inView] = useInView({
        threshold: .5
    });
    const css = {
        icon_color: backgroundColors.iconColorCode,
        shapeColors: {
            ccColor: shapeColors.shapesColorCode
        }
    }

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentIconColor(css.icon_color));
        }
    }, [dispatch, inView]);

    return (
        <ScrollWrapper name="code">
            <ContainerCode ref={ref} className="index index-code" id="index-code">
                <CodeLeft />
                <CodeRight shapeColor={css.shapeColors.ccColor} />
            </ContainerCode>
        </ScrollWrapper>
    )

}

const ContainerCode = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 2.5fr 1fr;
  height: 100vh;
`;

const CodeLeft = styled.div`
  grid-column-start: 2;
  background-color: white;
`;

const CodeRight = styled.div`
  grid-column-start: 3;
  background-color: ${props => props.shapeColor};
`;



export default IndexCode;
