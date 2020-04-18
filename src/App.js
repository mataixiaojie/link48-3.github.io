import React from 'react'
import Home from './Pages/home'
import './App.css'
import logo from './assets/img/logo.png'
import kf from './assets/img/kf.png'
import gongan from './assets/img/gongan.png'
import aa from './assets/img/hd315.gif'
import bb from './assets/img/xinyongpinganlogo.png'
import { Row, Col } from 'antd';
import $ from 'jquery'
import {BrowserRouter as Router,Link, Route} from 'react-router-dom';
import Agent from './Pages/Agent/agent'
import Netpay from './Pages/netpay'
import Email from './Pages/email'
export default class App extends React.Component{
    constructor(props){
       super(props)
    }
    componentDidMount(){
      $(function(){
        $(".yjcd li").mouseenter(function(){
          $(this).children(".ejcd").slideDown(500)
        })
        $(".yjcd li").mouseleave(function(){
          $(this).children(".ejcd").slideUp(500)
        })
      })
    }
    render(){
        return(
          <Router>
            <div>
           <div className="nav">
             <Row>
               <Col span={24}>
                  <div className="topnav">
                     <div className="topnav_box">
                        <div className="topnav1"><font size="2">客服热线： &nbsp;&nbsp;186 0066 0491</font></div>
                        <div className="topnav2">
                           <Link to="/register">注册会员</Link>
                           <Link to="/user">会员登录</Link>
                           <Link to="/agent">代理登录</Link>
                           <Link to="/help">帮助中心</Link>
                           <Link to="/netpay">付款中心</Link>
                           <Link to="/lianxiwomen">联系我们</Link>
                        </div>
                        
                     </div>
                  </div>
                  <div className="header">
                     <div className="header_box">
                       <div className="logo">
                         <Link to="/"><img src={logo}></img></Link>
                         <a href="#" className="aa"><img src={kf}></img></a>
                       </div>
                       <div className="h-nav">
                          <ul className="yjcd">
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/domain">域名注册</Link>
                                 <ul className="ejcd">
                                  <li><Link to="/">英文域名</Link></li>
                                  <li><Link to="/">中文域名</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/host">虚拟手机</Link>
                                <ul className="ejcd">
                                  <li><Link to="/">国内主机</Link></li>
                                  <li><Link to="/">香港主机</Link></li>
                                  <li><Link to="/">日本主机</Link></li>
                                  <li><Link to="/">香港主机</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/cloud">云服务器</Link>
                                <ul className="ejcd">
                                  <li><Link to="/">国内服务器</Link></li>
                                  <li><Link to="/">香港服务器</Link></li>
                                  <li><Link to="/">美国服务器</Link></li>
                                  <li><Link to="/">俄罗斯服务器</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/website">网站建设</Link>
                                <ul className="ejcd">
                                  <li><Link to="/">2000多套模板</Link></li>
                                  <li><Link to="/">专业建站500起</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/email">企业邮局</Link></li>
                            <li><Link to="/hostmore" className="free">免费空间</Link></li>
                          </ul>
                       </div>
                     </div>
                  </div>
               </Col>
             </Row>
           </div>
           <div className="show">
                <Route path="/" exact component={Home}></Route>
                                     
           </div>
           <Route path="/agent" component={Agent}></Route>
           <Route path="/netpay" component={Netpay}></Route>
           <Route path="/email" component={Email}></Route>   
           <div className="footer">
             <div className="foot-cont">
                <div className="foot-cont-list">
                  <dl>
                    <dt>关于我们</dt>
                    <dd><a href="#">公司简介</a></dd>
                    <dd><a href="#">公司资质</a></dd>
                    <dd><a href="#">联系我们</a></dd>
                    <dd><a href="#">代理加盟</a></dd>
                    <dd><a href="#">法律法规</a></dd>
                  </dl>
                </div>
                <div className="foot-cont-list">
                  <dl>
                    <dt>产品中心</dt>
                    <dd><a href="#">网站建设</a></dd>
                    <dd><a href="#">云服务器</a></dd>
                    <dd><a href="#">虚拟主机</a></dd>
                    <dd><a href="#">域名注册</a></dd>
                    <dd><a href="#">管理面板</a></dd>
                  </dl>
                </div>
                <div className="foot-cont-list">
                  <dl>
                    <dt>支付方式</dt>
                    <dd><a href="#">付款方式</a></dd>
                    <dd><a href="#">在线付款</a></dd>
                    <dd><a href="#">银行汇款</a></dd>
                    <dd><a href="#">申请发票</a></dd>
                  </dl>
                </div>
                <div className="foot-cont-list">
                  <dl>
                    <dt>服务支持</dt>
                    <dd><a href="#">会员中心</a></dd>
                    <dd><a href="#">代理中心</a></dd>
                    <dd><a href="#">有问必答</a></dd>
                    <dd><a href="#">价格总览</a></dd>
                    <dd><a href="#">站内搜索</a></dd>
                  </dl>
                </div>
                <div className="foot-cont-list">
                  <dl>
                    <dt>相关帮助</dt>
                    <dd><a href="#">帮助中心</a></dd>
                    <dd><a href="#">公司公告</a></dd>
                    <dd><a href="#">联系我们</a></dd>
                    <dd><a href="#">资讯中心</a></dd>
                    <dd><a href="#">密码找回</a></dd>
                  </dl>
                </div>
                <div className="foot-cont-list-r">
                   公司名称：妙思经营中心（中华世纪网）<br></br>
                    公司地址：北京市海淀区温泉航材大道11-4号<br></br>
                   《中华人民共和国增值电信业务经营许可证》<br></br>
                   <a target="_blank" href="#" className="a1"><font color="#FFFFFF">京ICP证070633号</font></a>
                   <a target="_blank" href="#"><font color="#FFFFFF">京ICP备08012273号</font></a><br></br>
                   中国互联网络信息中心认证编号：010202008020100002<br></br>
                   公安局备案编号：<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802022212"><img border="0" src={gongan} className="gongan"></img><font color="#FFFFFF">京公网安备 11010802022212号</font></a>
                   公司营业执政号码：<a target="_blank" href="/default/c361.jpg"><font color="#FFFFFF">9111010877158629X0</font></a><br></br>
                   <b><font color="#ffff00">客服热线： 手机:186 0066 0491</font></b>
                </div> 
             </div>
           </div>
           <div className="bottom">
             <div className="bottom-cont">
               <div className="contl">
                 <a href="#"><img src={aa}></img></a>
                 <a href="#"><img src={bb}></img></a>
               </div>
               <div className="contr">
               Copyright 2004-2018 北京妙思科技有限公司 All Rights Reserved 中华世纪网 版权所有&nbsp;
               </div>
             </div>
           </div>
           </div>
           </Router>
        )
    }
}