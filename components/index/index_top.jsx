import React, {useEffect} from 'react';
import styled from "styled-components";
import {useInView} from 'react-intersection-observer';
import {useDispatch} from 'react-redux';

import {setCurrentIconColor} from "../../redux/styles/styles.action";
import styles from '../../styles/icon_colors.module.scss';

const IndexTop = () => {

    const dispatch = useDispatch();
    const [ref, inView] = useInView({
        threshold: .7
    });
    const css = {
        icon_color: styles.iconColorIndex
    }

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentIconColor(css.icon_color));
        }
    }, [dispatch, inView]);

    return (
        <Container ref={ref} className="index index-top">
            <Temporary>
                <h2>Main index page | heading | (5)</h2>
                <h2><span>This page is what we see on initial load | subheading | (6)</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin ex ornare magna cursus,
                    vel commodo neque tristique. Pellentesque molestie quis ligula ac dignissim. Morbi tincidunt congue
                    dolor sit amet vehicula. Aenean malesuada efficitur augue in lacinia. Nunc in volutpat elit. Etiam
                    at blandit tortor. Etiam nec pharetra ligula.</p>
                <p>
                    <a href="#">I am a link - but I go nowhere yet!</a>
                </p>
            </Temporary>
        </Container>
    )

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;`;

// TODO temporary - should be removed asap
const Temporary = styled.div`
  margin: 0 auto;
  width: 45%;
  text-align: center;
  position: relative;
  bottom: 3%;
`;

export default IndexTop;
