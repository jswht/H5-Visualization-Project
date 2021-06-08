/*
 * @Author: jswang
 * @Date: 2021-06-06 00:13:52
 * @LastEditTime: 2021-06-08 19:00:09
 * @FilePath: \black_h5\10-ECharts数据可视化项目\H5-Visualization-Project\H5-Visualization-Project\js\index.js
 */
//用立即执行函数 防止变量污染
(function() {
    $(".monitor .tabs").on("click", "a", function() {
        $(this).addClass("active").siblings("a").removeClass("active");

        //选取对应索引号的内容
        $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();

    });
})();
// 动画
$(".marquee-view .marquee").each(function() {
    // console.log($(this));
    var rows = $(this).children().clone();
    $(this).append(rows);
});
//点位分布统计模块
(function() {
    //实例化对象
    let myChart = new echarts.init(document.querySelector(".pie"));
    //指定配置项和数据
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        series: [{
            name: '点位统计',
            type: 'pie',
            // 第一个是 里面圆的半径   第二是外边的半径
            //放到 dom 容器的最中央,改成了 百分比
            radius: ["5%", "60%"],
            //水平位置
            center: ['50%', '50%'],
            //以 半径展示radius  还是面积area
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            data: [
                { value: 20, name: '云南' },
                { value: 26, name: '北京' },
                { value: 24, name: '山东' },
                { value: 25, name: '河北' },
                { value: 20, name: '江苏' },
                { value: 25, name: '浙江' },
                { value: 30, name: '四川' },
                { value: 42, name: '湖北' }
            ],
            labal: {
                fontSize: "10",
            },
            lableLine: {
                length: "6",
                length2: "8",
            }
        }]
    };
    //设置配置项
    myChart.setOption(option);
    // 监听浏览器缩放,图标对象调用缩放 resize()函数
    window.addEventListener('resize', function() {
        //这个是jquery上的方法
        myChart.resize();
    })

})();

//用户统计 (users) -柱状图

