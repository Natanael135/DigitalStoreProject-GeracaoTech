import styled from "styled-components";

const Banner2 = () => {
    const Banner = styled.div`
        width: 100%;
        height: 571px;
        & .bannerContent{
            margin: auto;
            width: 100%;
            height: 571px;
            display: flex;
            justify-content: center;
            align-items: center;
            @media (min-width: 1024px){
            height: 398px;
        }
    }
    `

    return ( 
        <Banner>
            <div className="bannerContent">
                <h2>salve</h2>
            </div>
        </Banner>
     );
}
 
export default Banner2;