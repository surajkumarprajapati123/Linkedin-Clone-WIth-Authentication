import React from 'react'
import "../Styles/widget.css"
import InfoIcon from '@material-ui/icons/Info'

function Widget() {
  return (
    <div className='widget'>
            <div className="widget__top">
                <div className="widget__header">
                    <h4>Linked News</h4>
                    <InfoIcon />
                </div>
                <div className="widget__body">
                    <ul  className="widget__options">
                        <li> 
                        <h4>Slaying job SEarch Fees</h4>
                        <p>6d ago * 4,55 readers</p>
                        </li>
                        
                        <li> 
                        <h4>twajkak  dknan fdskj</h4>
                        <p>6d ago * 4,55 readers</p>
                        </li>

                        <li> 
                        <h4>twajkak  dknan fdskj</h4>
                        <p>6d ago * 4,55 readers</p>
                        </li>

                        <li> 
                        <h4>twajkak  dknan fdskj</h4>
                        <p>6d ago * 4,55 readers</p>
                        </li>


                    </ul>
                </div>
            </div>
            <div className="widget__bottom">
                <div className="widget__header">
                    <h4>kladhad</h4>
                    <InfoIcon/>
                </div>
                <div className="widget__body">
                    <ul className="widget__options">
                        <li>
                            <h4>Leading with a Heacy Heat</h4>
                            <p>Kay Coly</p>
                        </li>
                        <li>
                            <h4>Leading with a Heacy Heat</h4>
                            <p>Kay Coly</p>
                        </li>
                        <li>
                            <h4>Leading with a Heacy Heat</h4>
                            <p>Kay Coly</p>
                        </li>
                        <li>
                            <h4>Leading with a Heacy Heat</h4>
                            <p>Kay Coly</p>
                        </li>

                    </ul>
                </div>
            </div>

      
    </div>
  )
}

export default Widget
