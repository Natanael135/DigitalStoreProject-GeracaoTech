import styled from "styled-components";
import "../App.jsx"
import arrow from "../assets/icons/right-arrow-svgrepo-com.svg"
import "../../src/global.css"
import { Link } from "react-router-dom";

const Section = ({title, textAlign, children, link}) => {
    const SectionContainer = styled.section`
    width:100%;
        margin-top:20px;
    & .header{
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items:center;
        margin-bottom: 12px;
        & h1{
            color: var(--dark-gray-2);
            font-size:24px ;
            font-weight: 700;
            margin:0;
        }
        & span{
            & a{
                color:var(--primary);
                font-size: 14px;
                font-weight: 400;
                cursor:pointer;
                text-decoration: none;
                &:hover{
                    color:var(--tertiary)
                }
            }
            & img{
                width:18px;
                margin-left: 5px;
            }
        }
    } 


    
    `  
    const links = link;
    console.log(links)
    return (  
        <SectionContainer>
        <div className="header" style={link? {display:"flex"}: {display:"block"}}>
            <h1 style={{textAlign:`${textAlign}`}}>{title}</h1>
            {link?(
                    <span ><Link to={links.href}>{links.text}</Link><img  src={arrow} alt="" /></span>
                ): console.log("erro")}
        </div>

            {children}

        </SectionContainer>
    );
}
 
export default Section;
