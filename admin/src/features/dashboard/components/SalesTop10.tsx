import ECharts from "@/components/ECharts"
import { Card } from "antd"

interface SalesTop10Props {
  
}

const SalesTop10 = ({  }: SalesTop10Props) => {
  const data = Array.from({ length: 8 }, (_, index) => {
    return {
      id: index,
      shopName: `工专路 ${index} 号店`,
      totalSales: Math.round(Math.random() * 234234) + 10033
    }
  })

  return (
    <Card title="门店销售额排名">
      {data.map((item, index) => (
        <div key={item.id} className="flex py-2.5 items-center">
          <div className={`rounded-lg w-4.5 h-4.5 flex items-center justify-center ${index < 3 ? 'bg-[#314659] text-white' : 'bg-[#fafafa] text-[#666]'}`}>{index + 1}</div>
          <div className="ml-4">{item.shopName}</div>
          <div className="ml-auto">{item.totalSales}</div>
        </div>
      ))}
    </Card>
  )
}

export default SalesTop10