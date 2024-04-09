import './mainHistory.css'
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
            <div class="titleHistory">History</div>
            <div className='theHistory d-flex flex-column align-items-center'>
                <div className='questionHistory'>
                    <p className='m-2'>The question</p>
                    <p className='text-center'>The awnser</p>
                </div>
                <div className='questionHistory'>
                    <p className='m-2'>The question</p>
                    <p className='text-center'>The awnser</p>
                </div>
                <div className='questionHistory'>
                    <p className='m-2'>The question</p>
                    <p className='text-center'>The awnser</p>
                </div>
            </div>
            
        </div>
    )
}