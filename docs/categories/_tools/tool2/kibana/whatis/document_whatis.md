<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Es_Whatis]:      ../whatis/elasticsearch_whatis.md
[Index_Whatis]:   ../whatis/index_whatis.md
[Field_Whatis]:   ../whatis/field_whatis.md
[Node_Whatis]:    ../whatis/node_whatis.md

# [&larr;][Repo_Readme] Elk > What is > 1 Document
# See Also 
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Index|[Definition][Index_Whatis]|
|Field|[Definition][Field_Whatis]|
|Node|[Definition][Node_Whatis]|
|Es|[Definition][Es_Whatis]|
<br>

# Member
- Metada
- Data
# Definition
- is1 json 
- is1 set of fields (aka kvpair)
- todo:remove this line:can be conceptually be seen as 1 line of 1 table in RDBMS)

# Doxument's metadata
|name|type|description|
|-|-|-|
|_index||the doc:index (ie the index where the doc is stored)|
|_type||the doc:type|
|_id||the doc:id|
|_source||the doc:json (ie the doc itself)|
|_size||the doc:json:size|

# Example
```json
{
  "_index" : "votre type d'index",
  "_type" : "votre type d'index",
  "_id" : "1",
  "_source" : {
    "created_at" : "2021-06-07T16:24:32.000Z",
    "title" : "mon article",
    "content" : "ceci est le contenu mon article",
    "author" : "Hatim"
  }
}
```