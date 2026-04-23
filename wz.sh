#!/bin/bash

# 一键安装并配置Socks5服务（固定：端口443，账号3188602，密码170412）
echo "====================================="
echo "  GitHub一键Socks5节点脚本"
echo "====================================="

# 安装依赖
apt update -y && apt install -y dante-server

# 固定配置信息
USER="3188602"
PASS="170412"
PORT="443"

# 生成配置文件
cat > /etc/danted.conf <<EOF
internal: 0.0.0.0 port $PORT
external: eth0
method: username none
user.privileged: root
user.notprivileged: nobody
user.client: nobody
client pass {
    from: 0.0.0.0/0 to: 0.0.0.0/0
}
pass {
    from: 0.0.0.0/0 to: 0.0.0.0/0
    log: connect error
}
EOF

# 添加系统用户和密码
useradd -M nobody -s /usr/sbin/nologin
echo "$USER:$PASS" > /etc/danted.pass
chmod 600 /etc/danted.pass

# 启动服务并设置开机自启
systemctl enable danted
systemctl restart danted

# 放行端口
ufw allow $PORT/tcp || iptables -A INPUT -p tcp --dport $PORT -j ACCEPT

echo "====================================="
echo "✅ 节点配置完成！信息如下："
echo "-------------------------------------"
echo "  服务器地址：$(hostname -I | awk '{print $1}')"
echo "  端口：$PORT"
echo "  用户名：$USER"
echo "  密码：$PASS"
echo "  协议：Socks5"
echo "====================================="
echo "  Shadowrocket配置："
echo "  类型：Socks5"
echo "  地址：$(hostname -I | awk '{print $1}')"
echo "  端口：$PORT"
echo "  用户名：$USER"
echo "  密码：$PASS"
echo "====================================="