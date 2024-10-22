<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:  ../list/object_list.md
[Item_Whatis]:  ../whatis/data_whatis.md


# [&larr;][Repo_Readme] Hugo > Data > Howto
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>


# Example
- the following files exists in folder:`data`
```yaml
# data/math/domain.yaml - an array ob objects
domain:
- name: Arithmetic
  element: Numbers
  description: The study of basic operations with numbers.
- name: Algebra
  element: Equations, Variables
  description: Involves the study of symbols and equations.
- name: Geometry
...
```

- display this file in a template:
```html
<!-- loop thru each item in the list -->
{{ range .Site.Data.math.domain.domain }}
    <hr>
    Name:         {{ .name }}<br>
    Element@base: {{ .element }}<br>
    description:  {{ .description }}<br>
   </hr>
{{ end }}

```