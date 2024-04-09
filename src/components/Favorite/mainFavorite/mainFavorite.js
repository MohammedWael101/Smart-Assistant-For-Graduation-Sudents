import './mainFavorite.css'

export default function MainFavorite(){
    
    return(
        <div className='thechat'>
            <div class="titleHistory">Favorite</div>
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