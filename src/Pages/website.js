import React from 'react'

import AboutCe from '../components/aboutCe'
import {Link} from 'react-router-dom'
import '../assets/css/website.css'
export default class Website extends React.Component{

    state={
        ceData:[
            {
                name:'鲜花、礼品、工艺品',
                path:''
            },
            {
                name:'食品、酒水、茶叶',
                path:''
            },
            {
                name:'农业、林业',
                path:''
            },
            {
                name:'机械、工业制品',
                path:''
            },
            {
                name:'电子、电气、电工',
                path:''
            },
            {
                name:'五金、门窗',
                path:''
            },
            {
                name:'照明、灯具、能源',
                path:''
            },
            {
                name:'汽车、汽配',
                path:''
            },
            {
                name:'安防、监控器材',
                path:''
            },
            {
                name:'印刷、包装',
                path:''
            },
            {
                name:'环保、废料回收',
                path:''
            },
            {
                name:'服装、鞋帽、皮具',
                path:''
            },
            {
                name:'珠宝、首饰、饰品',
                path:''
            },
            {
                name:'家居、家纺、百货',
                path:''
            },
        ]
    }

    render(){
        const {ceData} = this.state
        return(
            <div className='website'>
                <div className='banner'>
                    <img src={require('../assets/img/web_banner.jpg')} />
                </div>
                <div style={{background:'#41a9fe'}}>
                    <div className="bread" style={{width:'1200px',background:'none',padding:0}}>
                    当前位置：<Link to="/">网站首页</Link>><Link to="/website">网站建设</Link>
                    </div>
                </div>
                <div className='con'>
                    <AboutCe ceData={ceData} />
                    <div className='right'>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>198元/年</p>
                                        <p>建站入门型</p>
                                        <button>购买>>></button>
                                    </td>
                                    <td>
                                        <p>入门型网站就是用现有的2000多套样板任选一个的格式做网站，这样省去很多成本，所以用样板做网站就很便宜 ，自助添加图片和文字</p>
                                        <p>独立网页空间：100M</p>
                                        <p>独立数据库空间：20M</p>
                                        <p>模版：2000多套，任选一套</p>
                                        <p>时效：一个工作日内完成模版安装</p>
                                        <p>机房：香港（免备案）、北京（需要有备案号）</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>398元/年</p>
                                        <p>建站标准型</p>
                                        <button>购买>>></button>
                                    </td>
                                    <td>
                                        <p>标准型网站就是用现有的2000多套样板任选一个的格式做网站，这样省去很多成本，所以用样板做网站就很便宜 ，自助添加图片和文字 ，自助添加图片和文字</p>
                                        <p>独立网页空间：300M</p>
                                        <p>独立数据库空间：50M</p>
                                        <p>模版：2000多套，任选一套</p>
                                        <p>时效：一个工作日内完成模版安装</p>
                                        <p>机房：香港（免备案）、北京（需要有备案号）</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>980元/年</p>
                                        <p>建站高级型</p>
                                        <button>购买>>></button>
                                    </td>
                                    <td>
                                        <p>高级型网站就是用现有的2000多套样板任选一个的格式做网站，这样省去很多成本，所以用样板做网站就很便宜 ，自助添加图片和文字</p>
                                        <p>独立网页空间：500M</p>
                                        <p>独立数据库空间：50M</p>
                                        <p>模版：2000多套，任选一套</p>
                                        <p>时效：一个工作日内完成模版安装</p>
                                        <p>机房：香港（免备案）、北京（需要有备案号）</p>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        )
    }
}