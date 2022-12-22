import { Col, Row } from "@pankod/refine-antd"
import MonthlySales from "./components/MonthlySales"
import SalesTop10 from "./components/SalesTop10"
import SaleTypePercent from "./components/SaleTypePercent"
import VisitTrending from "./components/VisitTrending"

const DashboardPage = () => {

  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <MonthlySales />
        </Col>
        <Col span={8}>
          <SalesTop10 />
        </Col>
        <Col span={12}>
          <VisitTrending />
        </Col>
        <Col span={12}>
          <SaleTypePercent />
        </Col>
      </Row>
    </div>
  )
}

export default DashboardPage