# todolist

## 登录鉴权

### Session 机制

### JWT 机制

> JWT = Json Web Token
>
> - 在 HTTP 接口调用的时候，服务端经常需要对调用方做认证，以保证安全性。
> - JWT 经常在 header 传入一个 authorization 字段，值为对应的 jwt_token，或者也有图方便直接写在 json 中这种用法

相关链接

- [JWT 官网](!https://jwt.io/)
- [RFC](!https://datatracker.ietf.org/doc/html/rfc7519) 开源标准

JWT 的三个部分

- Header
- Payload
- Signature

即`Header.Payload.Signature`
