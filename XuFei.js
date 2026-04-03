// 固定开头
let body = $response.body;
let obj = JSON.parse(body);

// 零元购一年
obj.data.packets[2].amount = 0;
obj.data.packets[0].value = 12;

// 固定结尾
body = JSON.stringify(obj);
$done({ body });