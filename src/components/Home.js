import React from 'react';
import '../css/Home.css'

class Home extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='background_image'>
                    <div className='home_block'>
                        <h2 className='home_work'>Engineer</h2>
                        <h1 className='home_username'>Kazuki Tsuruse</h1>
                        <p>I am a student aiming to be a web engineer.</p>
                        <p>I belong to the Smartphone App Project.</p>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Home;