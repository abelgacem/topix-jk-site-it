<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:  ../list/object_list.md
[Item_Whatis]:  ../whatis/code_whatis.md


# [&larr;][Repo_Readme] Hugo > code > Howto ([Definition][item_whatis])
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>


# manage var@`frontmatter`
- create var (files into folder:`content`)
```
---
title : 'BBBBBB'
date  : 2024-02-03T07:59:09Z
draft : false
author: 'file > arche.. > default B'
tags  : ["math", "whatis"]
categories  : ["cat01"]
mxKey01  : 'Mykeyvalue'
mxcolor  : 'blue'
---
```
- access var (files into folder:`layout`)
```ini
# example
{{ .params.mxKey01 }}

# example
<h1 style="color={{ .params.color }};">{{.Title}}</h1>
```

# manage a var@`template`
- create
```
{{ $mxVarName := "mxValue" }}
```
- access

```
{{ $mxVarName }}
```



# manage function
```ini
# example
{{ truncate 10 "sdsqd dsqqsd qdsqd qsd"}}
{{ add 10 12 }}
{{ singularize "items" }}
```
## range
```ini
# generic - loop thru a collection
{{ range ASet }} ... {{end}}

# example - loop thru a all pages of the current section
{{ range .Pages }}
  {{ .Title }}
{{ end }}

# get the current page title
{{ $title := .Title }}
# example - loop thru a all pages of the site (aka inside the folder=`content`)
{{ range .Site.Pages }}
  <li><a style:"{{ if eq .Title $title }} background-color:yellow; {{ end }}" href='{{ .Permalink }}'>{{ .Title }}</a></li>
  {{ .Title }}
{{ end }}
```

# Manage String
```ini
# concat
{{ $Var01     := "Value01" }}
{{ $Var02     := printf "data/%s/" $Var01 }}
```

# Manage Json
```ini
# display a yaml/json/toml
{{ range    .Site.Data.folder.file }}
  {{.key01}}
  {{.key02}}
  ...
{{ end }}
```

# Manage Dict
```ini
# passing a dict to a partial
## example
{{ partial "mxHeader" (dict "key01" "val01" "key02" "val02" ...) }}

## example
{{ partial "mxHeader" (dict "key01" .kind "Template" "single" ...) }}
```

# Manage Array
```ini
## get last part of an array
{{ $test    := index (split .File.Dir "/") (sub (len (split .File.Dir "/")) 2) }}

## get item
{{ $mxCrumbItem    := split .File.Dir "/" }}
{{ index $mxCrumbItem 0}} @ {{ .Title }}
{{ index $mxCrumbItem 1}} @ {{ .Title }}
{{ index $mxCrumbItem 2}} @ {{ .Title }}
{{ index $mxCrumbItem 3}} @ {{ .Title }}
```


# Manage String
```ini
## replace
{{ $mxDomainName       := replace .Section "dom-"  " " }}
```

# If then else
```ini
{{ if not (eq $mxDomainName .Title)  }} {{ .Title }} {{ end }}
```
# Get custom froontmatter
```ini
{{ $IndexType := .Params.mx.index }}
```

# Read json
```ini
{{ range .Site.Data.math.domain.domain }}
    <hr>
    Name:     {{ .name }}<br>
    Elements: {{ .element }}<br>
    Desc:     {{ .description }}<br>
   </hr>
{{ end }}
```

# Partial
```
{{ partial "header" (dict "Kind" .Kind "Template" "List") }}
{{ partial "footer" (dict "Kind" .Kind "Template" "List") }}

```