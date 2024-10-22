<head><link rel="stylesheet" href="../../md.css"/><script src="../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:         ../README.md

[Bash_Array_Howto]:    ../topic/bash/howto/array_howto.md  
[Bash_Var_Howto]:      ../topic/bash/howto/var_howto.md
[Var_Whatis]:          ../whatis/variable_whatis.md
# [&larr;][Repo_Readme]Domain > Language > What is > 1 array

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|array|bash||[Howto][Bash_Array_Howto]|||
|var|bash||[Howto][Bash_Var_Howto]|||
|var|||[Definition][Var_Whatis]|||
<br>

# Definition
- Is usually a set of strings of characters.
- Can be seen a à kvpair with
  - key: the index of the element in the array. usually an integer
  - value: the element itself in the array. it can be a string tha shoul be intertretes as
     - string
     - number
     - array

# Advantage of using arrays in bash rather than string
- Easy Iteration over element or index
- Easy add or remove elements
- Elements can be string, number or array

# Associative array
- is one array for which
  - key can be a "string" instead of a "number"