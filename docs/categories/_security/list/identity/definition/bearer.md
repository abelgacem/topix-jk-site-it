---
---

# Defiition

- Bearer authentication is a type of access token-based authentication named bearer tokens
- uses HTTP requests
## purpose
- e.g: secure access to resource via API

# process
- the client get an access token from an authorization server
- the client make an HTTP request (send a requestto the server) that includes the header: `Authorization`
```ini
Authorization: Bearer <access_token>
```
- the server validate (e.g expiration, properly signed, user, permissions) or not the token
- if validated then the access/operation/action to the requested resource is OK

