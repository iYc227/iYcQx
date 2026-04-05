let body = $response.body;
let obj = JSON.parse(body);

// 核心修改：把「临时车」改成「月租车」，系统按包月计费
obj.data.msg = "月租车";
// 可选：把可充值套餐标识改成1，支持月卡续费
obj.data.isRechargePackage = 1;

body = JSON.stringify(obj);
$done({ body });