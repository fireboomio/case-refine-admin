# Dashboard统计

## 模型定义

```prisma
model VisitLog {
  id Int @id @default(autoincrement())
  ip String
  ua String
  visitedAt DateTime @default(now())
}

model SaleType {
  id Int @id @default(autoincrement())
  name String
  createdAt DateTime @default(now())
  logs SaleLog[]
}

// 按日统计每个店每个类别销售额
model SaleLog {
  id Int @id @default(autoincrement())
  shopName String
  day DateTime
  sales Float
  typeId Int
  type SaleType @relation(fields: [typeId], references: [id])
}
```

## 数据准备

模拟数据，使用脚本`statistics-seed.ts`构建好`statistics.sql`并导入到数据库中

## 准备SQL

1. 日访问量趋势

```sql
SELECT DATE_FORMAT(visitedAt,'%Y%m%d') days, COUNT(id) count from VisitLog where visitedAt BETWEEN '2020-01-01' AND '2020-12-31' GROUP BY days;
```

2. 销售额月度统计

```sql
SELECT DATE_FORMAT(day,'%Y%m') months, SUM(sales) totalSales from SaleLog where day BETWEEN '2019-10-01' AND '2020-09-30' GROUP BY months; 
```

3. 销售额Top10

```sql
SELECT shopName, SUM(sales) totalSales from SaleLog GROUP BY shopName ORDER BY totalSales DESC;
```

4. 销售额类别占比扇形图

```sql
SELECT SaleType.id typeId, SaleType.name typeName,SUM(sales) totalSales from SaleLog, SaleType WHERE SaleLog.typeId = SaleType.id GROUP BY SaleLog.typeId ORDER BY totalSales DESC;
```

## 自定义数据源添加

```ts
// custom_nodejs_datasource.ts
import {GraphQLFloat, GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { prisma } from 'generated/prisma'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      GetVisitTrending: {
            type: new GraphQLObjectType({
                name: 'data',
                fields: {
                    days: {
                        type: GraphQLString,
                    },
                    count: {
                        type: GraphQLInt
                    }
                },
            }),
            resolve() {
                return prisma.local.queryRaw(`SELECT DATE_FORMAT(visitedAt,'%Y%m%d') days, COUNT(id) count from VisitLog where visitedAt BETWEEN '2020-01-01' AND '2020-12-31' GROUP BY days`, {});
            },
        },
        GetMonthlySales: {
            type: new GraphQLObjectType({
                name: 'data',
                fields: {
                    months: {
                        type: GraphQLString,
                    },
                    totalSales: {
                        type: GraphQLFloat
                    }
                },
            }),
            resolve() {
                return prisma.local.queryRaw(`SELECT DATE_FORMAT(day,'%Y%m') months, SUM(sales) totalSales from SaleLog where day BETWEEN '2019-10-01' AND '2020-09-30' GROUP BY months`, {});
            },
        },
        GetSalesTop10: {
            type: new GraphQLObjectType({
                name: 'data',
                fields: {
                    shopName: {
                        type: GraphQLString,
                    },
                    totalSales: {
                        type: GraphQLFloat
                    }
                },
            }),
            resolve() {
                return prisma.local.queryRaw(`SELECT shopName, SUM(sales) totalSales from SaleLog GROUP BY shopName ORDER BY totalSales DESC`, {});
            },
        },
        GetSaleTypePercent: {
            type: new GraphQLObjectType({
                name: 'data',
                fields: {
                    typeId: {
                        type: GraphQLInt
                    },
                    typeName: {
                        type: GraphQLString,
                    },
                    totalSales: {
                        type: GraphQLFloat
                    }
                },
            }),
            resolve() {
                return prisma.local.queryRaw(`SELECT SaleType.id typeId, SaleType.name typeName,SUM(sales) totalSales from SaleLog, SaleType WHERE SaleLog.typeId = SaleType.id GROUP BY SaleLog.typeId ORDER BY totalSales DESC`, {});
            },
        },
    },
  }),
})
```
