---
mx:  
---

# configure git to use credentials as var@env

- create script@shell
```bash
# define var
lGIT_FILE_ASKPASS="${HOME}/.git-askpass"

# create file
echo 'echo $env_GIT_TOKEN' > ${lGIT_FILE_ASKPASS} && chmod +x ${lGIT_FILE_ASKPASS}
```

- define var@(env, git)
```bash
export GIT_ASKPASS=${lGIT_FILE_ASKPASS}
```

- define var@(env, custom)
```bash
export env_GIT_TOKEN="glpat-..."
```
