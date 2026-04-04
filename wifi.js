// 固定开头
let body = $response.body;
let obj = JSON.parse(body);

// ==============================================
// 核心修改：把限制提示改成成功，绕过购买限制
// ==============================================
// 1. 把错误提示改成成功
obj.msg = "success";
// 2. 把code改成0（绝大多数系统0代表成功，双重保险）
obj.code = 0;

// 固定结尾
body = JSON.stringify(obj);
$done({ body });
