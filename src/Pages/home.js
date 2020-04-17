import React from 'react'
import '../assets/css/home.css'
import { Row, Col } from 'antd';
import freehost from '../assets/img/freehost.jpg'
import banner2 from '../assets/img/banner2.jpg'
import banner3 from '../assets/img/banner3.jpg'
import banner4 from '../assets/img/banner4.jpg'
import keys from '../assets/img/keys.png'
import ys4 from '../assets/img/ys4.png'
import ys1 from '../assets/img/ys1.png'
import ys2 from '../assets/img/ys2.png'
import ys3 from '../assets/img/ys3.png'
import ys5 from '../assets/img/ys5.png'
import ys6 from '../assets/img/ys6.png'
import case1 from '../assets/img/al1.jpg'
import case2 from '../assets/img/al2.jpg'
import case3 from '../assets/img/al3.jpg'
import case4 from '../assets/img/al4.jpg'
import case5 from '../assets/img/al5.jpg'
import case6 from '../assets/img/al6.jpg'
import case7 from '../assets/img/al7.jpg'
import case8 from '../assets/img/al8.jpg'
import case9 from '../assets/img/al9.jpg'
import case10 from '../assets/img/al10.jpg'
import case11 from '../assets/img/al11.jpg'
import case12 from '../assets/img/al12.jpg'
import {BrowserRouter as Router,Link, Route} from 'react-router-dom';
import $ from 'jquery'
export default class Home extends React.Component{
    constructor(props){
       super(props)
    }
    componentDidMount(){
        var arr=[freehost,banner2,banner3,banner4];
        var ord = 0;//代表当前图片的序号，从0开始。
        var myTimer = null;
         
        function  initUI() {
            $("#slider li:first").css({"backgroundColor":"red"});
        }
         
        function  initEvent() {
            $("#slider").mouseenter(function () {
                stopPlay();
            });
         
            $("#slider").mouseleave(function () {
                autoPlay();
            });
         
            $("#slider li").click(function () {
                goImg($("#slider li").index(this));
            });
         
            $("#leftArrow").click(function () {
                let transord =ord-1;
                transord = transord<0?arr.length-1:transord;
                goImg(transord);
            });
         
            $("#rightArrow").click(function () {
                let transord =ord+1;
                transord = transord>arr.length-1?0:transord;
                goImg(transord);
            });
        }
         
        //1、自动播放
        function autoPlay() {
            myTimer = setInterval(function () {
                //一、改变数据
                // 1、记录当前序号（淡出的图片序号）
                let outOrd = ord;
                //2、改变要显示的图片的序号（淡出图片序号加一）
                ord++;
                if(ord>arr.length-1){
                    ord=0;
                }
                //二、改变外观
                let $img = $("#slider img");
                //1、淡入淡出效果
                //让一张(outOrd)淡出 当前消失
                $img.eq(outOrd).animate({"opacity":0},2000);
                //让一张(ord)淡入下一张图片显示
                $img.eq(ord).animate({"opacity":1},2000);
                //2、改变豆豆的颜色；
                $("#slider li").eq(ord).css({"backgroundColor":"white"}).siblings().css({"backgroundColor":"rgb(44, 112, 238)"});
            },3000);
        }
         
        //2、停止播放
        function stopPlay() {
            window.clearInterval(myTimer);
        }
         
        //3、跳转到指定的图片
        function  goImg(transOrd) {
            //一、改变数据
            // 1、记录当前序号（淡出的图片序号）
            let outOrd = ord;
            //2、改变要显示的图片的序号（传入的图片序号）
            ord=transOrd;
            if(ord>arr.length-1){
                ord=0;
            }
            //二、改变外观
            let $img = $("#slider img");
            //1、淡入淡出效果
            //让一张(outOrd)淡出 当前消失
            $img.eq(outOrd).animate({"opacity":0},2000);
            //让一张(ord)淡入下一张图片显示
            $img.eq(ord).animate({"opacity":1},2000);
            //2、改变豆豆的颜色；
            $("#slider li").eq(ord).css({"backgroundColor":"white"}).siblings().css({"backgroundColor":"rgb(44, 112, 238)"});
        }
         
        $(function () {
            //1、初始化界面
            initUI();
            //2、绑定事件
            initEvent();
            //3、自动播放
            autoPlay();
        });
        $(function ()
          {
          　　$(".zhutui_tit li").mouseenter(function ()
          　　{
          　　　　//获取点击的元素给其添加样式，讲其兄弟元素的样式移除
          　　　　$(this).addClass("active").siblings().removeClass("active");
          　　　　//获取选中元素的下标
          　　　　var index = $(this).index();
          　　　　$(this).parent().siblings(".zhutui_content").children().eq(index).addClass("active")
          　　　　.siblings().removeClass("active");
          　　});
          });
    }
    render(){
        return(
           <div className="home">
             <div className="banner">
             <div className="slider" id="slider">
                    <a href="#"><img src={freehost} alt=""></img></a>
                    <a href="#"><img src={banner2} alt=""></img></a>
                    <a href="#"><img src={banner3} alt=""></img></a>
                    <a href="#"><img src={banner4} alt=""></img></a>
                    <ul id="btns">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div id="leftArrow">＜</div>
                    <div id="rightArrow">＞</div>
                </div>
             </div>
             <div className="yuming">
               <div className="ym_box">
                  <div className="ym_tit">
                    <img src={keys}></img>
                  </div>
                  <div className="www">www.</div>
                  <form className="form1" name="form1">
                    <div className="ym_form">
                      <div className="ym_input">
                        <input type="text" placeholder="请输入你想要注册的域名"></input>
                      </div>
                      <div className="ym_select">
                        <select name="ym">
                           <option value=".com">.com</option>
                           <option value=".com">.com</option>
                           <option value=".com">.com</option>
                           <option value=".com">.com</option>
                           <option value=".com">.com</option>
                        </select>
                      </div>
                      <div className="ym_btn">
                        <button>提交域名</button>
                      </div>
                    </div>
                    <div className="ym_price">.com <font><b>35</b></font>元/首年&nbsp;&nbsp;
                        <font>.top</font> 18元/首年&nbsp;&nbsp;<font>.xyz</font> 
                        18元/首年&nbsp;&nbsp;.cn 55元/首年&nbsp;&nbsp;.net 60元/首年&nbsp;&nbsp;.cc 55元/首年&nbsp;&nbsp;
                        .中国/.cn 320元/首年&nbsp;&nbsp;.hk 350元/首年&nbsp;&nbsp;.mobi 150元/首年&nbsp;&nbsp;.biz 200元/首年
                    </div>
                  </form>
               </div>
             </div>
             <div className="index_zhutui">
               <div className="index_zhutui-title">
                  <span>中华世纪网主推产品</span>
                  <div className="zhutui_tit">
                     <ul>
                         <li className="active"><Link to="/">企业云服务器</Link></li>
                         <li><Link to="/cloud">云服务器</Link></li>
                         <li><Link to="/host">云虚拟主机</Link></li>
                     </ul>
                     <div className="qingchu"></div>
                     <div className="zhutui_content">
                        <div className="zhutui_tab active" id="tab1">
                           <div className="item_list">
                              <div className="item_list_cont">
                                 <dl>
                                     <dt className="dt1">百度云香港服务器</dt>
                                     <dd>CPU：1核/内存：1G</dd>
                                     <dd>硬盘：40+20G/带宽：1M</dd>
                                     <dd>IP个数：独立IP 1 个</dd>
                                     <dd>系统：Win2008、2012</dd>
                                     <dd>百度香港机房</dd>
                                     <dd><a target="_blank" href="/news/381.html">提高配置的说明</a></dd>
                                     <dd><span className="gffwq_fu">原价月付：</span><span class="gffwq_yuan"><del>158</del></span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">月付：</span><span class="gffwq_yuan">140</span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">年付：</span><span class="gffwq_yuan">1400</span> <span class="gffwq_fu">元</span></dd>
                                 </dl>
                                 <div className="dinggou"><a href="">立即订购</a></div>
                              </div>
                           </div>
                           <div className="item_list">
                              <div className="item_list_cont">
                                 <dl>
                                     <dt className="dt1">百度云香港服务器</dt>
                                     <dd>CPU：1核/内存：1G</dd>
                                     <dd>硬盘：40+20G/带宽：1M</dd>
                                     <dd>IP个数：独立IP 1 个</dd>
                                     <dd>系统：Win2008、2012</dd>
                                     <dd>百度香港机房</dd>
                                     <dd><a target="_blank" href="/news/381.html">提高配置的说明</a></dd>
                                     <dd><span className="gffwq_fu">原价月付：</span><span class="gffwq_yuan"><del>158</del></span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">月付：</span><span class="gffwq_yuan">140</span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">年付：</span><span class="gffwq_yuan">1400</span> <span class="gffwq_fu">元</span></dd>
                                 </dl>
                                 <div className="dinggou"><a href="">立即订购</a></div>
                              </div>
                           </div>
                           <div className="item_list">
                              <div className="item_list_cont">
                                 <dl>
                                     <dt className="dt1">百度云香港服务器</dt>
                                     <dd>CPU：1核/内存：1G</dd>
                                     <dd>硬盘：40+20G/带宽：1M</dd>
                                     <dd>IP个数：独立IP 1 个</dd>
                                     <dd>系统：Win2008、2012</dd>
                                     <dd>百度香港机房</dd>
                                     <dd><a target="_blank" href="/news/381.html">提高配置的说明</a></dd>
                                     <dd><span className="gffwq_fu">原价月付：</span><span class="gffwq_yuan"><del>158</del></span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">月付：</span><span class="gffwq_yuan">140</span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">年付：</span><span class="gffwq_yuan">1400</span> <span class="gffwq_fu">元</span></dd>
                                 </dl>
                                 <div className="dinggou"><a href="">立即订购</a></div>
                              </div>
                           </div>
                           <div className="item_list">
                              <div className="item_list_cont">
                                 <dl>
                                     <dt className="dt1">百度云香港服务器</dt>
                                     <dd>CPU：1核/内存：1G</dd>
                                     <dd>硬盘：40+20G/带宽：1M</dd>
                                     <dd>IP个数：独立IP 1 个</dd>
                                     <dd>系统：Win2008、2012</dd>
                                     <dd>百度香港机房</dd>
                                     <dd><a target="_blank" href="/news/381.html">提高配置的说明</a></dd>
                                     <dd><span className="gffwq_fu">原价月付：</span><span class="gffwq_yuan"><del>158</del></span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">月付：</span><span class="gffwq_yuan">140</span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">年付：</span><span class="gffwq_yuan">1400</span> <span class="gffwq_fu">元</span></dd>
                                 </dl>
                                 <div className="dinggou"><a href="">立即订购</a></div>
                              </div>
                           </div>
                        </div>
                        <div className="zhutui_tab" id="tab2">
                           <div className="item_list">
                              <div className="item_list_cont">
                                 <dl>
                                     <dt className="dt1">香港经济型512M</dt>
                                     <dd>CPU：1核/内存：1G</dd>
                                     <dd>硬盘：40+20G/带宽：1M</dd>
                                     <dd>IP个数：独立IP 1 个</dd>
                                     <dd>系统：Win2008、2012</dd>
                                     <dd>百度香港机房</dd>
                                     <dd><a target="_blank" href="/news/381.html">提高配置的说明</a></dd>
                                     <dd><span className="gffwq_fu">原价月付：</span><span class="gffwq_yuan"><del>158</del></span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">月付：</span><span class="gffwq_yuan">140</span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">年付：</span><span class="gffwq_yuan">1400</span> <span class="gffwq_fu">元</span></dd>
                                 </dl>
                                 <div className="dinggou"><a href="">立即订购</a></div>
                              </div>
                           </div>
                           <div className="item_list">
                              <div className="item_list_cont">
                                 <dl>
                                     <dt className="dt1">香港经济型1G</dt>
                                     <dd>CPU：1核/内存：1G</dd>
                                     <dd>硬盘：40+20G/带宽：1M</dd>
                                     <dd>IP个数：独立IP 1 个</dd>
                                     <dd>系统：Win2008、2012</dd>
                                     <dd>百度香港机房</dd>
                                     <dd><a target="_blank" href="/news/381.html">提高配置的说明</a></dd>
                                     <dd><span className="gffwq_fu">原价月付：</span><span class="gffwq_yuan"><del>158</del></span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">月付：</span><span class="gffwq_yuan">140</span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">年付：</span><span class="gffwq_yuan">1400</span> <span class="gffwq_fu">元</span></dd>
                                 </dl>
                                 <div className="dinggou"><a href="">立即订购</a></div>
                              </div>
                           </div>
                           <div className="item_list">
                              <div className="item_list_cont">
                                 <dl>
                                     <dt className="dt1">香港经济型2G</dt>
                                     <dd>CPU：1核/内存：1G</dd>
                                     <dd>硬盘：40+20G/带宽：1M</dd>
                                     <dd>IP个数：独立IP 1 个</dd>
                                     <dd>系统：Win2008、2012</dd>
                                     <dd>百度香港机房</dd>
                                     <dd><a target="_blank" href="/news/381.html">提高配置的说明</a></dd>
                                     <dd><span className="gffwq_fu">原价月付：</span><span class="gffwq_yuan"><del>158</del></span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">月付：</span><span class="gffwq_yuan">140</span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">年付：</span><span class="gffwq_yuan">1400</span> <span class="gffwq_fu">元</span></dd>
                                 </dl>
                                 <div className="dinggou"><a href="">立即订购</a></div>
                              </div>
                           </div>
                           <div className="item_list">
                              <div className="item_list_cont">
                                 <dl>
                                     <dt className="dt1">香港经济型4G</dt>
                                     <dd>CPU：1核/内存：1G</dd>
                                     <dd>硬盘：40+20G/带宽：1M</dd>
                                     <dd>IP个数：独立IP 1 个</dd>
                                     <dd>系统：Win2008、2012</dd>
                                     <dd>百度香港机房</dd>
                                     <dd><a target="_blank" href="/news/381.html">提高配置的说明</a></dd>
                                     <dd><span className="gffwq_fu">原价月付：</span><span class="gffwq_yuan"><del>158</del></span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">月付：</span><span class="gffwq_yuan">140</span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">年付：</span><span class="gffwq_yuan">1400</span> <span class="gffwq_fu">元</span></dd>
                                 </dl>
                                 <div className="dinggou"><a href="">立即订购</a></div>
                              </div>
                           </div>
                        </div>
                        <div className="zhutui_tab active" id="tab3">
                           <div className="item_list">
                              <div className="item_list_cont">
                                 <dl>
                                     <dt className="dt1">香港迷你</dt>
                                     <dd>CPU：1核/内存：1G</dd>
                                     <dd>硬盘：40+20G/带宽：1M</dd>
                                     <dd>IP个数：独立IP 1 个</dd>
                                     <dd>系统：Win2008、2012</dd>
                                     <dd>百度香港机房</dd>
                                     <dd><a target="_blank" href="/news/381.html">提高配置的说明</a></dd>
                                     <dd><span className="gffwq_fu">原价月付：</span><span class="gffwq_yuan"><del>158</del></span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">月付：</span><span class="gffwq_yuan">140</span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">年付：</span><span class="gffwq_yuan">1400</span> <span class="gffwq_fu">元</span></dd>
                                 </dl>
                                 <div className="dinggou"><a href="">立即订购</a></div>
                              </div>
                           </div>
                           <div className="item_list">
                              <div className="item_list_cont">
                                 <dl>
                                     <dt className="dt1">香港X5</dt>
                                     <dd>CPU：1核/内存：1G</dd>
                                     <dd>硬盘：40+20G/带宽：1M</dd>
                                     <dd>IP个数：独立IP 1 个</dd>
                                     <dd>系统：Win2008、2012</dd>
                                     <dd>百度香港机房</dd>
                                     <dd><a target="_blank" href="/news/381.html">提高配置的说明</a></dd>
                                     <dd><span className="gffwq_fu">原价月付：</span><span class="gffwq_yuan"><del>158</del></span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">月付：</span><span class="gffwq_yuan">140</span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">年付：</span><span class="gffwq_yuan">1400</span> <span class="gffwq_fu">元</span></dd>
                                 </dl>
                                 <div className="dinggou"><a href="">立即订购</a></div>
                              </div>
                           </div>
                           <div className="item_list">
                              <div className="item_list_cont">
                                 <dl>
                                     <dt className="dt1">香港X5</dt>
                                     <dd>CPU：1核/内存：1G</dd>
                                     <dd>硬盘：40+20G/带宽：1M</dd>
                                     <dd>IP个数：独立IP 1 个</dd>
                                     <dd>系统：Win2008、2012</dd>
                                     <dd>百度香港机房</dd>
                                     <dd><a target="_blank" href="/news/381.html">提高配置的说明</a></dd>
                                     <dd><span className="gffwq_fu">原价月付：</span><span class="gffwq_yuan"><del>158</del></span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">月付：</span><span class="gffwq_yuan">140</span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">年付：</span><span class="gffwq_yuan">1400</span> <span class="gffwq_fu">元</span></dd>
                                 </dl>
                                 <div className="dinggou"><a href="">立即订购</a></div>
                              </div>
                           </div>
                           <div className="item_list">
                              <div className="item_list_cont">
                                 <dl>
                                     <dt className="dt1">香港X10</dt>
                                     <dd>CPU：1核/内存：1G</dd>
                                     <dd>硬盘：40+20G/带宽：1M</dd>
                                     <dd>IP个数：独立IP 1 个</dd>
                                     <dd>系统：Win2008、2012</dd>
                                     <dd>百度香港机房</dd>
                                     <dd><a target="_blank" href="/news/381.html">提高配置的说明</a></dd>
                                     <dd><span className="gffwq_fu">原价月付：</span><span class="gffwq_yuan"><del>158</del></span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">月付：</span><span class="gffwq_yuan">140</span> <span class="gffwq_fu">元</span></dd>
                                     <dd><span className="gffwq_fu">年付：</span><span class="gffwq_yuan">1400</span> <span class="gffwq_fu">元</span></dd>
                                 </dl>
                                 <div className="dinggou"><a href="">立即订购</a></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
             </div>
             <div className="index_youshi">
                <div className="youshi_tit">
                <span>选择中华世纪网的优势</span><br></br>
                 中华世纪网15年网络运维经验，提供全年24小时无休技术在线支持服务。
    
                </div>
                <div className="youshi_list">
                   <div className="list-l">
                      <div className="list-l-pic"><img src={ys4}></img></div>
                      <span className="list_l_t">云计算技术</span>
                      <br></br>企业级云计算平台，基于虚拟数据中心技术，以更高性能、更快交付、更低成本重定义云时代的网络、存储和安全
                   </div>
                   <div className="list-r">
                      <div className="list-r-pic"><img src={ys1}></img></div>
                      <span className="list_r_t">负载均衡</span>
                      <br></br>集合多台主机的服务能力，可以随时实现水平扩展、系统扩容，增加对外业务服务能力，有效避免单点故障。
                   </div>
                   <div className="list-l">
                      <div className="list-l-pic"><img src={ys2}></img></div>
                      <span className="list_l_t">服务器性能监控</span>
                      <br></br>监控服务器CPU、内存、硬盘等使用情况和性能，可根据客户要求提供最近一月历史报告。
                   </div>
                   <div className="list-r">
                      <div className="list-r-pic"><img src={ys3}></img></div>
                      <span className="list_r_t">流量监控</span>
                      <br></br>为客户提供实时、历史流量监控服务，以便客户对业务应用使用带宽进行分析
                   </div>
                   <div className="list-l">
                      <div className="list-l-pic"><img src={ys5}></img></div>
                      <span className="list_l_t">服务器安全检测</span>
                      <br></br>为客户服务器提供入侵检测与防护、漏洞扫描、流量清洗、病毒防范、系统加固、安全管理服务、数据存储备份等
                   </div>
                   <div className="list-r">
                      <div className="list-r-pic"><img src={ys6}></img></div>
                      <span className="list_r_t">专属工程师服务</span>
                      <br></br>由专属工程师负责跟进和处理故障，并对故障进行分析和总结。7×24小时专业工程师，全天守候。
                   </div>
                   <div className="qingchu"></div>
                </div>
             </div>
             <div className="index_case">
                 <div className="case_tit">我们的典型客户案例</div>
                 <div className="case_list">
                    <ul>
                        <li><a href="#"><img src={case1}></img></a></li>
                        <li><a href="#"><img src={case2}></img></a></li>
                        <li><a href="#"><img src={case3}></img></a></li>
                        <li><a href="#"><img src={case4}></img></a></li>
                        <li><a href="#"><img src={case5}></img></a></li>
                        <li><a href="#"><img src={case6}></img></a></li>
                        <li><a href="#"><img src={case7}></img></a></li>
                        <li><a href="#"><img src={case8}></img></a></li>
                        <li><a href="#"><img src={case9}></img></a></li>
                        <li><a href="#"><img src={case10}></img></a></li>
                        <li><a href="#"><img src={case11}></img></a></li>
                        <li><a href="#"><img src={case12}></img></a></li>
                        
                    </ul>
                    <div className="qingchu"></div>
                 </div>
             </div>
             <div className="index_nh">
                <div className="index_nh_cont">
                   <div className="news">
                      <div className="news_tit">
                      新闻动态
                      <a href="#">更多>>></a>
                      </div>
                      <div className="news_list">
                        <ul>
                            <li><span>[2017/12/21 8:55:17]</span><a href="#">关于.xyz域名实名认证通知</a></li>
                            <li><span>[2017/12/15 19:03:49]</span><a href="#">关于国内X3X5X10主机域名备案的说明</a></li>
                            <li><span>[2017/12/16 9:00:22]</span><a href="#">全能免费空间在线实时开通</a></li>
                            <li><span>[2017/7/26 7:17:20]</span><a href="#">关于.com/.net存量域名实名的重要通知</a></li>
                            <li><span>[2017/7/26 7:14:01]</span><a href="#">热烈祝贺“.INFO”、“.MOBI”、“.RED”、...</a></li>
                        </ul>
                      </div>
                   </div>
                   <div className="news help">
                      <div className="news_tit">
                      帮助中心
                      <a href="#">更多>>></a>
                      </div>
                      <div className="news_list">
                        <ul>
                            <li><span>[2017/12/21 8:55:17]</span><a href="#">关于.xyz域名实名认证通知</a></li>
                            <li><span>[2017/12/15 19:03:49]</span><a href="#">关于国内X3X5X10主机域名备案的说明</a></li>
                            <li><span>[2017/12/16 9:00:22]</span><a href="#">全能免费空间在线实时开通</a></li>
                            <li><span>[2017/7/26 7:17:20]</span><a href="#">关于.com/.net存量域名实名的重要通知</a></li>
                            <li><span>[2017/7/26 7:14:01]</span><a href="#">热烈祝贺“.INFO”、“.MOBI”、“.RED”、...</a></li>
                        </ul>
                      </div>
                   </div>
                   <div className="qingchu"></div>
                </div>
             </div>
             {/* 友情链接开始 */}
             <div className="index_link">
                <div className="link_tit">
                   友情链接
                   <div className="xian"></div>
                </div>
                <div className="link_list">
                   <ul>
                       <li><a href="#">新网互联</a></li>
                       <li><a href="#">Enom</a></li>
                       <li><a href="#">商务中国</a></li>
                       <li><a href="#">新网数码</a></li>
                       <li><a href="#">阿里云</a></li>
                       <li><a href="#">北京电信</a></li>
                       <li><a href="#">香港新世界</a></li>
                       <li><a href="#">Take2host</a></li>
                       <li><a href="#">DNSPOD</a></li>
                       <li><a href="#">鲁迅网</a></li>
                       
                   </ul>
                   <div className="qingchu"></div>
                </div>
             </div>
           </div>
        )
    }
}