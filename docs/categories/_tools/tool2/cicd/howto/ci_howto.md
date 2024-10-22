# [&larr;][Repo_Readme]doc > [Gitlab][Topic_Readme] > [Howto][STopic_List] > manage >  Login

[//]: #(Reference)
[Repo_Readme]:   ../../README.md
[Topic_Readme]:  ../README.md
[STopic_List]:   ../list/howto_list.md

[AccessToken_Whatis]: ../../term/whatis/at_whatis.md

# See Also 

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Access Token|[Definition][AccessToken_Whatis]|
<br>



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
