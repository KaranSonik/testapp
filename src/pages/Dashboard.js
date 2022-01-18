import React from 'react'
import { Link } from 'react-router-dom'
import * as reactIc from 'react-icons/fa'
import Results from '../components/results/Results'
import Time from '../components/time/Time'
import './dashboard.scss'
import codingSvg from '../assets/codingIllust.svg'
import {coursesData} from '../data/coursesData'

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='dashWrap'>
                <div className='title'>
                    <h4>Dashboard</h4>
                    <div className='dateSc'>
                        <h5>20 Sep 2019, Friday</h5>
                        <div className='searchIc'> 
                            <reactIc.FaSearch/>
                        </div>
                    </div>
                </div>
                <div className='heroSection'>
                    <div className='notifBanner'>

                        <div className='banner_left'>
                            <h5>Welcome back Anna!</h5>
                            <p>Lorem ipsum ...</p>
                        </div>
                        <div className='banner_right'>
                            <img src={codingSvg} alt='codingsvg' height='auto' width='auto' />
                        </div>
                    </div>
                </div>
                <div className='midComponents'>
                    <Results/>
                    <Time/>

                </div>

                <div className='courses'> 

                    <ul>
                    {coursesData.map((i, index) => 
                    {
                        return(
                            <li key={index} className={i.cName}>
                                <Link to={i.path} id={'course--' + index}>
                                    <div className='coursesLeft'>
                                        <h4>{i.level}</h4>
                                    </div>
                                    <div className='coursesRight'>
                                        <h5>{i.subtitle}</h5>
                                        <h3>{i.title}</h3>
                                    </div>
                                    <div className='arrowRight'><reactIc.FaArrowRight/></div>
                                </Link>
                            </li>
                        )
                    })}
                    </ul>

                </div>

                
            </div>
        </div> 
    )
}

export default Dashboard
