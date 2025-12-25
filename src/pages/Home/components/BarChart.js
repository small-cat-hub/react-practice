import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
// 柱状图组件

// 1.把功能代码都放到这个组件中
// 2.把可变的地方抽象成props参数

const BarChart = ({ title }) => {
    const chartRef = useRef(null)
    useEffect(()=>{
        // 保证DOM可用 才进行图标的渲染
        // 获取渲染图表的DOM节点
        const chartDom = chartRef.current
        // 图标初始化生成图标实例对象
        const myChart = echarts.init(chartDom);
        // 准备图标参数
        const option = {
          title: {
            text: title
          },
          xAxis: {
            type: 'category',
            data: ['vue','react','angular']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [10,40,70],
              type: 'bar'
            }
            ]
        };
        // 使用图标参数完成渲染
        option && myChart.setOption(option);
    },[title])
    return (
        <div ref={chartRef} style={{ width: '500px', height: '400px' }}></div>
    )
}

export default BarChart