---
draft : true
mx: 
  lp:
  ref:
    child:
      - definition/cve
---


# Configre Access token as an envar
```bash
# file ~/.git-credentials
git config --global credential.helper store
# in memory during 
git config credential.helper cache
# in memory during 1 hour
git config credential.helper git config credential.helper 'cache --timeout=3600'
git config --global credential.helper 'cache --timeout=3600'
```


# configure git to use credentials as envar
## method
- update file ~/.gitconfig (maybe not mandatory)

```powsershell
git config --global url."https://api@github.com/".insteadOf "https://github.com/"
# git config --global url."https://ssh@github.com/".insteadOf "ssh://git@github.com/"
# git config --global url."https://git@github.com/".insteadOf "git@github.com:"
```

  - this cli generate the following lines in ~/.gitconfig:

```ini
[url "https://api@gitlab.com/"]
	insteadOf = https://gitlab.com/
```  
- create script@exe
```powsershell
echo 'echo $GIT_TOKEN' > $HOME/.git-askpass
chmod +x $HOME/.git-askpass
```

- define envar 
```powsershell
export GIT_TOKEN="glpat-..."
export GIT_ASKPASS=$HOME/.git-askpass
```

- do action with git
```powsershell
git clone xxx
```


