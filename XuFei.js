//  Quantumult X 终极脚本：同时绕过卡密+维护提示
$done = function(s) {
    // 匹配你抓到的所有三个接口
    if (
        $request.url.indexOf("/v4/client/key-v3") !== -1 ||
        $request.url.indexOf("/v4/client/credential-v3") !== -1 ||
        $request.url.indexOf("/v4/client/package-v3") !== -1
    ) {
        // 强制返回固定的「授权成功 + 非维护」响应
        return {
            "status": 200,
            "headers": {
                "Content-Type": "text/html"
            },
            "body": JSON.stringify({
                "code": 0,
                "msg": "success",
                "data": {
                    "token": "FAKE_TOKEN_" + Math.random().toString(32).slice(2),
                    "expire": "2026-12-31 23:59:59",
                    "isVip": true,
                    "maintenance": false
                }
            })
        };
    }
    // 其他接口保持原样
    return $response;
};