import React, { Component, Fragment } from 'react';
import './../assets/css/agent.less';
 import GVerify from './verigy.js';
class Agent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        //初始化验证码
        var verifyCode = new GVerify({
            id:"verify-img",    //容器的ID
            type:"number"    //图形验证码的类型：blend-数字字母混合类型（默认）、number-纯数字、letter-纯字母
        });
        //刷新验证码
        verifyCode.refresh();
        //校验验证码
        verifyCode.validate('校验的值');    //如果校验正确返回ture，校验错误返回false
    }
    render() { 
        return (
            <Fragment>
                <div className="agent-banner">
                    <div className="bannercon">
                        中华世纪网<br />
                        专业IDC顶级服务商
                    </div>
                </div>
                <div className="agent-login">
                    <div className="agent-login-head">
                        <a href="/">网站首页</a>
                        &nbsp;&nbsp; &gt;&nbsp;&nbsp;
                        <a href="/agent">代理登录</a>
                    </div>
                    <div className="agent-login-con">
                        <div className="formwrap">
                            <form name="zhucehuiyuan" method="post" action="/agent/agentlogin.asp">
                                <div className="table">
                                    <div className="tr">
                                        <div className="td qian">代理名称:</div>
                                        <div className="td">
                                            <input type="text" name="dailiname" defaultValue=''/>
                                        </div>
                                    </div>
                                    <div className="tr">
                                        <div className="td qian">代理密码:</div>
                                        <div className="td">
                                            <input type="password" name="dailipwd" defaultValue=''/>
                                        </div>
                                    </div>
                                    <div className="tr">
                                        <div className="td qian yzm">验证码:</div>
                                        <div className="td">
                                            <input type="text" className="notinput" name="vertify" defaultValue=''/>
                                        </div>
                                        <div className="td verify-img" id="verify-img"></div>
                                    </div>
                                    <div className="tr">
                                        <div className="td qian"></div>
                                        <div className="td loginagent">登录会员</div>
                                    </div>
                                </div>
                                <div class="forget"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default Agent;
