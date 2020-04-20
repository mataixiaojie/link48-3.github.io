import React from 'react'
import {Link} from 'react-router-dom'

import '../assets/css/aboutCe.css'
export default class AboutCe extends React.Component{
    

    render(){
        const {ceData} = this.props
        return(
            <div className='aboutCe'>
                <div className="l-list">
                    <ul>
                        {
                            ceData.map(
                                (link,index)=>(
                                    <li key={index}>
                                        <Link to={link.path} >{link.name}</Link>
                                    </li>
                                )
                            )
                        }

                    </ul>
                </div>
            </div>
        )
    }
}