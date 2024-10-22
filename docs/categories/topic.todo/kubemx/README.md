<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:       ../../README.md
[Object_List]:       ./list/object_list.md
[Reference_List]:    ./list/reference_list.md
[Term_list]:  ./list/terminology.md
[Environment_List]:  .
[PrjChoice_List]:    ./list/prjchoice_list.md

# [&larr;][Repo_Readme]Project > Kube Mx
|||
|-|-|
|Folder Type|subfolder of a git repository/project|
|Purpose|document this projet's (ie subdomains and topics)|
<br>

# List of references
|Name|Learning path|View|Description
|-|-|-|-|
|Object|see|[List][Object_List]|List this project's objects
|Terminology|see|[List][Term_list]|List this project's terms
|Reference|see|[List][Reference_List]|List this project's terms
||
|Choice|see|[List][PrjChoice_List]|List this project's choices, prerequisits
|Environmentsee|[List][Environment_List]|List this project's environment
<br>


# Definition / Requirements
Automates the following tasks
  - create 1 kubernetes cluster infrastructure on
    - AWS, VmWare, Openstack, Ovh:Vps
    - subtasks
      - provision the VMs of the cluster to make it 1 kubernetes cluster:Member
  - provision 1..N VMs to manage the cluster
    - 1 VM outside the cluster
    - 1 VM inside the cluster

# To know
- Aws and Ovh provide 1 managed Kubernetes cluster in les than 5 minutes. 
- the price is not known exactly. 
- When Issues occured interactions follows Aws/Ovh workflow rules even thoughSLA (Service Level Agrement) exists.
  - telephone, mail

