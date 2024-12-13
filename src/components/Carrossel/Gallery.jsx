import Carroseul from "./Carroseul";
import ImageCarousel from "./ImageCarouseul";

const Gallery = ({showthumbs, radius, width, height}) => {
    return ( 
        <>
        {
            showthumbs == true?<ImageCarousel radius={radius} />: <Carroseul width={width} height={height}/>
        }
        </>
     );
}
 
export default Gallery;