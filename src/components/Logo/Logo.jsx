import logoHeader from "../../assets/icons/logo-header.svg";
import logoFooter from "../../assets/icons/logo-footer.svg";

const LogoContainer = ({ children }) => {
  return <div className="logo-container">{children}</div>;
};

const Logo = ({ tag }) => {
  return (
    <LogoContainer>
      <div className="logo">
        <img 
          src={tag === 'Header' ? logoHeader : logoFooter} 
          alt="logo" 
        />
      </div>
    </LogoContainer>
  );
};

export default Logo;
