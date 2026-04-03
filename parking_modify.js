// 停车时间&金额修改脚本
let body = $response.body;
let obj = JSON.parse(body);

// 改进场时间（格式：YYYY-MM-DD HH:mm:ss，可自行修改）
obj.data.data.inTime = "2026-04-03 22:20:00";

body = JSON.stringify(obj);
$done({ body });
