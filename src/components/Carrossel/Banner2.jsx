import styled from "styled-components";
import banner from "../../assets/banner/white-sneaker-nike.png"

const Banner2 = () => {
    const Banner = styled.div`
        width: 100%;
        height: 571px;
        & .bannerContent{
            border:1px solid red;
            margin-top: 14px;
            width: 100%;
            
            display: flex;
            justify-content: center;
            align-items: center;
            @media (min-width: 1024px){
            height: 398px;
            & img{
            transform: scaleX(-1) rotate(-35deg);
            }
        }
    }
    `

    return ( 
        <Banner>
            <div className="bannerContent">
                <img src={banner} alt="" />
                <h2>salve</h2>
            </div>
        </Banner>
     );
}
 
export default Banner2;