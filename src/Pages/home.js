import React from 'react'
import '../assets/css/home.css'
import { Row, Col } from 'antd';
import freehost from '../assets/img/freehost.jpg'
import banner2 from '../assets/img/banner2.jpg'
import banner3 from '../assets/img/banner3.jpg'
import banner4 from '../assets/img/banner4.jpg'
import $ from 'jquery'
export default class Home extends React.Component{
    constructor(props){
       super(props)
    }
    componentDidMount(){
        $(function () {
            //转成DOM对象
            var leftmove = $('.arrow-left')[0];
            var rightmove = $('.arrow-right')[0];
            //遍历添加索引值
            var lis = $('ul li');
            for (var i = 0; i < lis.length; i++) {
                lis[i].index = i;
            }
            //将第一张图片设为可见，css()方法修改样式
            $('.slide img').eq(0).css({
                display: "block"
            });
            $('.slide-pag ul li').eq(0).css({
                backgroundColor: "skyblue"
            });
            //注册点击事件函数
            $('.slide-pag ul li').click(function () {
                var index = this.index;
                $(this).css({
                    backgroundColor: 'skyblue'
                }).siblings().css({
                    backgroundColor: '#999'
                });
                $('.slide img').stop().fadeOut(500);
                $('.slide img').eq(index).stop().fadeIn(600);
            });
            var keyIndex = 0;
            var slideImgs = $('.slide img');
            // 向左滑动事件函数
            function moveLeft() {
                keyIndex--;
                if (keyIndex < 0) {
                    keyIndex = slideImgs.length - 1;
                }
                $('.slide img').stop().fadeOut(500);
                $('.slide img').eq(keyIndex).stop().fadeIn(600);
                $('.slide-pag ul li').eq(keyIndex).css({
                    backgroundColor: 'skyblue'
                }).siblings().css({
                    backgroundColor: '#999'
                });
            };
            // 绑定向左滑动事件函数
            leftmove.onclick = moveLeft;
            // 向右滑动事件函数
            function moveRight() {
                keyIndex++;
                if (keyIndex > slideImgs.length - 1) {
                    keyIndex = 0;
                }
                $('.slide img').stop().fadeOut(500);
                $('.slide img').eq(keyIndex).stop().fadeIn(600);
                $('.slide-pag ul li').eq(keyIndex).css({
                    backgroundColor: 'skyblue'
                }).siblings().css({
                    backgroundColor: '#999'
                });
            };
            // 绑定右左滑动事件函数
            rightmove.onclick = moveRight;
            // 定时器实现定时轮播
            var timer = setInterval(moveRight, 3000);
            // 当鼠标停在轮播图上面停止滑动，移开后恢复滑动
            $('.slide').hover(function () {
                clearInterval(timer);
            }, function () {
                timer = setInterval(moveRight, 3000);
            })
        })
    }
    render(){
        return(
           <div className="home">
             <div className="banner">
             <div className="slide">
                    <a href="#"><img src={freehost} alt=""></img></a>
                    <a href="#"><img src={banner2} alt=""></img></a>
                    <a href="#"><img src={banner3} alt=""></img></a>
                    <a href="#"><img src={banner4} alt=""></img></a>
                    <div className="slide-pag">
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                    <div className="arrow-left"></div>
                    <div className="arrow-right"></div>
                </div>
             </div>
           </div>
        )
    }
}