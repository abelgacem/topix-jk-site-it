---
draft : true
mx:  
  lp:
  ref:
    - child: definition/login
    - child: definition/push
    - child: definition/pull
---

# Login to Registry before push or pull
```bash
# To registry@(gitlab, docker)
lTOKEN_GITLAB_NAME="GITLAB_ABTIT_AT"
lTOKEN_GITLAB_PWD="xx"
lTOKEN_SERVER_HOST="registry.gitlab.com"
docker login --username ${lTOKEN_GITLAB_NAME}  --password ${lTOKEN_GITLAB_PWD} ${lTOKEN_SERVER_HOST}

docker login registry.example.com:5000 --username my_username --password my_password
```

# Logout
```bash
docker logout registry.example.com:5000
```
# Use kvpair

```powershell
# Login to Registry before push or pull to registry@(gitlab, docker)
lTOKEN_GITLAB_NAME="******"
lTOKEN_GITLAB_PWD="******"
lREGISTRY_DNSORIP="registry.aduneo.com"
lREGISTRY_DNSORIP="registry.gitlab.com"
lREGISTRY_DNSORIP="registry.example.com:5000"

docker login --username ${lTOKEN_GITLAB_NAME}  --password ${lTOKEN_GITLAB_PWD} ${lREGISTRY_DNSORIP}
```

# Use docker config file
- login using kvpair
- this action will generate file *~/.docker/config.json*
- store this file in 1 var
- create/delete file *~/.docker/config.json* on demand

# Logout
```bash
lREGISTRY_DNSORIP="registry.example.com:5000"
docker logout ${lREGISTRY_DNSORIP}
```
