import React from 'react'
import * as fiReactIcon from 'react-icons/fi'
import './panel.scss'
function Panel() {
    return (
        <div className='panel'>
            <div className='panelWrapper'>
                <div className='panelAcc'>
                {/* Since there is no auth intitialized..  */}
                    <h4>Logout</h4>
                    <fiReactIcon.FiLogOut/>
                </div>
            </div>
        </div>
    )
}

export default Panel
