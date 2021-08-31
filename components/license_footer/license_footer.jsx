import styled from "styled-components";

const LicenseFooter = ({addClassPTag}) => {

    return (
        <LicenseFooterContainer>
            <p className={addClassPTag}>Mydogspies.com 2021 | All rights reserved | CC license</p>
        </LicenseFooterContainer>
    )

}

export default LicenseFooter;

const LicenseFooterContainer = styled.div`

`;
