import Sidebar from './sidebar/sidebar'
import Account from './account/account'
import Mainchat from './mainChat/mainChat'
import './chatbot.css'

export default function ChatbotPage(){

    return(
        <div className='d-flex body'>
            <Sidebar />
            <Mainchat/>
            <Account />
        </div>

    )

}