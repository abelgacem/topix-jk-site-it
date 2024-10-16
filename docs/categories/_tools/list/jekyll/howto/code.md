---
mx:
  ref:
    - whatis:  code 
---


# include
- create a file in folder {{site.data.jekyll.include}}
```shell
touch debug.html
```

- use this file in any {{site.data.name.markdown}}
```liquid
\{\%- include debug.html -\%\}
```

