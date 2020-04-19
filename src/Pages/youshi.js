import React, { Component } from 'react';
import './../assets/css/youshi.css';
import ys4 from '../assets/img/ys4.png';
import ys1 from '../assets/img/ys1.png';
import ys2 from '../assets/img/ys2.png';
import ys3 from '../assets/img/ys3.png';
import ys5 from '../assets/img/ys5.png';
import ys6 from '../assets/img/ys6.png';
 
class Youshi extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
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
        );
    }
}
 
export default Youshi;
