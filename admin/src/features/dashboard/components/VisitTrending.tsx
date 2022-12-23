import ECharts from '@/components/ECharts'
import { useCustom } from '@pankod/refine-core'
import { Card } from 'antd'

type VisitLog = {
  days: string
  count: number
}

const VisitTrending = () => {
  const { data, isLoading } = useCustom({ url: 'GetVisitTrending', method: 'get' })
  const _data = data?.data as VisitLog[] | undefined
  return (
    <Card title="日访问量趋势">
      <ECharts
        loading={isLoading}
        className="h-60"
        options={{
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: 40,
            top: 20,
            bottom: 20,
            right: 20,
          },
          xAxis: {
            type: 'category',
            data: _data?.map((item) => item.days) ?? [],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: _data?.map((item) => item.count) ?? [],
              type: 'line',
              smooth: true,
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(58,77,233,0.8)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(58,77,233,0.3)',
                  },
                ]),
              },
            },
          ],
        }}
      />
    </Card>
  )
}

export default VisitTrending
