# [&larr;][Repo_Readme]Doc > [GitlabCI][Topic_Readme] > [Definition][STopic_List] > Environment

[//]: #(Reference)
[Repo_Readme]:   ../../README.md
[Topic_Readme]:  ../README.md
[STopic_List]:   ../list/obj_list.md

[Environment_Whatis]:  ./env_whatis.md
[Deployment_Whatis]:   ./env_whatis.md

# See Also 

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Environment|[Definition][Environment_Whatis]|instruction
|Deployment|[Definition][Deployment_Whatis]|
<br>

# Definition
- Environments describe where code is deployed
- Allow to define which user can trigger the ci
- Each time GitLab CI/CD deploys a version of code to an environment, a deployment is created.

# Type
|Name|Description|
|-|-|
|static|env:name is static|
|dynamic|env:name can contains var|

# Member
- name
