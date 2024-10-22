# To registry@(gitlab, docker)
## from ci
```powershell
```

## from outside gitbal
```powershell
# To registry@(gitlab, docker)
lTOKEN_GITLAB_NAME="vscode-git-AT"
lTOKEN_GITLAB_KEY="******"
lREGISTRY_GITLAB="gitlab.example.com"
lREGISTRY_GITLAB="registry.example.com:5000"
docker login --username ${lTOKEN_GITLAB_NAME}  --password ${lTOKEN_GITLAB_KEY} ${lREGISTRY_GITLAB}
```

# Move project to another group

```shell
Project > Settings > General > Advanced > Transfer project  
```
