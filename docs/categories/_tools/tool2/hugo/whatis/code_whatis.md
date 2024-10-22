<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:      ../list/object_list.md
[Item_Howto]:     ../howto/code_howto.md




# [&larr;][Repo_Readme] Hugo > Code > Definition ([Howto][Item_Howto])
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>

# Definition
- accessible only in files under folder:`layout` 
- not accessible to files in folder:`content` 
- add functiunalities to HTML to use it "like" a standard programing languages

# Type
- variables
- functions
- conditions

# Variable
```ini
{{ .Name_Variable }}

# boolean
True, False
```
# Function
```ini
# generic
{{ Name_Function param01 param02 }}
```
# Conditions
```ini
# generic
{{ if condition  }} ... {{ end }}
{{ if condition  }} ... {{ else }} ... {{ end }}
{{ if condition  }} ... {{ else if condition}} ... {{ else }} ... {{ end }}

# example - works with strings, numbers
{{ if eq $var1 $var2  }} ... {{ else }} ... {{ end }}

# example
{{ if not (eq $var1 $var2)  }} ... {{ else }} ... {{ end }}

# example
{{ if and (eq $var1 $var2) (lt $var3 $var2)  }} ... {{ else }} ... {{ end }}
```
# loop 
```ini
{{ range $k, $v := $mxCrumbItem }}
{{ if eq $k 0}}
    domaine > {{ $mxRootDomainName }} &gt;
    {{ continue }}
{{ end }}

{{$v}}
{{ end }}    
```
