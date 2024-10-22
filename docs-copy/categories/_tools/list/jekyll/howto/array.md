---
mx:
  description: build an artifact
---


# declare
```shell
\{\%
assign lLIST_CATEGORY = {{lLIST_CATEGORY | split: "/"}}
\%\}
```

# define
```
\{\% for lCATEGORY in site.collections \%\}
  {% unless lCATEGORY.label == "posts" %}
  {% assign lLIST_CATEGORY = lLIST_CATEGORY | push: lCATEGORY.label %}
  {% endunless %}
\{\% endfor \%\}
```

# loop
```
\{\% 
for lCATEGORY in lLIST_CATEGORY %}
  ...

\{\% 
endfor 
\%\}
```
