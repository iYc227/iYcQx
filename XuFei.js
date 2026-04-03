// 固定开头
let body = $response.body;
let obj = JSON.parse(body);

// 核心：只改这2行，把所有套餐价格改成0元
obj.data.packets.forEach(item => {
  item.amount = 0;
  item.discount_amount = 0;
});

// 固定结尾
body = JSON.stringify(obj);
$done({ body });
