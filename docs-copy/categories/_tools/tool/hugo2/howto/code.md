---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp:       2
  ref:  
    child:
      - definition/code
      - list/code
---


# best practice to acces some var objects
```go
// global object
{{ site.Params.foo }}

// global object
{{ page.Params.foo }}
```
