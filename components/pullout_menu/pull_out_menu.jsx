import styled from "styled-components";
import shapeColors from "../../styles/shape_colors.module.scss";

const PullOutMenu = ({addClass}) => {

    // get css background colors
    //
    const css = {
        shapeColors: {
            ccColor: shapeColors.shapesColorCode,
            cvColor: shapeColors.shapesColorVisual,
            cpColor: shapeColors.shapesColorProject
        }
    }

    return (
            <MenuContainer backgroundColor={css.shapeColors.cpColor} className={addClass}>
                <MenuLinkText>
                    <h1>Home</h1>
                </MenuLinkText>
                <MenuLinkText>
                    <h1>About</h1>
                </MenuLinkText>
                <MenuLinkText>
                    <h1>Github</h1>
                </MenuLinkText>
            </MenuContainer>
    )
}

export default PullOutMenu;

const MenuContainer = styled.div`
  opacity: 0.95;
  height: 76vh;
  width: 300px;
  border-radius: 10px 0 0 10px;
  background-color: ${props => props.backgroundColor}
`;

const MenuLinkText = styled.div`

`;