import React from 'react'
import '../css/ProjectsList.css';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectsList = () => {
    return (
        <div style={{ marginTop: 100 }} className='w-100 '>
            <div className='ProductListContainer'>
                <p style={{ textAlign: 'center', }}>How we complete you project?</p>
                <h1 className='dealingText' style={{ textAlign: 'center', fontWeight: 'bold', }}>We do all this for you.</h1>

            </div>

        </div>
    )
}

export default ProjectsList