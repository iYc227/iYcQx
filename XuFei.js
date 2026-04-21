// 直接复制整个代码到 Quantumult X 的「重写 - 脚本」里
let url = $request.url;

// 拦截目标接口：https://api.iosxx.org/v4/client/key-v3
if (url.indexOf("/v4/client/key-v3") !== -1) {
    // 强制返回服务端正确的 JSON 结构，模拟登录成功
    let response = {
        status: 200,
        headers: {
            "Content-Type": "text/html"
        },
        body: JSON.stringify({
            "code": 0,
            "msg": "success",
            "data": {
                "token": "FAKE_TOKEN_" + Math.random().toString(32).slice(2),
                "expire": "2026-12-31 23:59:59",
                "level": 999,
                "isVip": true
            }
        })
    };
    $done(response);
}