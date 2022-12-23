import ECharts from "@/components/ECharts"
import { useCustom } from "@pankod/refine-core"
import { Card } from "antd"

type SaleType = {
  typeId: number
  typeName: string
  totalSales: number
}

const SaleTypePercent = () => {
  const { data, isLoading } = useCustom({ url: 'GetSaleTypePercent', method: 'get' })
  const _data = (data?.data ?? []) as SaleType[]

  return (
    <Card title="销售额类别占比">
      <ECharts className="h-60" loading={isLoading} options={{
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 40,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: _data.map(item => ({
                name: item.typeName,
                value: item.totalSales
              }))
            }
          ]
      }} />
    </Card>
  )
}

export default SaleTypePercent