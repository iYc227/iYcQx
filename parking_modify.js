let body = $response.body;
let obj = JSON.parse(body);

// 总费用
obj.data.data.amount = 4;

// 进场时间
obj.data.data.inTime = "2026-04-03 23:00:00";

// 停车时长（秒）
obj.data.data.useTime = 46;

// 实付金额
obj.data.data.payAmount = 4;

body = JSON.stringify(obj);
$done({ body });