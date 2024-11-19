import logoHeader from "../../assets/icons/logo-header.svg";
import logoFooter from "../../assets/icons/logo-footer.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
width: 253px;
height:44px;
`


const Logo = ({tag}) => {
    return ( 
        <LogoContainer>
        <div className="logo">
            <img 
            src={tag == 'Header' ? logoHeader : logoFooter}
             alt="logo" 
             />
        </div>
        </LogoContainer>
     );
}
 
export default Logo;