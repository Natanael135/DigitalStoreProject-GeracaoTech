import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import iconFacebook from "../../assets/icons/facebook.svg";
import iconInstagram from "../../assets/icons/instagram.svg";
import iconTwitter from "../../assets/icons/twitter.svg";
import styled from "styled-components";

// COMPONENTES PARA ESTRUTURAÇÃO: USAR ISSO PARA APLICAR A ESTILIZAÇÃO

const FooterContainer = styled.footer`
  background-color: #1F1F1F;
  color: white;
  padding: 2rem;
`;

const FooterTop = styled.section`
  display: flex;
 flex-flow: wrap;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
    @media (min-width: 1200px) {
        flex-direction: row;
        flex-wrap: nowrap;
          }
          

`;

const Description = styled.div`
   p {
    padding-top: 1rem;
    max-width: 400px;
  }

 img{
    @media (min-width: 768px) {
    width: 253px;
    height: 44px;
  }
  width: 138px;
  height: 24px;
}
`;

const SocialIcons = styled.nav`
  display: flex;
  gap: 1.5rem;

  a img {
    width: 23px;
    height: 18px;
    transition: transform 0.2s ease;
  }
  a:hover {
    transform: scale(1.5);
  }`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: white;
  margin: 2rem 0;
`;

const FooterBottom = styled.section`
  text-align: center;
  font-size: 0.9rem;
`;

const InfoSection = styled.div`

  h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: white;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }
`;

const InfoComponent = ({ title, links }) => (
  <InfoSection>
    <h4>{title}</h4>
    <ul>
      {links.map((link, idx) => (
        <li key={idx}>
          <Link to={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </InfoSection>
);

const Footer = () => {
  const infomações = [
    {
      title: "Informação",
      links: [
        { label: "Sobre Drip Store", path: "/Error" },
        { label: "Segurança", path: "/Error" },
        { label: "Wishlist", path: "/Error" },
        { label: "Blog", path: "/Error" },
        { label: "Trabalhe conosco", path: "/Error" },
        { label: "Meus Pedidos", path: "/Error" },
      ],
    },
    {
      title: "Categorias",
      links: [
        { label: "Camisetas", path: "/ProductList" },
        { label: "Calças", path: "/ProductList" },
        { label: "Bonés", path: "/ProductList" },
        { label: "Headphones", path: "/ProductList" },
        { label: "Tênis", path: "/ProductList" },
      ],
    },
    {
      title: "Contato",
      content: (
        <>
          <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p>Telefone: (85) 1234-5678</p>
        </>
      ),
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterTop>
        <Description>
          <Link to="/">
            <Logo tag="Logo-Footer" />
          </Link>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi dicta quam possimus rerum aliquam magni reprehenderit soluta doloribus ea exercitationem? Enim eius exercitationem harum maxime, ut repellat. Asperiores, esse ut?</p>
          <SocialIcons>
            <a href="https://www.facebook.com" aria-label="Facebook">
              <img src={iconFacebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <img src={iconInstagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <img src={iconTwitter} alt="Twitter" />
            </a>
          </SocialIcons>
        </Description>
        {infomações.map((section, idx) => (
          section.links ? (
            <InfoComponent key={idx} title={section.title} links={section.links} />
          ) : (
            <InfoSection key={idx}>
              <h4>{section.title}</h4>
              {section.content}
            </InfoSection>
          )
        ))}
      </FooterTop>
      <Divider />
      <FooterBottom>&copy; {currentYear} Digital Store</FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
