import ECharts from '@/components/ECharts'
import { Card } from 'antd'

const MonthlySales = () => {
  return (
    <Card title="月销售额">
      <ECharts
        className="h-84"
        options={{
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
            },
          ],
        }}
      />
    </Card>
  )
}

export default MonthlySales
