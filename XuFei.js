// 适配你这个接口的 Quantumult X 重写脚本
$done = function(s) {
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
                "level": 999,
                "isVip": true
            }
        })
    };
};