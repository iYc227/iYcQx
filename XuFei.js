//  Quantumult X 重写脚本，同时覆盖三个接口
$done = function(s) {
    // 匹配你抓到的所有三个接口
    if (
        $request.url.indexOf("/v4/client/key-v3") !== -1 ||
        $request.url.indexOf("/v4/client/credential-v3") !== -1 ||
        $request.url.indexOf("/v4/client/package-v3") !== -1
    ) {
        // 强制返回「授权成功」的固定响应
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
                    "expire": "2029-12-31 23:59:59",
                    "level": 999,
                    "isVip": true
                }
            })
        };
    }
    // 其他接口不做处理
    return $response;
};