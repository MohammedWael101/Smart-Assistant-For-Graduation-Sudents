import Sidebar from './sidebar/sidebar'
import Account from './account/account'
import MainFavorite from './mainFavorite/mainFavorite'
import './Favorite.css'

export default function FavoritePage(){

    return(
        <div className='d-flex body1'>
            <Sidebar />
            <MainFavorite/>
            <Account />
        </div>

    )

}