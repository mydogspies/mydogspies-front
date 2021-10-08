import styled from "styled-components";
import shapeColors from '../../../styles/shape_colors.module.scss';

import AboutSquare from "../index_components/about";
import BlogSquare from "../index_components/blog";
import VideoSquare from "../index_components/videos";
import LogoRotation from "../index_components/logo_rotation";

const IndexTopContent = () => {

    const css = {
        shapeColors: {
            ccColor: shapeColors.shapesColorCode,
            cvColor: shapeColors.shapesColorVisual
        }
    }

    return (
        <Container>

            <Main>

            </Main>

            <ColumnOne backgroundColor={css.shapeColors.ccColor}>

                <SquareOne>
                    <VideoSquare />
                </SquareOne>

                <SquareTwo>
                    <BlogSquare />
                </SquareTwo>

            </ColumnOne>

            <ColumnTwo backgroundColor={css.shapeColors.cvColor}>

                <SquareThree>
                    <LogoRotation />
                </SquareThree>

                <SquareFour>
                    <AboutSquare />
                </SquareFour>

            </ColumnTwo>

        </Container>
    )

}

export default IndexTopContent;

const Container = styled.div`
  z-index: 2;
  position: relative;
  display: grid;
  grid-template-columns: 1.8fr 1.2fr 1.2fr;
  height: 100vh;
`;

const Main = styled.div`
  background-color: white;
  grid-column: 1;
  height: 100vh;
  width: 100%;
`;

const ColumnOne = styled.div`
  background-color: ${props => props.backgroundColor};
  grid-column: 2;
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100vh;
  width: 100%;
`;

const SquareOne = styled.div`

`;

const SquareTwo = styled.div`

`;

const ColumnTwo = styled.div`
  background-color: ${props => props.backgroundColor};
  grid-column: 3;
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100vh;
  width: 100%;
`;

const SquareThree = styled.div`

`;

const SquareFour = styled.div`

`;
