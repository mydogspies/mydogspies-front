import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {useInView} from "react-intersection-observer";

const Scroll   = require('react-scroll');
const ScrollWrapper  = Scroll.Element;

import {setCurrentIconColor} from "../../../redux/styles/styles.action";
import backgroundColors from "../../../styles/icon_colors.module.scss";
import shapeColors from '../../../styles/shape_colors.module.scss';

import ReactLogoSvg from "../../logos/react_logo";
import JavaLogoSvg from "../../logos/java_logo";

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

                <CodeLeft>

                </CodeLeft>

                <CodeRight shapeColor={css.shapeColors.ccColor}>

                    <LogoContainer>
                        <ReactLogo>
                            <ReactLogoSvg />
                        </ReactLogo>
                        <ReactLogoText>
                            <h3>React | CRA | NextJS</h3>
                        </ReactLogoText>
                        <JavaLogo>
                            <JavaLogoSvg />
                        </JavaLogo>
                        <JavaLogoText>
                            <h3>Java | Spring</h3>
                        </JavaLogoText>
                    </LogoContainer>

                </CodeRight>

            </ContainerCode>
        </ScrollWrapper>
    )

}

export default IndexCode;

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

const LogoContainer = styled.div`
    height: 100vh;
`;

// LOGO STYLES //
//

// JAVA logo
const JavaLogo = styled.div`
  position: absolute;
  width: 100px;
`;

const JavaLogoText = styled.div`

`;

const PythonLogo = styled.div`

  @keyframes pythonLogoMovement {
    from {
      top: 56px;
      left: 346px;
      transform: rotate(-2deg);
    }
    to {
      top: 70px;
      left: 350px;
      transform: rotate(-4deg);
    }
  }

  pointer-events: none;
  position: absolute;
  top: 70px;
  left: 350px;
  width: 55px;
  transform: rotate(-4deg);
  animation: pythonLogoMovement 1s ease-out;
`;

// REACT logo
const ReactLogo = styled.div`
  position: absolute;
  width: 150px;
`;

const ReactLogoText = styled.div`
  position: absolute;
  h3 {
    color: white;
  }
`;

const JSLogo = styled.div`

  @keyframes jsLogoMovement {
    from {
      top: -40px;
      left: 500px;
      transform: rotate(-3deg);
    }
    to {
      top: -20px;
      left: 485px;
      transform: rotate(-6deg);
    }
  }

  pointer-events: none;
  position: absolute;
  top: -20px;
  left: 485px;
  width: 45px;
  transform: rotate(-6deg);
  animation: jsLogoMovement 0.8s ease-out;
`;

const IntellijLogo = styled.div`

  @keyframes intellijLogoMovement {
    from {
      top: 15px;
      left: 440px;
      transform: rotate(36deg);
    }
    to {
      top: 25px;
      left: 435px;
      transform: rotate(6deg);
    }
  }

  pointer-events: none;
  position: absolute;
  top: 25px;
  left: 435px;
  width: 45px;
  transform: rotate(6deg);
  animation: intellijLogoMovement 0.8s ease-out;
`;

const LinuxLogo = styled.div`

  @keyframes LinuxLogoMovement {
    from {
      transform: rotate(6deg);
    }
    to {
      transform: rotate(-2deg);
    }
  }

  pointer-events: none;
  position: absolute;
  top: 65px;
  left: 130px;
  width: 120px;
  transform: rotate(-2deg);
  animation: LinuxLogoMovement 1.5s ease-out;
`;
