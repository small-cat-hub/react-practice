import * as echarts from 'echarts';
import { useEffect } from 'react';

const Home = () => {
    useEffect(()=>{
        // 保证DOM可用 才进行图标的渲染
        // 获取渲染图表的DOM节点
        const chartDom = document.getElementById('main');
        // 图标初始化生成图标实例对象
        const myChart = echarts.init(chartDom);
        // 准备图标参数
        const option = {
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
    },[])
    return (
        <div>
            <div id='main' style={{ width: '500px', height: '400px' }}></div>
        </div>
    )
}

export default Home