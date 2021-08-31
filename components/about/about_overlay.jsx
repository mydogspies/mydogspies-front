import styled from 'styled-components';
import shapeColors from '../../styles/shape_colors.module.scss';

import LicenseFooter from '../license_footer/license_footer';

import DogGreenSvg from "../logos/dog_green";
import {useEffect, useState} from "react";

const AboutOverlay = ({addClass}) => {

    const [scaleHeight, setScaleHeight] = useState(1);
    const [scaleWidth, setScaleWidth] = useState(1);

    // get css background colors
    //
    const css = {
        shapeColors: {
            ccColor: shapeColors.shapesColorCode,
            cvColor: shapeColors.shapesColorVisual,
            cpColor: shapeColors.shapesColorProject
        }
    }

    const updateDimensions = () => {
        let scaleX = window.innerWidth / 1920;
        let scaleY = window.innerHeight / 1080;
        setScaleHeight(scaleX);
        setScaleWidth(scaleY);
    };

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <AboutOverlayBase backgroundColor={css.shapeColors.ccColor} className={addClass}>

            <AboutOverlayContainer className="about-overlay"
                                   id="about-overlay-container"
                                   scaleHeight={scaleHeight}
                                   scaleWidth={scaleWidth}>

                <AboutHeader>
                    <h1 className="global-text-shadow">Welcome to Mydogspies.com</h1>
                </AboutHeader>
                <AboutTextBoxOne className="global-box-shadow">
                    <p>One of my first projects was an online magazine, end 90's, and it was built in <a href="https://coldfusion.adobe.com/" target="_blank">ColdFusion</a>.
                        It was a bulky and expensive to run. One night, while I was travelling overseas, we got locked
                        out of our servers due to having a welcome bot on our IRC channel. Yes, things like that were seen as very subversive
                        back then. The server provider had decided a due notice was not required. As I sat there in my small hotel
                        room in <a href="https://en.wikipedia.org/wiki/Sacramento,_California" target="_blank">Sacramento,
                            Ca.</a> I decided right there and then to jump ships, rent a new provider and start from scratch. That's how I came
                        across <a href="https://www.php.net/" target="_blank">php</a> and the real interest in coding started.
                        Many years of php DIY and hacking Wordpress templates followed.  </p>
                </AboutTextBoxOne>
                <AboutTextBoxTwo className="global-box-shadow">
                    <p>Years later while my web projects would be choking on Wordpress, I was busy elsewhere
                        with doing a career in audio engineering. The first experience outside of php and the web came with <a href="https://www.python.org/" target="_blank">Python</a> while
                        designing audio effects and surround sound automation for various live events.
                        It was almost a life changer being able to tap into the very core of some propriety
                        software via something as elegant as Python. Later on when I progressed to
                        project management in the event industry and had time to finally do my own visual art projects,
                        I again visited Python; this time writing extensions for Autodesk's <a href="https://www.autodesk.com/products/maya/overview" target="_blank">Maya</a> and
                        SideFX's <a href="https://www.sidefx.com/" target="_blank">Houdini</a>.</p>
                </AboutTextBoxTwo>
                <AboutTextBoxThree className="global-box-shadow">
                    <p>After over 20 years in the music industry as a freelancer, out of which the last 10 being in
                        project and production management for large scale events, I decided that enough is enough.
                        Very much at the very same time, as if the universe was about to underscore my future, the pandemic
                        came and live events where over. It was time to move on after all those years
                        of globetrotting and eternal jet lags. I got my chance to finally pursue coding.</p>
                </AboutTextBoxThree>
                <AboutTextBoxFour className="global-box-shadow">
                    <p>I decided to become a <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank">Java</a> developer for no
                        other reason that that it seemed to present the widest career possibilities later. I spent 6 months in programming
                        school with Java, JavaFX, JavaEE and after that I added <a href="https://spring.io/" target="_blank">Spring</a> on top
                        spending the entire summer that year building various Spring websites. On the way
                        I learned <a href="https://www.docker.com/" target="_blank">Docker</a> and how to deploy Java
                        projects directly to docker using various pipelines. But as it was time to get out in the real
                        world the pandemic struck a second time. Never being the
                        type that sits around I thought that now if ever is a great time to see what lingers beyond. I dipped my toes into <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Javascript</a> and then <a href="https://reactjs.org/" target="_blank">React</a> and never
                        looked back. In fact, this very site is the fruit of exploring <a href="https://nextjs.org/" target="_blank">NextJS</a> with <a href="https://mariadb.com/" target="_blank">MariaDB</a>, with a separate independent <a href="https://nodejs.org/" target="_blank">NodeJS</a> backend, using automated deployment
                        and build via local server scripts and <a href="https://docs.github.com/en/developers/webhooks-and-events/webhooks/about-webhooks" target="_blank">Github hooks</a>. Going from Spring to React was a really
                        fresh breeze of air. More so, the old days in php hell in a hotel room in Sac seem like some
                        very distant and unreal world.</p>
                </AboutTextBoxFour>
                <AboutTextBoxFive className="global-box-shadow">
                    <p>This site is somehow also the point where many of the meandering career paths I once chose now come back
                        together. It's all fresh and new right now but will slowly be filled up with content from those many learning processes that lead me here.
                        I hope you all enjoy it and feel free to <a href="https://github.com/mydogspies" target="_blank">contact me
                            on Github</a>, at least until the many things that need to be finished on this side finally are!
                    </p>
                </AboutTextBoxFive>
                <AboutSignature>
                    <h1 className="about-signature global-text-shadow">Mydogspies aka Peter A. Mankowski, Berlin 2021</h1>
                </AboutSignature>
                <DogGreen>
                    <DogGreenSvg className="global-box-shadow"/>
                </DogGreen>

            </AboutOverlayContainer>

            <AboutFooter className="about-overlay">
                <LicenseFooter addClassPTag="about-footer global-text-shadow"/>
            </AboutFooter>

        </AboutOverlayBase>
    )
}

export default AboutOverlay;

const AboutOverlayBase = styled.div`
  position:relative;
  opacity: 0.97;
  width: 85vw;
  height: 87vh;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor};
`;

const AboutOverlayContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 38%;
  transform: translate(-50%, -50%) scale(
          ${props => props.scaleWidth},
          ${props => props.scaleHeight});

`;

const AboutHeader = styled.div`
  position: relative;
  top: 0;
  left: 245px;
  width: 665px;
`;


const AboutTextBoxOne = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  padding: 13px 16px 12px 16px;
  width: 500px;
  top: 90px;
  transform: rotate(1deg);
`;

const AboutTextBoxTwo = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  padding: 13px 16px 12px 16px;
  width: 450px;
  top: 135px;
  left: 550px;
`;

const AboutTextBoxThree = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  padding: 13px 16px 12px 16px;
  width: 400px;
  top: 390px;
  left: 50px;
`;

const AboutTextBoxFour = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  padding: 13px 16px 12px 16px;
  width: 650px;
  top: 455px;
  left: 500px;
  transform: rotate(-1deg);
`;

const AboutTextBoxFive = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  padding: 13px 16px 12px 16px;
  width: 500px;
  top: 630px;
  left: -30px;
`;

const AboutSignature = styled.div`
  position: relative;
  top: 735px;
  left: 535px;
  width: 515px;
  transform: rotate(1deg);
`;

const AboutFooter = styled.div`
  position: absolute;
  bottom: 10px;
  right: 100px;
`;

// LOGO STYLES //
//
const DogGreen = styled.div`
  position: absolute;
  width: 75px;
  top: 395px;
  left: 465px;
  transform: rotate(6deg);
`;

