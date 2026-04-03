let body = $response.body;
// 直接把所有金额数字替换成0
body = body.replace(/"amount":\s*\d+/g, '"amount": 0');
body = body.replace(/"payAmount":\s*\d+/g, '"payAmount": 0');
$done({ body });