import React from 'react'
import '../css/WhatWeDo.css';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const WhatWeDo = () => {
    return (
        <div className='conatinerWhatWeDo'>
            <p style={{ textAlign: 'center' }}>What We Do</p>
            <h1 className='dealingText' style={{ textAlign: 'center', fontWeight: 'bold', }}>We are dealing in.</h1>
            <div className='boxContainer d-lg-flex d-sm-block'>
                <div className='box1'>
                    <img width="116" height="99" src="https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/icon-1.png" class="attachment-full size-full wp-image-81" alt="">
                    </img>
                    <h5 class="elementor-image-box-title">CREATIVE DESIGN</h5>
                    <p class="elementor-image-box-description mt-4">We craft concepts, interiors, branding, and everything to realize your vision.</p>
                </div>
                <div className='box1'>
                    <img width="116" height="99" src="https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/icon-2.png" class="attachment-full size-full wp-image-80" alt="">
                    </img>
                    <h5 class="elementor-image-box-title">FABRICATION</h5>
                    <p class="elementor-image-box-description mt-4">We bring designs to life with in-house fabrication and precision.</p>
                </div>
                <div className='box1'>
                    <img width="116" height="99" src="https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/icon-3.png" class="attachment-full size-full wp-image-79" alt="">
                    </img>
                    <h5 class="elementor-image-box-title">BUILD</h5>
                    <p class="elementor-image-box-description mt-4">We’re licensed GCs with expert PMs ensuring seamless design execution.</p>
                </div>
            </div>

            <div className='completeProjectContainer'>
                <p style={{ textAlign: 'center', }}>How we complete you project?</p>
                <h1 className='dealingText' style={{ textAlign: 'center', fontWeight: 'bold', }}>We do all this for you.</h1>

                <div className='d-lg-flex d-sm-block justify-content-around p-4'>
                    <div className='box1 mt-5'>
                        <img src="https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-2.png" class="imageBox" alt="">
                        </img>
                        <h5 class="mt-4">Creative Design</h5>
                    </div>
                    <div className='box1 mt-5'>
                        <img src="https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-3.png" class="imageBox" alt="">
                        </img>
                        <h5 class="mt-4">Development</h5>
                    </div>
                    <div className='box1 mt-5'>
                        <img src="https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-4.png" class="imageBox" alt="">
                        </img>
                        <h5 class="mt-4">Complete the project</h5>
                    </div>
                </div>
            </div>
            <div className='completeProjectContainer1  d-lg-flex d-sm-block  justify-content-between'>
                <div className=' align-content-sm-center align-items-sm-center pe-5'>
                    <p style={{}}>about us</p>
                    <h1 className='dealingText' style={{ fontWeight: 'bold', }}>Where Ideas Come to Life</h1>
                    <p style={{ marginTop: 30, textAlign: "initial" }}>At EZ, we believe creativity knows no bounds. As a cutting-edge design, build, and fabrication studio, we specialize in turning ambitious ideas into extraordinary realities.</p>
                    <p style={{ marginTop: 30, textAlign: "initial" }}>With a passion for innovation and a commitment to craftsmanship, our team brings together diverse expertise in design, engineering, and fabrication to create unique solutions tailored to your vision.</p>
                    <Button className="btn-small12">
                        Contact Us
                    </Button>
                </div>
                <div>
                    <img src="https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-5.png" class="bigImage" alt="">
                    </img>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo