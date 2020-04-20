import React from 'react'

import '../assets/css/cloud.css'
export default class Cloud extends React.Component{
    render(){
        return(
            <div className='cloud'>
                <div className='banner'>
                    <img src={require('../assets/img/yun_banner.jpg')} />
                </div>
                <div className='fenlei'>
                    <div>
                        <span>香港云服务器</span>
                        <span>香港5IP站群服务器</span>
                        <span>企业云服务器</span>
                        <span>北京云服务器</span>
                        <span>美国云服务器</span>
                        <span>新加坡云服务器</span>
                    </div>
                </div>
                <div className='cloud_list'>
                    <div className='con'>
                        <ul>
                            <li>
                                <h1>香港经济型512M</h1>
                                <span>CPU：双核</span>
                                <span>内存：512M</span>
                                <span>cpu:双核</span>
                                <span>硬盘：50+30G</span>
                                <span>带宽：2M</span>
                                <span>IP个数：独立IP 1 个</span>
                                <span>备案：无需备案</span>
                                <span>线路：香港新世界机房</span>
                                <span className='change'>月付：<span>59</span>元</span>
                                <span className='change'> 年付：<span>590</span> 元</span>
                                <button>立即订购</button>
                            </li>
                            <li>
                                <h1>香港经济型512M</h1>
                                <span>CPU：双核</span>
                                <span>内存：512M</span>
                                <span>cpu:双核</span>
                                <span>硬盘：50+30G</span>
                                <span>带宽：2M</span>
                                <span>IP个数：独立IP 1 个</span>
                                <span>备案：无需备案</span>
                                <span>线路：香港新世界机房</span>
                                <span className='change'>月付：<span>59</span>元</span>
                                <span className='change'> 年付：<span>590</span> 元</span>
                                <button>立即订购</button>
                            </li>
                            <li>
                                <h1>香港经济型512M</h1>
                                <span>CPU：双核</span>
                                <span>内存：512M</span>
                                <span>cpu:双核</span>
                                <span>硬盘：50+30G</span>
                                <span>带宽：2M</span>
                                <span>IP个数：独立IP 1 个</span>
                                <span>备案：无需备案</span>
                                <span>线路：香港新世界机房</span>
                                <span className='change'>月付：<span>59</span>元</span>
                                <span className='change'> 年付：<span>590</span> 元</span>
                                <button>立即订购</button>
                            </li>
                            <li>
                                <h1>香港经济型512M</h1>
                                <span>CPU：双核</span>
                                <span>内存：512M</span>
                                <span>cpu:双核</span>
                                <span>硬盘：50+30G</span>
                                <span>带宽：2M</span>
                                <span>IP个数：独立IP 1 个</span>
                                <span>备案：无需备案</span>
                                <span>线路：香港新世界机房</span>
                                <span className='change'>月付：<span>59</span>元</span>
                                <span className='change'> 年付：<span>590</span> 元</span>
                                <button>立即订购</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='selectZh'>
                    <div>
                        <div className='title'>
                            <h2>选择中华世纪网的优势</h2>
                            <span>中华世纪网12年网络运维经验，提供全年24小时无休技术在线支持服务。</span>
                        </div>
                        <div className='con'>
                            <ul>
                                <li>
                                    <img src={require('../assets/img/cloud/ys4 (1).png')} />
                                    <div>
                                        <h2>云计算技术</h2>
                                        <p>企业级云计算平台，基于虚拟数据中心技术，以更高性能、更快交付、更低成本重定义云时代的网络、存储和安全</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={require('../assets/img/cloud/ys1.png')} />
                                    <div>
                                        <h2>负载均衡</h2>
                                        <p>集合多台主机的服务能力，可以随时实现水平扩展、系统扩容，增加对外业务服务能力，有效避免单点故障。</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={require('../assets/img/cloud/ys2.png')} />
                                    <div>
                                        <h2>服务器性能监控</h2>
                                        <p>监控服务器CPU、内存、硬盘等使用情况和性能，可根据客户要求提供最近一月历史报告。</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={require('../assets/img/cloud/ys3.png')} />
                                    <div>
                                        <h2>流量监控</h2>
                                        <p>为客户提供实时、历史流量监控服务，以便客户对业务应用使用带宽进行分析</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={require('../assets/img/cloud/ys5.png')} />
                                    <div>
                                        <h2>服务器安全检测</h2>
                                        <p>为客户服务器提供入侵检测与防护、漏洞扫描、流量清洗、病毒防范、系统加固、安全管理服务、数据存储备份等</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={require('../assets/img/cloud/ys6.png')} />
                                    <div>
                                        <h2>专属工程师服务</h2>
                                        <p>由专属工程师负责跟进和处理故障，并对故障进行分析和总结。7×24小时专业工程师，全天守候。</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}