import React from 'react';
import {Link} from 'react-router-dom';
import posed from 'react-pose';

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
        }, 2000);
    }

    render() {
        return (
            <div>
                <Nav className='nav' pose={this.state.isVisible ? 'visible' : 'hidden'}>
                    <ul className='navbar'>
                        <li className='navbar_title'><Link className='navbar_link' to='/'>Home</Link></li>
                        <li className='navbar_title'><Link className='navbar_link' to='/about'>About</Link></li>
                        <li className='navbar_title'><Link className='navbar_link' to='/work'>Work</Link></li>
                        <li className='navbar_title'><Link className='navbar_link' to='/contact'>Contact</Link></li>
                    </ul>
                </Nav>
            </div>
        )
    }

}
  
export default ToLink;