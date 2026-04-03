// 固定开头
let body = $response.body;
let obj = JSON.parse(body);

// ==============================================
// 核心修改：只改车辆信息，套餐完全不动
// ==============================================
// 1. 把月卡到期时间改成永久（2099年12月31日，永远不过期）
obj.data.vehicleinfo.end_time = "2027-4-30T23:59:59.000Z";

// 固定结尾
body = JSON.stringify(obj);
$done({ body });
