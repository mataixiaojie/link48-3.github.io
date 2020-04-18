import React from 'react'
import '../assets/css/email.css'
import $ from 'jquery'
import { Layout } from 'antd';
import { Menu } from 'antd';
import { Table, Tag } from 'antd';
import email_2 from '../assets/img/email_2.jpg'
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu
export default class Email extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick = e => {
        console.log('click ', e);
    }

    render() {
        // const columns = [
        //     {
        //         title: '云邮',
        //         dataIndex: 'yunyou',
        //         key: 'yunyou',
        //         //   render: text => <a>{text}</a>,
        //     },
        //     {
        //         title: '价格:30元',
        //         dataIndex: 'jiage',
        //         key: 'jiage',
        //     },
        //     {
        //         title: '',
        //         dataIndex:'kon',
        //         key: 'kon',
        //     },
        // ];
        // const dataSource = [
        //     {
        //         key: '1',
        //         yunyou:"云邮",
        //         jiage:"云游定制版",
        //         kon:"现在付款开通",
        //         kon2:"实时在线开通"
        //     },

        // ];
        return (
            <div className="email">
                <div className="email_one">
                    <div className="email_two">
                        中华世纪网<br />
                        专业IDC服务商
                    </div>
                </div>
                <div className="email_three">
                    <div className="email_four">
                        <span>当前位置：</span>
                        <a href="/">网站首页</a>
                        <b>></b>
                        <a href="/">会员中心</a>
                        <b>></b>
                        <a href="/">其他产品</a>
                    </div>
                </div>
                <Layout className="email_five">
                    <Sider width="220px">
                        <Menu onClick={this.handleClick}
                            defaultSelectedKeys={['1']} defaultOpenKeys={['sub1', 'sub2']} mode="inline">
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>产品管理</span>
                                } popupClassName="email_submenu">
                                <Menu.Item key="1">域名管理</Menu.Item>
                                <Menu.Item key="2">虚拟主机管理</Menu.Item>
                                <Menu.Item key="3">邮局管理</Menu.Item>
                                <Menu.Item key="4">数据库管理</Menu.Item>
                                <Menu.Item key="5">云主机管理</Menu.Item>
                                <Menu.Item key="6">服务器托管租用</Menu.Item>
                                <Menu.Item key="7">其他产品管理</Menu.Item>
                                <Menu.Item key="8">价格预览</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>用户资料</span>
                                }>
                                <Menu.Item key="9">我的信息</Menu.Item>
                                <Menu.Item key="10">修改资料</Menu.Item>
                                <Menu.Item key="11">财务记录</Menu.Item>
                                <Menu.Item key="12">发票申请</Menu.Item>
                                <Menu.Item key="13">有问必答</Menu.Item>
                                <Menu.Item key="14">在线充值</Menu.Item>
                                <Menu.Item key="15">安全退出</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>购买产品</span>
                                }>
                                <Menu.Item key="16">域名注册</Menu.Item>
                                <Menu.Item key="17">开通虚拟主机</Menu.Item>
                                <Menu.Item key="18">开通邮箱</Menu.Item>
                                <Menu.Item key="19">开通数据库</Menu.Item>
                                <Menu.Item key="20">购买云服务器</Menu.Item>
                                <Menu.Item key="21">服务器托管租用</Menu.Item>
                                <Menu.Item key="22">开通其他类产品</Menu.Item>
                            </SubMenu>

                        </Menu>
                    </Sider>
                    <Content>
                        <div className="email_siven">
                            <br/>
                            <br/>
                            <table style={{ width: "100%", height: "122px", border: "0px", cellSpacing: "0px", bgColor: "#ccc" }} className="email_eight">
                                <tbody>
                                    <tr>
                                        <td style={{ width: "35%",background:"#fafafa"}} rowSpan="2">
                                            <strong>
                                                <font size="3">云邮</font>
                                            </strong>
                                        </td>
                                        <td style={{ width: "49%", height: "34", align: "center", backgroundColor: "#eee" }}>
                                            价格30元
                                        </td>
                                        <td style={{ width: "16%", align: "center", backgroundColor: "#eee" }}></td>
                                    </tr>
                                    <tr>
                                        <td style={{ height: "85px", backgroundColor: "#fff" }}>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                    <tr>
                                                        <th width="4%" scope="col">　</th>
                                                        <td width="92%" align="left" scope="col" className="email_nine">云邮定制版</td>
                                                        <th width="4%" scope="col">　</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td style={{width:"16%",align:"center",backgroundColor:"fafafa"}}>
                                            <p>
                                                <a href="/">
                                                    <font color="#006600">现在付款开通</font>
                                                </a>
                                            </p>
                                            <p>
                                                <a href="/">
                                                    <font color="#000000">实时在线开通</font>
                                                </a> 
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Content>

                </Layout>
            </div>
        )
    }
}