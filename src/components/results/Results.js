import React from 'react'
import { Link } from 'react-router-dom';
import * as faReactIcons from 'react-icons/fa'
import './results.scss'
import { ResultsData } from './ResultsData'
import {ProgressBar} from 'react-bootstrap'

function Results() {
    return (
        <div className='results'>
            <div className='heading'>
                <h5>Latest results</h5>
                <p>More <faReactIcons.FaArrowRight/></p>
            </div>

            <ul>
            {ResultsData.map((i, index) => 
                    {
                        return(
                            <li key={index} className={i.cName}>
                                <Link to={i.path}>
                                    {i.icon}
                                    <span>{i.title}</span>
                                    <div className='progressBar'>
                                        <ProgressBar now={i.marks} />
                                        <span className='marks'>{i.marks}%</span>

                                    </div>
                                </Link>
                                <hr className='hrLine' id={'hrline' + index}/>
                            </li>
                        )
                    })}
            </ul>
            
        </div>
    )
}

export default Results
