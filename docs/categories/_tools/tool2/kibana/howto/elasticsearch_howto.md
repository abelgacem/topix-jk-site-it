<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:      ../list/object_list.md
[Kibana_Whatis]:    ../whatis/kibana_whatis.md
[Es_Whatis]:        ../whatis/elasticsearch_whatis.md

# [&larr;][Repo_Readme] Elk > Howoto > Elasticsearch
# See Also 
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Kibana|[Definition][Kibana_Whatis]|
|Elasticsearch|[Definition][Es_Whatis]|
<br>

# display info
```bash
# list template
curl -X GET "localhost:9200/_template"
# list index
curl -X GET "localhost:9200/_cat/indices?v"
# cluster info
curl -X GET  "localhost:9200"
```


# Process
- create 1 file for logstash and put it in /etc/logstash/conf.d with name xxx.conf
  - ask logstash to create index for es
-   
- gui > kibana > management stack management > kibana > index Patterels