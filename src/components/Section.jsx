import styled from "styled-components";
import "../App.jsx"

const Section = ({title, align, children}) => {
    const SectionContainer = styled.section`
    & h1{
       color: var(--dark-gray-2);
       font-size:24px ;
       font-weight: 700;
       margin-bottom:20px;
    }


    
    `
    return (  
        <SectionContainer>
        <h1>{title}</h1>
            {children}
        </SectionContainer>
    );
}
 
export default Section;
