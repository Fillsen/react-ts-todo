import React from 'react';
import {useHistory} from "react-router-dom";

const AboutPage: React.FC = () => {
    const history = useHistory()
    return <>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim expedita facere fuga iste iusto magnam
            maiores non quidem repellat.</p>
        <button className='btn' onClick={() => history.push('/')}>Go back</button>
    </>
};

export default AboutPage;
