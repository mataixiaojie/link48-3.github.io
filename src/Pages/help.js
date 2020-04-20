import React from 'react'
import AboutCe from '../components/aboutCe'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'

import '../assets/css/about.css'
export default class Help extends React.Component{
    
    state={
        links:[
            {
                name:'one',
                children:[
                    {
                        name:'域名类',
                        path:''
                    },
                    {
                        name:'虚拟主机类',
                        path:''
                    },
                    {
                        name:'数据库类',
                        path:''
                    },
                    {
                        name:'云服务器类',
                        path:''
                    },
                ]
            },
            {
                name:'two',
                children:[
                    {
                        name:'网站类',
                        path:''
                    },
                    {
                        name:'邮局类',
                        path:''
                    },
                    {
                        name:'财务类',
                        path:''
                    },
                    {
                        name:'备案专题',
                        path:''
                    },
                ]
            }
        ],
        ceData:[
            {
                name:'关于我们',
                path:'/about'
            },
            {
                name:'代理加盟',
                path:'/about'
            },
            {
                name:'付款方式',
                path:'/about'
            },
            {
                name:'联系我们',
                path:'/about'
            },
            {
                name:'帮助中心',
                path:'/about/help'
            },
        ]
    }

    render(){
        const {links,ceData} = this.state
        return( 
            <div className='about'>
                <div style={{background:'#41a9fe'}}>
                    <div className="bread" style={{width:'1200px',background:'none',padding:0}}>
                    当前位置：<Link to="/">网站首页</Link>><Link to="/about/help">帮助中心</Link>
                    </div>
                </div>
                <div className='con'>
                    <AboutCe ceData={ceData} />
                    <div className='help'>
                        <h3>帮助中心</h3>
                        <div className='center'>
                            <ul>
                                {
                                    links.map((link,index)=>(
                                        <li key={index}>
                                            {
                                                link.children.map((item,index)=>(
                                                    <Link key={index} to={item.path}>{item.name}</Link>
                                                ))
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='search'>
                            <input type='text' placeholder='在这里搜索...' />
                            <button>搜索</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}