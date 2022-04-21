import styled from 'styled-components';
import useDimensions from "react-cool-dimensions";

import DogGreenSvg from "../../../logos/dog_green";
import topCodeImage from "../../../../public/assets/remote/images/index/coding_screen_1.jpg";

const PillarsProgramming = () => {

    /* The following scaling code is using https://github.com/wellyshen/react-cool-dimensions
    in order to find out the size of the about overlay window. This hook uses ResizeObserver
    to measure the size of the AboutOverlayBase div. We then run it through getScaleFactor, do some math,
    and plug it into the styled component via AboutOverlayContainer.
     */
    const {observe, unobserve, width, height, entry} = useDimensions({
        onResize: ({observe, unobserve, width, height, entry}) => {
            unobserve(); // To stop observing the current target element
            observe(); // To re-start observing the current target element
        },
    });

    const getScaleFactor = () => {
        let widthChecked = width;
        if (width <= 0) { widthChecked = 1000;}
        /* Do not touch low2 & high2 or it will break the scaling - use low1 and high1 to tune the element to fit */
        let scale = roundToTwo(mapRange((1 / widthChecked) * 1000, 0.1, 3, 1.2, 0));
        let isFF = !!navigator.userAgent.match(/firefox/i);
        if (isFF) {scale = scale * 0.9} // adapt to firefox different widths
        return scale;
    };

    return (
        <PillarContainerCoding backgroundImage={topCodeImage.src}
                               ref={observe}>

            <ContentContainerCoding className="index coding"
                                    scaleFactor={getScaleFactor()}>
                <HeaderCoding>
                    <h1 className="header global-text-shadow">Coding</h1>
                </HeaderCoding>

                <ContentBoxOne className="global-box-shadow">
                    <div>
                        <p>"Pretty much language agnostic... JS, Java, Python; like with spoken languages - the more the
                            merrier"</p>
                    </div>
                </ContentBoxOne>

                <ContentBoxThree className="global-box-shadow">
                    <div>
                        <p className="smaller">"Coding is like a novel. C++ is like a book of law;
                            old, stuffy and rigid. Java is the lengthy verbose science report. Python has elegance and
                            depth like the writings of Jonathan Franzen.
                            Javascript is the quirky, chaotic but highly entertaining art piece in the sunday edition of
                            The Guardian."</p>
                    </div>
                </ContentBoxThree>

                <ContentBoxTwo className="global-box-shadow">
                    <div>
                        <p className="bigger">"Would be cool with logging to see if Mydogprobot actually builds anything
                            on push... Have to plan to add the plan to add an issue in the issue tracker!"</p>
                    </div>
                </ContentBoxTwo>

                <DogGreen>
                    <DogGreenSvg classes="global-svg-icon-shadow"/>
                </DogGreen>

                <FooterCoding>
                    <h1 className="footer global-text-shadow">quotes by mydogspies</h1>
                </FooterCoding>
            </ContentContainerCoding>

        </PillarContainerCoding>
    )

}

export default PillarsProgramming;

/* FUNCS */
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

/* STYLES */
const PillarContainerCoding = styled.div`
  pointer-events: none;
  position: relative;
  height: 100vh;
  
  @keyframes animatedCodeBackgroundPos {
    from {
      background-position: 20% 50%;
    }
    to {
      background-position: 25% 50%;
    }
  }

  @keyframes animatedCodeBackgroundOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  background-image: linear-gradient(to top, rgba(34, 34, 34, 1), rgba(1, 1, 1, 0)), url(${props => props.backgroundImage});
  animation: animatedCodeBackgroundPos 0.9s ease-out, animatedCodeBackgroundOpacity 2s ease-out;
  background-size: cover;
  background-position: 25% 50%;
`;


const ContentContainerCoding = styled.div`
  pointer-events: none;
  position: absolute;
  height: 100px;
  width: 100px;
  top: 19%;
  left: 26%;
  transform: translate(-50%, -50%) scale(${props => props.scaleFactor});
  
  @media screen and (max-width: 950px) {
    top: 15%;
    left: 21%;
  }
`;

const HeaderCoding = styled.div`
  pointer-events: none;
  position: relative;
  transform: rotate(1deg);
  top: -23px;
`;

const FooterCoding = styled.div`
  pointer-events: none;
  position: relative;
  top: 57px;
  left: 105px;
  width: 550px;
  transform: rotate(1deg);
`;

// CONTENT BOX STYLES //
//
const ContentBoxOne = styled.div`
  pointer-events: none;
  position: relative;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  padding: 25px;
  width: 520px;
  left: 70px;
  
`;

const ContentBoxTwo = styled.div`
  pointer-events: none;
  position: relative;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  padding: 25px;
  width: 520px;
  top: 105px;
  left: 10px;
`;

const ContentBoxThree = styled.div`
  pointer-events: none;
  position: relative;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  padding: 25px;
  width: 720px;
  top: 55px;
  left: -65px;
  transform: rotate(1deg);
`;

// LOGO STYLES //
//
const DogGreen = styled.div`
  pointer-events: none;
  display: block;
  position: relative;
  width: 80px;
  top: 35px;
  left: 475px;
  transform: rotate(3deg);
`;
