import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../css/Contact.css'


class Contact extends React.Component {

    render() {

        let contact = [];

        let contacts = [
            {url: 'https://twitter.com/fassion60493867'},
            {url: 'https://www.facebook.com/kazukitsuruse'},
            {url: 'https://github.com/tsurusekazuki'}
        ];

        for (var i in contacts) {
            contact.push(contacts[i].url);
        }

        return (
            <div className='wrapper'>
                <h1 className='contact_title'>contact</h1>
                <div className='icon'>
                    <a href={contact[0]}>
                        <TwitterIcon style={{ fontSize: 100 }} />
                    </a>
                    <a href={contact[1]}>
                        <FacebookIcon style={{ fontSize: 100 }} />
                    </a>
                    <a href={contact[2]}>
                        <GitHubIcon style={{ fontSize: 100 }} />
                    </a>    
                </div>
            </div>
        )
    }
}

export default Contact;