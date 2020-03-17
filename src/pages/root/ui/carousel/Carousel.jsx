import React, { Component } from 'react';
import { Card, Carousel } from 'antd';
import './carousel.less';

export default class Carousels extends Component {
    render () {
        return (
            <div className="page-container carousels-wrapper">
                <Card title="文字轮播图">
                    <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </Card>
                <Card title="图片轮播图">
                    <Carousel>
                        <div className="img-wrapper">
                            <img src="/carousel-imgs/carousel-1.jpg" alt="轮播图1"/>
                        </div>
                        <div className="img-wrapper">
                            <img src="/carousel-imgs/carousel-2.jpg" alt="轮播图2"/>
                        </div>
                        <div className="img-wrapper">
                            <img src="/carousel-imgs/carousel-3.jpg" alt="轮播图3"/>
                        </div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}
