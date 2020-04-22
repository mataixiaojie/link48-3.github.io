import React from 'react'
import '../assets/css/netpay.css'
import $ from 'jquery'
import { Row, Col } from 'antd';
import netpay_3 from '../assets/img/netpay_3.gif'
import netpay_4 from '../assets/img/netpay_4.gif'
export default class Netpay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="netpay">
                <div className="netpay_one">
                    <div className="netpay_two">
                        <a href="/">网站首页</a>
                        <b>></b>
                        <a href="/netpay">付款方式</a>
                    </div>
                </div>
                <div className="netpay_three">
                    <div className="netpay_four">
                        <div className="netpay_left">
                            <ul>
                                <li><a href="/about/guanyuwomen/">支付方式</a></li>
                            </ul>
                        </div>
                        <div className="netpay_right">
                            <table cellSpacing="0" cellPadding="0" width="750" align="center" border="0" className="netpay_five">
                                <tbody>
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>在线支付 (实时自动入账，快捷方便，推荐使用)</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellSpacing="1" cellPadding="0" width="750" align="center" bgcolor="#ccc" border="0" className="netpay_six">
                                <tbody>
                                    <tr>
                                        <td bgcolor="#fdeecf" height="30" width="200" align="center">交付方式</td>
                                        <td bgcolor="#fdeecf" align="center" colSpan="2">说 &nbsp;&nbsp;&nbsp;&nbsp;明</td>

                                    </tr>
                                    <tr>
                                        <td bgcolor="#ffffff" height="90" align="center" rowSpan="3">在线支付</td>
                                        <td bgcolor="#ffffff" align="center" height="100">
                                            <a target="_blank" href="http://www.c361.com.cn/netpay/ali">
                                                <img border="0" src={netpay_3} width="126" height="88"></img>
                                            </a>
                                        </td>
                                        <td bgcolor="#ffffff" align="center">
                                            <a target="_blank" href="/netpay/99bill/">
                                                <img border="0" src={netpay_4} width="126" height="88"></img>
                                            </a></td>
                                    </tr>
                                    <tr>
                                        <td bgcolor="#66CCFF" align="left" colSpan="2" height="30">
                                            <b>
                                                <a href="/news/379.html"><font color="#FF0000">领取支付宝红包&gt;&gt;&gt;</font></a></b>
                                            <b><font color="#FFFFFF">&nbsp;
                                                </font><a href="/news/378.html"><font color="#FFFFFF">支付宝扫描二维码付款(支持红包抵现金)&gt;&gt;&gt;</font></a></b>&nbsp;&nbsp;&nbsp;&nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td bgcolor="#FF9933" align="left" colSpan="2" height="30">
                                            <b> <a target="_blank" href="/news/380.html"><font color="#FFFFFF">微信扫描支付&gt;&gt;&gt;</font></a>　</b></td></tr>
                                </tbody>
                            </table>
                            <table cellSpacing="0" cellPadding="0" width="750" align="center" border="0" className="netpay_five">
                                <tbody>
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>银行汇款(个人汇款)</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table style={{marginBottom:'10px', cellSpacing:"1" ,cellPadding:"0", width:"750px" ,align:"center" ,bgcolor:"#cccccc", border:"0"}} className="netpay_six">
                                <tbody>
                                    <tr>
                                        <td bgcolor="#fdeecf" height="30" width="120" align="center">银&nbsp;&nbsp;&nbsp;&nbsp;行</td>
                                        <td bgcolor="#fdeecf" align="center">开户银行</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight: 'bold' ,color: '#cc3300', bgcolor:"#ffffff" ,height:"100", align:"center"}}>农业银行</td>
                                        <td bgcolor="#ffffff" align="left">户 名:王红星<br/>开户行：中国农业银行北京市中关村支行<br/>卡号：6228 4800 1049 6143 313 (直接复制:6228480010496143313)</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight: 'bold' ,color: '#cc3300', bgcolor:"#ffffff" ,height:"100", align:"center"}}>工商银行</td>
                                        <td bgcolor="#ffffff" align="left">户 名： 王红星<br/>开户行： 中国工商银行北京市中关村支行<br/>卡 号： 6222 0002 0011 1314 480 (直接复制:6222000200111314480)</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight: 'bold' ,color: '#cc3300', bgcolor:"#ffffff" ,height:"100", align:"center"}}>建设银行</td>
                                        <td bgcolor="#ffffff" align="left">户 名：王红星 <br/>开户行： 中国建行北京市中关村支行<br/>账　号： 6227 0000 1102 0172 219 (直接复制:6227000011020172219)</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight: 'bold' ,color: '#cc3300', bgcolor:"#ffffff" ,height:"100", align:"center"}}>邮政储蓄银行</td>
                                        <td bgcolor="#ffffff" align="left">户 名： 王红星 <br/>开户行： 中国邮政储蓄银行北京市海淀区支行<br/>卡 号： 6221 8810 0009 7408 538 (直接复制:6221881000097408538)</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight: 'bold' ,color: '#cc3300', bgcolor:"#ffffff" ,height:"100", align:"center"}}>招商银行</td>
                                        <td bgcolor="#ffffff" align="left">户 名： 王红星 <br/>开户行： 招商银行北京市分行<br/>账　号： 6225 8801 1186 1648 (直接复制:6225880111861648)</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight: 'bold' ,color: '#cc3300', bgcolor:"#ffffff" ,height:"100", align:"center"}}>交通银行</td>
                                        <td bgcolor="#ffffff" align="left">账 名： 王红星 <br />开户行： 交通银行北京中关村支行 <br />卡　号： 6222 6009 1003 3346 915 (直接复制:6222600910033346915)</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight: 'bold' ,color: '#cc3300', bgcolor:"#ffffff" ,height:"100", align:"center"}}>中信银行</td>
                                        <td bgcolor="#ffffff" align="left">户 名： 王红星 <br/>开户行： 中信银行北京分行 <br/>卡 号： 6226 9007 0555 4380 (直接复制:6226900705554380)</td>
                                    </tr>
                                    <tr>
                                        <td style={{color:'#ff0000', bgcolor:'#ffffff', height:'30px',align:'center'}} colSpan='2' >汇款之后请您务必要保留汇款底单，当日无法与我司确认款项的，没有底单，请自行与银行联系。</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellSpacing="0" cellPadding="0" width="750px" align="center" border="0" className="netpay_siven">
                                <tbody>
                                    <tr>
                                        <td style={{ borderTop:"#ccc 1px solid", borderRight:"#cccccc 1px solid", background:"#f8f8f8", borderBottom:"#ccc 1px solid", padding:"10px", borderLeft:"#ccc 1px solid"}}>
                                            <span style={{fontSize:'14px', fontWeight:"bold",color:"#cc3300"}}>客户端汇款或转账确认</span><br/>
                                            请您汇款后将汇款底单发给客服帮您入账<br/>
                                            传真件或扫描件请务必注明会员名称和用途,若有注明域名,请保持和订单相一致; <br/>
                                            我司收悉有效传真件或扫描件即可为您入帐,因此为了加快入帐步伐,建议您及时传真; <br/>
                                            对于不方便传真或扫描的客户,请汇款时多汇一毛两毛,并及时通知我们进行查帐即可。 
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}