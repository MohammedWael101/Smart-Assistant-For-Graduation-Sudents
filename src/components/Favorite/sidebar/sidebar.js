import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faStar,faClock,faCircleInfo,faBars } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(){
    return(
        <div className="bg1">
            <a className="navbar-brand mt-5 logo" href="#">GradStud</a>
            <div>
                <div className='d-flex flex-column'>
                <a href='/' type="button" className="btn sideBtn">
                    <FontAwesomeIcon className='icon' icon={faHouse} />
                    <span className='sidenavGoTo'>Home</span>
                </a>
                <a href='favorite-page' type="button" className="btn sideBtn">
                    <FontAwesomeIcon className='icon' icon={faStar} />
                    <span className='sidenavGoTo'>Favorite</span>
                </a>
                <a href='/history-page' type="button" className="btn sideBtn">
                    <FontAwesomeIcon className='icon' icon={faClock} />
                    <span className='sidenavGoTo'>History</span>
                </a>
                <a href='/' type="button" class="btn sideBtn">
                    <FontAwesomeIcon className='icon' icon={faCircleInfo} />
                    <span className='sidenavGoTo'>Help</span>
                </a>
                </div>

            </div>
        </div>
    )
}