import React from 'react'
import Form from './form'
import '../assets/css/register.css'
import $ from 'jquery'
import {BrowserRouter as Router,Link, Route} from 'react-router-dom';
import { FILE } from 'dns';
export default class Register extends React.Component{
    constructor(props){
       super(props)
    }
   componentDidMount(){
       $(function(){
           $(".l-list h3").click(function(){
               if($(this).next("ul").attr("data-title")=="1"){
                  $(this).next("ul").slideDown(500);
                  $(this).next("ul").attr("data-title","0")
               }else{
                $(this).next("ul").slideUp(500);
                $(this).next("ul").attr("data-title","1")
               }
           })
       })
   }
    render(){
        return(
           <div className="register">
              <div className="bread">
                 当前位置：<Link to="/">网站首页</Link>><Link to="/user">会员中心</Link>><Link to="/register">用户注册</Link>
                 
              </div>
              <div className="content">
                    <div className="left">
                       <div className="l-list">
                         <h3>产品管理</h3>
                         <ul>
                             <li><Link to="">域名管理</Link></li>
                             <li><Link to="">虚拟主机管理</Link></li>
                             <li><Link to="">数据库管理</Link></li>
                             <li><Link to="">云主机管理</Link></li>
                             <li><Link to="">企业安全云管理</Link></li>
                             <li><Link to="">其他产品管理</Link></li>
                             <li><Link to="">价格管理</Link></li>
                         </ul>
                       </div>
                       <div className="l-list">
                         <h3>用户资料</h3>
                         <ul>
                             <li><Link to="">我的信息</Link></li>
                             <li><Link to="">修改资料</Link></li>
                             <li><Link to="">财务记录</Link></li>
                             <li><Link to="">发票申请</Link></li>
                             <li><Link to="">提交工单</Link></li>
                             <li><Link to="">在线充值</Link></li>
                             <li><Link to="">安全退出</Link></li>
                         </ul>
                       </div>
                       <div className="l-list">
                         <h3>购买产品</h3>
                         <ul>
                             <li><Link to="">域名注册</Link></li>
                             <li><Link to="">开通虚拟主机</Link></li>
                             <li><Link to="">购买云服务器</Link></li>
                             <li><Link to="">开通企业邮局</Link></li>
                             
                         </ul>
                       </div>
                    </div>
                    <div className="right">
                       <div className="tables" id="table">
                         <div className="info">
                          <Form></Form>
                          </div>
                       </div>
                    </div>
                    <div className="qingchu"></div>
              </div>
             
           </div>
        )
    }
}