<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:      ../list/object_list.md
[Node_Whatis]:      ../whatis/node_whatis.md
[Document_Whatis]:  ../whatis/document_whatis.md

# [&larr;][Repo_Readme] Elk > What is > Es:Field
# See Also 
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Node|[Definition][Node_Whatis]|
|Document|[Definition][Document_Whatis]|
<br>

# Definition
- contains data

# Toknow
- The type of the field defines how elastic analyse it
  - usecase: strings index as text 
  - usecase: strings index as keyword

# Member
- 1 type
- 1 Value (ie the data)
# Type

- alias
- string
- Numbers (eg long, double, ...)
- Date
- boolean
- binary
- Keywords
- object
- flattened
- nested
- join
- geographic
  - get_point
  - geo_shape
- specific
  - token_count
  - join
  - rank_features
  - dense_vector, etc ..  

# Toknow
- 1 field has
  - 1 field data type (field type)
