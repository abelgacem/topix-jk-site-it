<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:      ../list/object_list.md
[Es_Howto]:         ../howto/elasticsearch_howto.md
[Document_Whatis]:  ../whatis/document_whatis.md
[Kibana_Whatis]:    ../whatis/kibana_whatis.md

# [&larr;][Repo_Readme] Elk > What is > Elastic search
# See Also 
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Elasticsearch|[Howto][Es_Howto]|
|Kibana|[Definition][Kibana_Whatis]|
|Document|[Definition][Document_Whatis]|
<br>

# Definition
- is1 tool
- manages documents and documents's data
  - Index documents
    - find information quickly in a big amounts of documents and document's data
  - collect documents via logstash
  - Analyse
    - Convert unstructured text, into 1 elastic structured format that’s optimized for search.

# Configuration
the file:/etc/elasticsearch/elasticsearch.yml is used to configure:
-  cluster
- node
- paths
- memory
- network
- discovery
- gateway

the file: /etc/default/elasticsearch is used to configure:
 - todo

# Toknow
- documents's data can be
  - structured
  - unstructured
  - log file
- Elasticsearch is 1 service running in 1 vm that
  - can listen on request from any vm that can reach him (0.0.0.0)
  - usually listen request on port 9200