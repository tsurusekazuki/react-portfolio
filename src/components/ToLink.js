import React from 'react';
import {Link} from 'react-router-dom';
import posed from 'react-pose';
import '../css/ToLink.css'

const props = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const Nav = posed.div(props)

class ToLink extends React.Component {
    state = { isVisible: false };

    componentDidMount() {
        setInterval(() => {
            this.setState({ isVisible: !this.state.isVisible });
        }, 1000);
    }

    render() {
        return (
            <div>
                <Nav className='nav'>
                    <ul className='navbar'>
                        <li className='navbar_title'><Link className='navbar_link' to='/'><font face="fantasy">Home</font></Link></li>
                        <li className='navbar_title'><Link className='navbar_link' to='/about'><font face="fantasy">about</font></Link></li>
                        <li className='navbar_title'><Link className='navbar_link' to='/work'><font face="fantasy">Work</font></Link></li>
                        <li className='navbar_title'><Link className='navbar_link' to='/contact'><font face="fantasy">contact</font></Link></li>
                    </ul>
                </Nav>
            </div>
        )
    }

}
  
export default ToLink;