import ECharts from "@/components/ECharts"
import { Card } from "antd"

const VisitTrending = () => {


  return (
    <Card title="日访问量趋势">
      <ECharts className="h-60" options={{
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true,
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(58,77,233,0.8)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(58,77,233,0.3)'
                  }
                ])
              },
            }
          ]
      }} />
    </Card>
  )
}

export default VisitTrending