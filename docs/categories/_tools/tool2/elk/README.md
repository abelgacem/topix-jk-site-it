<head><link rel="stylesheet" href="../../md.css"/><script src="../../md.js"></script></head>


[//]: #(Reference)
[Repo_Readme]:        ../README.md
[Object_List]:        ./list/object_list.md
[Reference_List]:     ./list/reference_list.md
[Terminoilogy_List]:  ./list/term_list.md


# [&larr;][Repo_Readme]Domain > Computer Science > ELK
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Object|See|[List][Object_list]|List of Whatis,Howto, List
|Reference|See|[List][Reference_List]|List of external references
|Terminology|See|[List][Terminoilogy_List]|List of definition of terms
<br>


# Definition
Is1 set of tool (aka stack) usually but not only made of the following tools
  - Elasticsearch
  - Kibana
  - Logstash


# elk and services
Each tool in the stack , act (but not only) as a client/server that listen for incomming request

|Name|Port|Description|
|-|-|-|
|Kibana|5601|Gui|
|Elasticsearch|9200|listen for query (eg curl -X GET localhost:9200/)|
|Logstash|5044|Beats interface, receives logs from Beats such as Filebeat|

# To know
# Todo
## install stack from 1 dockerhub app
```bash
# pull image
docker pull sebp/elk:742
# start stack
sudo docker run -d --name celk -p 5601:5601 -p 9200:9200 -p 5044:5044 sebp/elk:742
```

