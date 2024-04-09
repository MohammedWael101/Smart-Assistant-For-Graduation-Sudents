import './homePage.css'
import img1 from './homePageImgs/img1.png'
import img2 from './homePageImgs/img2.png'
import img3 from './homePageImgs/img3.png'
import img4 from './homePageImgs/img4.png'
import img5 from './homePageImgs/img5.png'
import ChatbotPage from '../chatbot/chatBot'

export default function HomePage(){

    return(
        <>
    <nav className="navbar navbar-expand-lg p-3" data-bs-theme="dark">
    <div class="container-fluid">
        <a className="navbar-brand ms-5" href="/">GradStud</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a className="nav-link me-3" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
            <a className="nav-link me-3" href="/chatbot-page">Chat</a>
            </li>
            <li class="nav-item">
            <a className="nav-link me-3" href="/history-page">History</a>
            </li>
            <li class="nav-item">
            <a className="nav-link me-5" href="/favorite-page">Favorites</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

    <div className='sec d-flex justify-content-between'>
        <div className='titleMain'>
        <h1 >Smart Assistant For Graduation Students</h1>
        <p>That chatbot to help graduation students</p>
        <a href="/register-page" type="button" class="btn btn-primary btn-lg me-5 text-center text-black bg-white">Register</a>
        <a href="/login-page" type="button" class="btn btn-primary btn-lg ms-5 text-center text-black bg-white">Login</a>
        </div>
        <img src={img1} class="img-fluid img1"/>
    </div>
    <div className='sec d-flex justify-content-between'>
        <img src={img2} class="img-fluid img2"/>
        <div className='title2'>
            <div>
                <h1 >Chatbot can help you to answer the question who ask you .</h1>
                <p>Can help you to answer the question who ask you.</p>
            </div>
            <a href='chatbot-page' type="button" class="btn btnToGo btn-primary btn-lg text-center bg-white">Click Here</a>
        </div>
    </div>
    <div className='sec d-flex justify-content-between'>
        <div className='title1'>
            <div>
                <h1 >you can find the favourite answer here .</h1>
                <p>you can find the favourite answer here.</p>
            </div>
            <a href='/favorite-page' type="button" class="btn btnToGo btn-light btn-lg text-center bg-white">Click Here</a>
        </div>
        <img src={img3} class="img-fluid img1"/>
    </div>
    <div className='sec d-flex justify-content-between'>
        <img src={img4} class="img-fluid img2"/>
        <div className='title2'>
            <div>
                <h1 >you can find the history message here .</h1>
                <p>you can find the history message here.</p>
            </div>
            <a href='/history-page' type="button" class="btn btnToGo btn-primary btn-lg text-center bg-white">Click Here</a>
        </div>
    </div>
    {/* <div className='sec d-flex justify-content-between'>
        <div className='title1'>
            <div>
                <h1 >you can find the help message here .</h1>
                <p>you can find the help message here.</p>
            </div>
            <a href='/history' type="button" className="btn btnToGo btn-light btn-lg text-center bg-white">Click Here</a>
        </div>
        <img src={img5} class="img-fluid img1"/>
    </div> */}
    </>
    )
}