(function() {
    var item = {
            name: '',
            value: 1200,
            // 柱子颜色
            itemStyle: {
                color: '#254065'
            },
            // 鼠标经过柱子颜色
            emphasis: {
                itemStyle: {
                    color: '#254065'
                }
            },
            // 工具提示隐藏
            tooltip: {
                extraCssText: 'opacity:0'
            },
        }
        //实例化对象
    let myChart = new echarts.init(document.querySelector(".bar"));
    //指定配置和数据
    let option = {
        /* color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: 'red' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'blue' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        }, */
        // 第二种设置 渐变的方式
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1, [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' } // 1 结束颜色
            ]
        ),
        tooltip: {
            //阴影  axins
            trigger: 'item',
            /*  axisPointer: { // 坐标轴指示器，坐标轴触发有效
                 type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
             } */
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            //grid 四条边框的颜色
            gorderColor: 'rgba(0, 240, 255, 0.3)',
        },
        xAxis: [{
            type: 'category',
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            //刻度设置
            axisTick: {
                // true意思：图形和刻度居中中间
                // false意思：图形在刻度之间
                alignWithLabel: false,
                //不显示刻度
                show: false,
            },
            axisLable: {
                color: '#4c9bfd',
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            },
        }],
        // x坐标轴文字标签样式设置

        yAxis: [{
            type: 'value',
            axisTick: {
                // true意思：图形和刻度居中中间
                // false意思：图形在刻度之间
                alignWithLabel: false,
                //不显示刻度
                show: false,
            },
            axisLable: {
                color: '#4c9bfd',
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            },
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
        }]
    };
    //设置配置项
    myChart.setOption(option);

    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();

//销售额模块
(function() {
    //声明数据
    let data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    };
    //实例化对象
    let myChart = new echarts.init(document.querySelector(".line "));
    //指定配置项和数据
    let option = {
        //线的颜色
        color: ['#00f2f1', '#ed3f35'],
        //通过坐标轴来触发,x轴提示框
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            //距离右边 10%
            right: "10%",
            //series中设置了name  legendd的data可以取消
            //data: ['预期销售额', '实际销售额', ],
            //文字样式
            textStyle: {
                color: '#4c9bfd',
            },
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            //显示边框
            show: true,
            //边框颜色
            borderColor: '#012f4a',
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            // 去除X轴上的刻度
            axisTick: {
                show: false,
            },
            // //x轴上文本的颜色
            axisLabel: {
                close: '#4c9bfd',
            },
            // //x轴线
            axisLine: {
                show: false,
            },
            // 去除轴内间距
            boundaryGap: false,

        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false,
            },
            //x轴上文本的颜色
            axisLable: {
                close: '#4c9bfd',
            },
            //分割线颜色
            splitLine: {
                lineStyle: {
                    color: '#012f4a',
                }
            }
        },
        series: [{
                name: '预期销售额',
                type: 'line',
                //折线修饰为圆滑
                smooth: true,
                data: data.year[0],
            },
            {
                //series中设置了name  legendd的data可以取消
                name: '实际销售额',
                type: 'line',
                //折线修饰为圆滑
                smooth: true,
                data: data.year[1],
            },
        ]
    };
    //设置配置项
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });
    //tab切换效果
    $('.sales .caption').on('click', 'a', function() {
        $(this).addClass('active').siblings('a').removeClass('active');
        //点击后把索引号赋值个 index 
        //由于这里不止有a  还有 h3 所以索引 到a时 已经是 1
        index = $(this).index() - 1;
        //jquery的写法
        //console.log($(this).attr('data-type'));
        //h5的写法
        //console.log(this.dataset.type);
        //console.log(data[$(this).attr('data-type')]);
        option.series[0].data = data[$(this).attr('data-type')][0];
        option.series[1].data = data[$(this).attr('data-type')][1];
        //重新把新配置的数据给新对象
        myChart.setOption(option);
    });
    //tab栏自动切换
    //开启定时器,每隔3秒自动让a触发点击事件
    let as = $('.sales .caption a');
    let index = 0;
    let timer = setInterval(function() {
        index++;
        if (index >= 4) index = 0;
        as.eq(index).click();
    }, 3000);
    //鼠标经过scales 关闭定时器,离开时开启定时器
    $('.sales').hover(function() {
        // over
        clearInterval(timer);

    }, function() {
        // out
        //执行之前先清除一次
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            if (index >= 4) index = 0;
            as.eq(index).click();
        }, 3000);
    });

})();
//雷达图
(function() {
    //实例化对象
    let myChart = new echarts.init(document.querySelector('.radar'));
    // Schema:
    // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
    let option = {
        tooltip: {
            show: true,
        },
        backgroundColor: '#161627',
        title: {

            left: 'center',
            textStyle: {
                color: '#eee'
            }
        },
        legend: {
            bottom: 5,

            itemGap: 20,
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
            selectedMode: 'single'
        },
        // visualMap: {
        //     show: true,
        //     min: 0,
        //     max: 20,
        //     dimension: 6,
        //     inRange: {
        //         colorLightness: [0.5, 0.8]
        //     }
        // },
        radar: {
            //雷达的居中
            center: ['50%', '50%'],
            //雷达的大小
            radius: '65%',
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            shape: 'circle',
            //雷达的分割圈数
            splitNumber: 4,
            name: {
                //修饰雷达图的文字颜色
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            //分割的圆圈的样式
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(255,255, 255,0.5)',
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                //坐标走 线的颜色
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        series: [{
                name: '北京',
                type: 'radar',
                lineStyle: {
                    normal: {
                        color: '#fff',
                        // width: 1
                    }
                },
                data: [
                    [90, 19, 56, 11, 34]
                ],
                // symbol 标记的样式(拐点），还可以取值'rect' 方块 ,'arrow' 三角等
                symbol: 'circle',
                //拐点的大小
                symbolSize: 5,
                //小圆点设置为白色
                itemStyle: {
                    color: '#fff'
                },
                //区域样式
                areaStyle: {
                    // opacity: 1
                    color: 'rgba(238, 197, 102, 0.6)',
                },
                // 在圆点上显示相关数据
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10,
                }
            },

        ]
    };
    //设置setOption
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
//销售进度
(function() {
    let myChart = new echarts.init(document.querySelector('.gauge'));
    let option = {
        series: [{
            name: '销售进度',
            type: 'pie',
            // 放大图形
            radius: ['130%', '150%'],
            // 移动下位置  套住50%文字
            center: ['48%', '80%'],
            //是否启用防止标签重叠策略
            // avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            hoverOffset: 0,
            // 起始角度，支持范围[0, 360]
            startAngle: 180,
            data: [{
                    value: 100,
                    itemStyle: {
                        // 颜色渐变#00c9e0->#005fc1
                        color: new echarts.graphic.LinearGradient(
                            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                            0,
                            0,
                            0,
                            1, [
                                { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                { offset: 1, color: "#005fc1" } // 1 结束颜色
                            ]
                        )
                    }
                },
                {
                    value: 100,
                    itemStyle: {
                        color: '#12274d',
                    }
                },
                {
                    value: 200,
                    itemStyle: { color: 'transparent' } //透明隐藏第三块区域
                },

            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();
(function() {
    let hotData = [{
            city: '北京', // 城市
            sales: '25, 179', // 销售额
            flag: true, //  上升还是下降
            brands: [ //  品牌种类数据
                { name: '可爱多', num: '9,086', flag: true },
                { name: '娃哈哈', num: '8,341', flag: true },
                { name: '喜之郎', num: '7,407', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '6,724', flag: false },
                { name: '好多鱼', num: '2,170', flag: true },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '3,457', flag: false },
                { name: '娃哈哈', num: '2,124', flag: true },
                { name: '喜之郎', num: '8,907', flag: false },
                { name: '八喜', num: '6,080', flag: true },
                { name: '小洋人', num: '1,724', flag: false },
                { name: '好多鱼', num: '1,170', flag: false },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '2,345', flag: true },
                { name: '娃哈哈', num: '7,109', flag: true },
                { name: '喜之郎', num: '3,701', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '2,724', flag: false },
                { name: '好多鱼', num: '2,998', flag: true },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '2,156', flag: false },
                { name: '娃哈哈', num: '2,456', flag: true },
                { name: '喜之郎', num: '9,737', flag: true },
                { name: '八喜', num: '2,080', flag: true },
                { name: '小洋人', num: '8,724', flag: true },
                { name: '好多鱼', num: '1,770', flag: false },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '9,567', flag: true },
                { name: '娃哈哈', num: '2,345', flag: false },
                { name: '喜之郎', num: '9,037', flag: false },
                { name: '八喜', num: '1,080', flag: true },
                { name: '小洋人', num: '4,724', flag: false },
                { name: '好多鱼', num: '9,999', flag: true },
            ]
        }
    ];

    //根据数据渲染sup模块
    let supHTML = '';
    $.each(hotData, function(index, item) {
        supHTML += `<li>
        <span>${item.city}</span>
        <span>${item.sales}<s class=${item.flag ? "icon-up":"icon-down"}></s></span>
    </li>`;
    });
    $('.sup').html(supHTML);
    //当鼠标进入tab模块  经过的li高亮显示
    $('.province .sup').on("mouseenter", 'li', function name() {
        let index = $(this).index();
        render($(this));
    });


    // 声明一个函数 里面设置sup当前小li高亮还有 对应的品牌对象渲染
    // 这个函数需要传递当前元素进去
    function render(currentEle) {
        currentEle.addClass('active').siblings().removeClass('active');

        let subHTML = '';
        //拿到当前城市的品牌对象
        let brands = hotData[currentEle.index()].brands;
        //遍历品牌数据
        $.each(brands, function(index, item) {
            subHTML += `<li><span>${item.name}</span><span>${item.num}<class=
            ${item.flag ? "icon-up":"icon-down"}></class=></span></li>`;
        });
        $('.sub').html(subHTML);
    }


    //默认把第一个小li处于鼠标经过状态
    let lis = $(".province .sup li");
    lis.eq(0).mouseenter();
    //定时器自动切换
    let index = 0;
    let timer = setInterval(function() {
        index++;
        if (index >= 5) index = 0;
        // lis.eq(index).mouseenter();
        render(lis.eq(index));
    }, 3000);
    //鼠标经过停止定时器
    $('.province .sup').hover(function() {
        // over
        clearInterval(timer);
    }, function() {
        // out
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            if (index >= 5) index = 0;
            // lis.eq(index).mouseenter();
            render(lis.eq(index));
        }, 3000);
    });
})();