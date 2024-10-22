---
draft : true
mx:  
  lp: 0
  ref:
    child:
      - definition/mx
---

# install
- `git clone`  the repository
```bash
# define var
lREPO_URL='https://xxx:yy@gitlab.com/glabtit/library2/lib-bash.git'
git clone $lREPO_URL 
```
- source the file
```bash
# define var
. Path/To/lib-bash/mx.sh
```

# play a wrapped CLI
- use tabulation for completions
```bash
mx ...
mx docker ...
mx terraform ...
mx ansible ...
...
```



