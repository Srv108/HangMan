import level1 from '../../assets/Images/1.jpg';
import level2 from '../../assets/Images/2.jpg';
import level3 from '../../assets/Images/3.jpg';
import level4 from '../../assets/Images/4.jpg';
import level5 from '../../assets/Images/5.jpg';
import level6 from '../../assets/Images/6.jpg';
import level7 from '../../assets/Images/7.jpg';
import level8 from '../../assets/Images/8.jpg';


function Hangman({step}){
    const images = [level1,level2,level3,level4,level5,level6,level7,level8]

    return (
        <div 
            className = 'w-[500px] h-[500px]'
        >
            <img
                src = {step >= images.length ? images[images.length -1 ] : images[step]}
            />
            
        </div>
    )
}
export default Hangman;