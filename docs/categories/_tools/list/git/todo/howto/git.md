---
mx:  
  lp: O
  ref:
    child:
      - howto/git
---

# Definition
- 1 SCM

# Module
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke

# Play a command from a speficic folder
```shell
# define var
lFOLDER_REPO='/home/lisa/wkspc/hugo'
# use option -C
git -C ${lFOLDER_REPO} submodule add -b master https://github.com/giraffeacademy/ga-hugo-theme.git theme
```
