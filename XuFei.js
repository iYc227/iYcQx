let body = $response.body;

// 设备余额
body = body.replace(/"wash_balance":0/g, '"wash_balance":100');

// 钱包余额（元）
body = body.replace(/"balance":0/g, '"balance":100');

// 钱包余额（分）
body = body.replace(/"balance_fen":0/g, '"balance_fen":10000');

// 套餐价格全部改成 0.01
body = body.replace(/"rent_unit_fee":"28"/g, '"rent_unit_fee":"0.01"');
body = body.replace(/"rent_unit_fee":"16"/g, '"rent_unit_fee":"0.01"');
body = body.replace(/"rent_unit_fee":"10"/g, '"rent_unit_fee":"0.01"');
body = body.replace(/"rent_unit_fee":"8"/g, '"rent_unit_fee":"0"');

// 应付金额改成 1 分
body = body.replace(/"need_pay_fen":2800/g, '"need_pay_fen":1');

$done({ body });