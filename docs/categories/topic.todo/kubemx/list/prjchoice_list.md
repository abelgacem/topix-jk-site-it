<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>


[//]: #(Reference)
[Repo_Readme]:    ../README.md

# [&larr;][Repo_Readme]Project > Kube Mx > List > Project's prerequisit
|||
|-|-|
|Purpose|document this projet's choices, prerequisits|
<br>


# project's prerequisit summary
the choice was made to 
  1. use tool:docker rather than tool:packer to build images@docker in this project
  1. test the kubernetes cluster creation on
     1. ovh:vps
     1. aws:ec2
  1. choose Hasicorp vault to store secrtes   


# project's prerequisit detail

### Docker rather than Packer
choice was made to use docker to create image@docker used by the cluster kubernetes
- I am a docker expert for building image that
  - can easily share var between different docker images of different projects
  - can easily share var between services built on theses image@docker

### Use Ovh to test Cluster Creation
choice was made to use ovh:vpos to test this project 
- Ovh was clear on price for vm (ie 30 euros per month for 4 vm:20Go - used or not)
- Aws was not clear on price for vm (aka ec2) used or not
- Ovh:vps are kind of network:realistic 
  - they need network info to communicate between them
    - keypub
    - keypriv
    - user
    - authorized keys
- Ovh:vps can be reinitialized in less than 4 minutes with a fresh new OS ()
  - Cons: via gui
  - Pros: find a way to do it via api

### Aws after Ovh
choice was made to then use aws:ec2 to test this project before exploring Aws:"cost of feature"

