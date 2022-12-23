const { writeFileSync } = require('fs')
const { resolve } = require('path')

const ua = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36`

/**
 * @param {Number} num 
 * @param {Number} length 
 */
function padStr(num, length = 2) {
  return `${num}`.padStart(length, '0')
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  return `${date.getFullYear()}-${padStr(date.getMonth() + 1)}-${padStr(date.getDate())} ${padStr(date.getHours())}:${padStr(date.getMinutes())}:${padStr(date.getSeconds())}`
}

function generateIPPiece() {
  return Math.round(Math.random() * 254) + 1
}

function generateIP() {
  return `${generateIPPiece()}.${generateIPPiece()}.${generateIPPiece()}.${generateIPPiece()}`
}

function generateVisitLogs() {
  const start = new Date('2019-10-01')
  const end = new Date('2021-02-14')
  const ret = []
  // 每天记录
  let date = start
  while(date < end) {
    const count = Math.round(Math.random() * 200) + 30
    for (let i = 0; i < count; i++) {
      // @ts-ignore
      ret.push({
        ip: generateIP(),
        ua,
        visitedAt: date
      })
    }
    // 比一天的周期稍长一些
    date = new Date(+date + 24 * 60 * 60 *1000 + Math.round(Math.random() * 123456))
  }
  return ret
}

const saleTypes = [
  { id: 1, name: '母婴用品' },
  { id: 2, name: '服饰箱包' },
  { id: 3, name: '个护健康' },
  { id: 4, name: '食用酒水' },
  { id: 5, name: '家用电器' },
  { id: 6, name: '其它' },
]

function generateSaleLogs() {
  const start = new Date('2019-10-01')
  const end = new Date('2021-02-14')
  const ret = []
  let date = start
  const shops = Array.from({ length: 10 }, (_, index) => `工专路 ${index} 号店`)
  while(date < end) {
    for (const shop of shops) {
      for (const type of saleTypes) {
        // @ts-ignore
        ret.push({
          shopName: shop,
          day: new Date(date),
          sales: Math.random() * 10000 + 123,
          typeId: type.id,
        })
      }      
    }
    date = new Date(+date + 24 * 60 * 60 *1000 + Math.round(Math.random() * 123456))
  }
  return ret
}

const strings = []
const visitLogs = generateVisitLogs()
strings.push(
  ...visitLogs
    .map(log => `INSERT INTO \`VisitLog\` (\`ip\`, \`ua\`, \`visitedAt\`) VALUES ('${log.ip}', '${log.ua}', '${formatDate(log.visitedAt)}');`)
)

strings.push(
  ...saleTypes
    .map(type => `INSERT INTO \`SaleType\` (\`id\`, \`name\`) VALUES (${type.id}, '${type.name}');`)
)

const saleLogs = generateSaleLogs()
strings.push(
  ...saleLogs
    .map(log => `INSERT INTO \`SaleLog\` (\`shopName\`, \`day\`, \`sales\`, \`typeId\`) VALUES ('${log.shopName}', '${formatDate(log.day)}', ${log.sales.toFixed(2)}, ${log.typeId});`)
)

writeFileSync(resolve(__dirname, './statistics.sql'), strings.join('\n'), 'utf-8')