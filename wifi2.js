let body = $response.body;
let obj = JSON.parse(body);

// 完全复制你朋友的包
obj.data.scanCode = 7;
obj.data.isRechargePackage = 3;
obj.data.msg = "是月租车";
obj.data.code = 1;

body = JSON.stringify(obj);
$done({ body });