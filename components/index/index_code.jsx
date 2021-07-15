import styled from "styled-components";

const IndexCode = () => {

    return (
        <Container className="index index-code">
            <Temporary>
                <h2>Code index page | heading | (5b) </h2>
                <h2><span>This page comes by scrolling down | subheading | (6b)</span></h2>
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
  height: 100vh;
`;

// TODO temporary - should be removed asap
const Temporary = styled.div`
  margin: 0 auto;
  width: 45%;
  text-align: center;
  position: relative;
  bottom: 3%;
`;

export default IndexCode;
