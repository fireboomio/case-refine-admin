import { useCustom } from "@pankod/refine-core"
import { Card } from "antd"

type SalesTop = {
  shopName: string
  totalSales: number
}

const SalesTop10 = () => {
  const { data } = useCustom({ url: 'GetSalesTop10', method: 'get' })
  const _data = ((data?.data ?? []) as SalesTop[]).slice(0, 8)

  return (
    <Card title="门店销售额排名">
      {_data?.map((item, index) => (
        <div key={index} className="flex py-2.5 items-center">
          <div className={`rounded-lg w-4.5 h-4.5 flex items-center justify-center ${index < 3 ? 'bg-[#314659] text-white' : 'bg-[#fafafa] text-[#666]'}`}>{index + 1}</div>
          <div className="ml-4">{item.shopName}</div>
          <div className="ml-auto">{Math.round(item.totalSales * 100) /100}</div>
        </div>
      ))}
    </Card>
  )
}

export default SalesTop10