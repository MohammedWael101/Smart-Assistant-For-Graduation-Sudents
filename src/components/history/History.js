import Sidebar from './sidebar/sidebar'
import Account from './account/account'
import Mainchat from './mainHistory/mainHistory'
import './History.css'

export default function HistoryPage(){

    return(
        <div className='d-flex body'>
            <Sidebar />
            <Mainchat/>
            <Account />
        </div>

    )

}