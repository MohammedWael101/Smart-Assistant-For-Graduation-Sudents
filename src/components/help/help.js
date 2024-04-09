import './help'
import Img from './imgs/img1.png'
import Img2 from './imgs/img2.png'
import Img3 from './imgs/img3.png'
import Img4 from './imgs/img4.png'
import Img5 from './imgs/img5.png'
import Img6 from './imgs/image.png'

export default function HelpPage(){

    return(

        <div>
            <div className='main d-flex flex-row mb-3'>
                
            <div className="sidebar">
            <a className="navbar-brand " href="#">GradStud</a>
            <div className='container'>
                <img src={Img2} className='img1'/>
                <p>Home</p>
            </div>
            <div className='container'>
                <p>Favorites</p>
                <img src={Img3} className='img2'/>

            </div>
            <div className='container'>
                <p>History</p>
                <img src={Img4} className='img2'/>

            </div>
            <div className='container'>
                <p>Help</p>
                <img src={Img5} className='img2'/>

            </div>
            </div>  
            <img src={Img} className='img'/>
            <div className="sidebar2">
            <div className='container2'>
                <img src={Img6} className='img3'/>
                <div>
                <p className='name'>Mohamed Haggag</p>
                <p className='email'>mohamedhaggag@gmail.com</p>
                </div>
                
            </div>

            </div>
            </div>  
        </div>


    )

}