let body = $response.body;
let obj = JSON.parse(body);

// 只改成月租车，让系统显示续费界面
obj.data.msg = "是月租车";
obj.data.isRechargePackage = 1;
obj.data.scanCode = 7;

body = JSON.stringify(obj);
$done({ body });