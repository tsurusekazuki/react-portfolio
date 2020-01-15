import React from 'react';
import '../css/Work.css'
import WorkSkill from './WorkSkill';

class Work extends React.Component {
    render() {
        return (
            <div className='work_wrapper'>
                <h1 className='work_title'>Work</h1>
                <WorkSkill />
            </div>
        )
    }
}

export default Work;