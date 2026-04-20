// Quantumult X 响应体重写脚本：修改余额与套餐显示价格
// 仅本地显示修改，无法改变真实支付金额
let body = $response.body;

// 1. 修改设备余额为100
body = body.replace(/"wash_balance":"0"/g, '"wash_balance":"100"');

// 2. 修改所有套餐的显示价格为0.01元
body = body.replace(/"rent_unit_fee":"28"/g, '"rent_unit_fee":"0.01"');
body = body.replace(/"rent_unit_fee":"16"/g, '"rent_unit_fee":"0.01"');
body = body.replace(/"rent_unit_fee":"10"/g, '"rent_unit_fee":"0.01"');
body = body.replace(/"rent_unit_fee":"8"/g, '"rent_unit_fee":"0.01"');

// 3. 修改应付金额显示为1分（对应0.01元）
body = body.replace(/"need_pay_fen":2800/g, '"need_pay_fen":1');

// 返回修改后的响应体
$done({ body });