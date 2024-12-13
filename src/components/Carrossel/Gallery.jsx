import Carroseul from "./Carroseul";
import ImageCarousel from "./ImageCarouseul";

const Gallery = ({showthumbs, radius, width, height}) => {
    return ( 
        <>
        {
            showthumbs == true?<ImageCarousel radius={radius} showthumbs={showthumbs} />: <Carroseul width={width} height={height}/>
        }
        </>
     );
}
 
export default Gallery;