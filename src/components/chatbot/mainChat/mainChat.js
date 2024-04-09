import './mainChat.css'
import bgimg from './image.png'
import { useState } from 'react'

export default function Mainchat(){
    const [enteredQuestion, setenteredQuestion] = useState([]);
    function updatingTheChat(event){
        if (event.keyCode == 13) {
            setenteredQuestion((existingQuestion) => [event.target.value,...existingQuestion]);
            
        }
    }
    function reset(){
        setenteredQuestion(null)
        setenteredQuestion("")
    }
    return(
        <div className='thechat'>
            <span className="online">ONLINE</span>
            <button type="button" class="btn btn-light Start" onClick={reset}>Start New chat +</button>
            <img src={bgimg} className='bgimg'/>
            <div className='answers d-flex flex-column-reverse justify-content-center'>{enteredQuestion && enteredQuestion.map((question) => <div className="d-flex flex-column mb-5"> <div className='question mb-3 text-end pe-5'>{question}</div> <div className='bot ps-5'>Defualt</div></div>)}</div>
            <input type="text" placeholder='Ask any thing ...' class="typing" onKeyDown={updatingTheChat}></input>
        </div>
    )
}