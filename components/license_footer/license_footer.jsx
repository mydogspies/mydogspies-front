import styled from "styled-components";

const LicenseFooter = ({addClassPTag}) => {

    return (
        <LicenseFooterContainer>
            <p className={addClassPTag}><a href="https://mydogspies.com" target="_top">Mydogspies.com</a> 2021 | All rights reserved | licensed <a href="https://creativecommons.org/licenses/by-nc/3.0/legalcode" target="_blank">CC BY-NC 3.0</a> |
            original design by Anna Horak & Mydogspies</p>
        </LicenseFooterContainer>
    )

}

export default LicenseFooter;

const LicenseFooterContainer = styled.div`
    text-align: center;
`;
