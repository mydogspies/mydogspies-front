import styled from "styled-components";
import shapeColors from '../../../styles/shape_colors.module.scss';
import DogGreySvg from "../../logos/dog_grey";


const IndexTopContent = () => {

    const css = {
        shapeColors: {
            ccColor: shapeColors.shapesColorCode,
            cvColor: shapeColors.shapesColorVisual
        }
    }

    return (
        <Container>

            <ContentIndexTop>

                <Content>

                    <CentreLogo>
                        <DogGreySvg />
                    </CentreLogo>

                    <Code backgroundColor={css.shapeColors.ccColor}>

                    </Code>

                    <Visual backgroundColor={css.shapeColors.cvColor}>

                    </Visual>

                </Content>

            </ContentIndexTop>

        </Container>
    )

}

export default IndexTopContent;

const Container = styled.div`
  z-index: 2;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  height: 100vh;
`;

const ContentIndexTop = styled.div`
  position: absolute;
  grid-column-start: 2;
  grid-column-end: 2;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Code = styled.div`
  background-color: ${props => props.backgroundColor};
  grid-column: 1;
  height: 100vh;
  width: 100%;
`;

const Visual = styled.div`
  background-color: ${props => props.backgroundColor};
  grid-column: 2;
  height: 100vh;
  width: 100%;
`;

const CentreLogo = styled.div`
  position: absolute;
  width: 160px;
  height: 100px;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -80px;
`;

