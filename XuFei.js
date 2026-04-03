// 固定开头
let body = $response.body;
let obj = JSON.parse(body);

// 只改第一个套餐（1个月）：时长改成12个月，
obj.data.packets[2].amount = 0;
obj.data.packets[0].value = 12;
// 可选：把套餐名改成「12个月」，方便你识别（不改也不影响功能）
obj.data.packets[0].packet_name = "一个月";

// 固定结尾
body = JSON.stringify(obj);
$done({ body });