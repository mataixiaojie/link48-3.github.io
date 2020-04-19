import React, { Component } from 'react';
import $ from 'jquery';
import './../assets/css/host.less';
import {Pagination} from 'antd';
import Youshi from './youshi';
class Host extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexList:[],//当前渲染的页面数据
            current: 1, //当前页码
            pageSize:4, //每页显示的条数
            total: 10,
            itemlist:[
                {
                    id:0,
                    listname: '香港迷你0',
                    listsize: 100,
                    listlanguage: '支持Html/Asp',
                    listdb: '不支持MySQL/MsSQL',
                    listcan: '可绑定域名 10 个',
                    listll: '2',
                    listchoose: '香港',
                    listfree:'免费体验10天',
                    listmoney: 60,                    
                },
                {
                    id:1,
                    listname: '香港迷你1',
                    listsize: 100,
                    listlanguage: '支持Html/Asp',
                    listdb: '不支持MySQL/MsSQL',
                    listcan: '可绑sdfsdf名 10 个',
                    listll: '2',
                    listchoose: '香港',
                    listfree:'免费体验10天',
                    listmoney: 234,                    
                },
                {
                    id:2,
                    listname: '香港迷你2',
                    listsize: 100,
                    listlanguage: '支持Html/Asp',
                    listdb: '不支持MySQL/MsSQL',
                    listcan: '可绑定域名 10 个',
                    listll: '2',
                    listchoose: '香港',
                    listfree:'免费体验10天',
                    listmoney: 879,                    
                },
                {
                    id:3,
                    listname: '香港迷你3',
                    listsize: 100,
                    listlanguage: '支持Html/Asp',
                    listdb: '不支持MySQL/MsSQL',
                    listcan: '可绑定域名 10 个',
                    listll: '2',
                    listchoose: '香港',
                    listfree:'免费体验10天',
                    listmoney: 3247,                    
                },
                {
                    id:4,
                    listname: '香港迷你4',
                    listsize: 100,
                    listlanguage: '支持Html/Asp',
                    listdb: '不支持MySQL/MsSQL',
                    listcan: '可绑定域名 10 个',
                    listll: '2',
                    listchoose: '香港',
                    listfree:'免费体验10天',
                    listmoney: 60,                    
                },
                {
                    id:5,
                    listname: '香港迷你5',
                    listsize: 100,
                    listlanguage: '支持Html/Asp',
                    listdb: '不支持MySQL/MsSQL',
                    listcan: '可绑定域名 10 个',
                    listll: '2',
                    listchoose: '香港',
                    listfree:'免费体验10天',
                    listmoney: 900,                    
                },
                {
                    id:6,
                    listname: '香港迷你6',
                    listsize: 100,
                    listlanguage: '支持Html/Asp',
                    listdb: '不支持MySQL/MsSQL',
                    listcan: '可绑定域名 10 个',
                    listll: '2',
                    listchoose: '香港',
                    listfree:'免费体验10天',
                    listmoney:860,                    
                },
                {
                    id:7,
                    listname: '香港迷你7',
                    listsize: 100,
                    listlanguage: '支持Html/Asp',
                    listdb: '不支持MySQL/MsSQL',
                    listcan: '可绑定域名 10 个',
                    listll: '2',
                    listchoose: '香港',
                    listfree:'免费体验10天',
                    listmoney:567,                    
                },
                {
                    id:8,
                    listname: '香港迷你8',
                    listsize: 100,
                    listlanguage: '支持Html/Asp',
                    listdb: '不支持MySQL/MsSQL',
                    listcan: '可绑定域名 10 个',
                    listll: '2',
                    listchoose: '香港',
                    listfree:'免费体验10天',
                    listmoney: 170,                    
                },
                {
                    id:9,
                    listname: '香港迷你9',
                    listsize: 100,
                    listlanguage: '支持Html/Asp',
                    listdb: '不支持MySQL/MsSQL',
                    listcan: '可绑定域名 10 个',
                    listll: '2',
                    listchoose: '香港',
                    listfree:'免费体验10天',
                    listmoney: 5460,                    
                },
                {
                    id:10,
                    listname: '香港迷你10',
                    listsize: 100,
                    listlanguage: '支持Html/Asp',
                    listdb: '不支持MySQL/MsSQL',
                    listcan: '可绑定域名 10 个',
                    listll: '2',
                    listchoose: '香港',
                    listfree:'免费体验10天',
                    listmoney: 780,                    
                }
                
            ]
        };
        this.onChange = this.onChange.bind(this)
    }
    onChange = (page) => {//页码和每页条数, pageSize
        // alert(page )
        // alert(pageSize)
        this.setState({
            current: page,
            indexList: this.state.itemlist.slice((page-1)*this.state.pageSize,page*this.state.pageSize)
        })
    }
    componentWillMount(){
        this.setState({
            indexList: this.state.itemlist.slice(0, this.state.pageSize)
        })
    }
    componentDidMount(){
        $(function(){
            let timer, num = 0, hasStarted = false;
            function showpic(index) {
                $(".pic li").eq(index).show().siblings().hide();
                //点到哪张哪张显示，其他的隐藏
                $(".dot li").eq(index).css("background","#0a0").siblings().css("background","#fff")
            }
            function start(){
                if(!hasStarted) {//如果定时器已经清除
                    hasStarted = true;
                    timer = setInterval(function(){
                        showpic(num);
                        num++;
                        // $(".pic li").size()
                        if(num == 4){
                            num = 0;
                        }
                    },2000)
                }
            }
            function stop() {
                //清除定时器
                clearInterval(timer);
                hasStarted = false;
            }
            $(".host-banner .arrow-left").click(function(){
                stop();//清除自动滚动
                --num;
                // num = num % $(".pic li").size();
                num = num % 4;
                showpic(num);
            })
            $(".host-banner .arrow-right").click(function(){
                // alert(1)
                stop();//清除自动滚动
                ++num;
                num = num % 4;
                showpic(num);
            })
            $(".dot li").hover(function () {
                stop();
                num = $(this).index();
                $(".pic li").eq(num).show().siblings().hide();
                $(this).css("background", "#0a0").siblings().css("background", "#fff");
            }, start);
            $(".pic li").each(function (index) {
                $(this).hover(function () {
                    stop();
                    showpic(index);
                    num = index + 1;
                }, start)
            });
            start();
        })
    }
    render() { 
        return (
            <div className="host">
                {/* 主机轮播图部分 */}
                <div className="host-banner">
                    <div className="pic">
                        <ul className="img">
                            <li>
                                <a href="#">
                                    <span className="bannerSpan img1"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="bannerSpan img2"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="bannerSpan img3"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="bannerSpan img4"></span>
                                </a>
                            </li>
                        </ul>
                        <div className="arrow">
                            <div className="arrow-left">&lt;</div>
                            <div className="arrow-right">&gt;</div>
                        </div>
                    </div>
                    <div className="dot">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                {/* 主机列表部分 */}
                <div className="host-con">
                    <div className="host-list-name">
                        <div className="item-name item-name-important">
                            <a href="/host/host0.html">免费空间</a>
                        </div>
                        <div className="item-name">
                            <a href="/host/host0.html">国内主机</a>
                        </div>
                        <div className="item-name">
                            <a href="/host/host0.html">备案主机</a>
                        </div>
                        <div className="item-name">
                            <a href="/host/host0.html">香港主机</a>
                        </div>
                        <div className="item-name">
                            <a href="/host/host0.html">美国主机</a>
                        </div>
                        <div className="item-name">
                            <a href="/host/host0.html">日本主机</a>
                        </div>
                        <div className="item-name">
                            <a href="/host/host0.html">新加坡主机</a>
                        </div>
                        <div className="item-name">
                            <a href="/host/host0.html">俄罗斯主机</a>
                        </div>
                    </div>
                    <div className="host-list">
                        {this.state.indexList && this.state.indexList.map((value, index) =>
                            <div className="host-list-item" key={value.id}>
                                <div className="list-head">                          
                                    {value.listname}
                                </div>
                                <div className="comlist col">网站空间：{value.listsize}M</div>
                                <div className="comlist">语言：{value.listlanguage}</div>
                                <div className="comlist">数据库：{value.listdb}</div>
                                <div className="comlist">{value.listcan}</div>
                                <div className="comlist">网络流量{value.listll}G/月</div>
                                <div className="comlist">可选机房：{value.listchoose}</div>
                                <div className="comlist col bold">{value.listfree}</div>
                                <div className="comlist last">年付：<span className="color bold">{value.listmoney}</span> 元</div>
                                <div className="caozuo">
                                    <span className="buy bg">购买</span>
                                    <span className="detail bg">详情</span>
                                </div>
                            </div>)
                            }                        
                    </div>
                    <div className="fenye">
                        <Pagination onChange={this.onChange} current={this.state.current} total={this.state.total} pageSize={this.state.pageSize}/>
                    </div>
                </div>
                {/* 优势部分 */}
                <Youshi />
            </div>
        );
    }
}
 
export default Host;
