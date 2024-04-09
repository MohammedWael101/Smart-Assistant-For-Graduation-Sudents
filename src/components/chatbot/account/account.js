import './account.css'
import img from './image.png'

export default function Account(){
    return(
        <div className='bg'>
            <button type="button" className="btn profile">
                <img src={img} className='profileImg'/>
                <h6 className='name'>Mohamed Haggag</h6>
            </button>
        </div>
    )
}