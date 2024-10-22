---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp: 1
  ref:  
    child:
      - definition/template
      - howto/site
      - howto/hugo
      - howto/page
      - howto/data
      - howto/theme
---


# Create
create the file  **`layouts/_default/baseof.html`**  that is
  - 1 base file aimed to be extented

```html
<!-- template for page@(homepage, list, single) -->
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Pragma" content="no-cache">
<!-- js for translation in page@all - should not be override -->
<script src="/translation.js"></script>
<script src="/mermaid.min.js"></script>
<!-- css for page@all -->
{{block "css" .}}
  <link rel="stylesheet" href="/md.css">
{{end}}
<title>Topix</title>   
</head>
<body>
  {{ block "crumb" . }}
  {{end}}    

  {{ block "reference" . }}
  {{end}}    

  {{ block "body" . }}
  {{end}}
</body>
</html>

```

create file **`themes/mxhugth01/layouts/index.html`**  that is 
  - 1 extention the file : **`baseof.html`**
  - 1  `template`  of type  **`home`**  to render the home
  - used by  `theme`: `mxhugth01`

```go
{{ define "body" }}
<!-- override file:baseof:block:body for page@homepage -->
...
<h1>...</h1>
<h1>...</h1>
...
<!-- end > block:body-->
{{ end }}
```

create file **`themes/mxhugth01/layouts/_default/single.html`**  that is 
  - 1 extention the file : **`baseof.html`**
  - 1  `template`  of type  **`single`**  to render pages of type:  **`single`**
  - used by  `theme`: `mxhugth01`

```go
{{ define "crumb" }}
<!-- override file:baseof:block:crumb for page@single -->
...
<!-- end > block:crumb-->
{{ end }}

{{ define "reference" }}
<!-- override file:baseof:block:reference for page@single -->
...
<!-- end > block:reference-->
{{ end }}

{{ define "body" }}
<!-- override file:baseof:block:body for page@single -->

<!-- display the md content of the file  -->
{{.Content}}

<!-- end > block:body -->
{{end}}
```

create file **`themes/mxhugth01/layouts/_default/list.html`**  that is 
  - 1 extention the file : **`baseof.html`**
  - 1  `template`  of type  **`list`** to render pages of type:  **`list`**
  - used by  `theme`: `mxhugth01`

```go
{{ define "crumb" }}
<!-- override file:baseof:block:crumb for page@list -->
...
<!-- end > block:crumb-->
{{ end }}

{{ define "reference" }}
<!-- override file:baseof:block:reference for page@list -->
...
<!-- end > block:reference-->
{{ end }}

```

# Generic function
```
{{ FUNCTION ARG01 ARG02 ... }}
```

## add number
```
{{ add 1 2 }}
```



# Generic function
