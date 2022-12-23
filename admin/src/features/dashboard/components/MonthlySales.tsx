import ECharts from '@/components/ECharts'
import { useCustom } from '@pankod/refine-core'
import { Card } from 'antd'

type MonthlySale = {
  months: string
  totalSales: number
}

const MonthlySales = () => {
  const { data, isLoading } = useCustom({ url: 'GetMonthlySales', method: 'get' })
  const _data = data?.data as MonthlySale[] | undefined
  return (
    <Card title="月销售额">
      <ECharts
        className="h-84"
        loading={isLoading}
        options={{
          tooltip: {
            trigger: 'item'
          },
          grid: {
            left: 80,
            top: 20,
            bottom: 24,
            right: 20,
          },
          xAxis: {
            type: 'category',
            data: _data?.map(item => item.months) ?? [],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: _data?.map(item => item.totalSales) ?? [],
              type: 'bar',
            },
          ],
        }}
      />
    </Card>
  )
}

export default MonthlySales
