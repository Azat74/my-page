import React from 'react'

export default function AboutPage(props) {
    return <div className='container current'>
        <div className='person'>
            <div className='person__left-side'>
                <div className='img-container'>
                    <img src={require('../../assets/img/ava.png')}/>
                </div>
            </div>
            <div className='person__right-side'>
                <div className='about-me'>
                    <h2>Обо мне:</h2>
                    <div class='about-me__description'>
                        Мне 27 лет, я работаю в интернет-агенстве верстальщиком.
                    </div>
                </div>
            </div>
        </div>
    </div>
}