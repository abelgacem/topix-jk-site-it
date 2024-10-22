# [&larr;][Repo_Readme]Domain > Computer Science > Network > What is > Cidr

[//]: #(Reference)
[Repo_Readme]:       ../Readme.md



# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>

# Definition
- a server listen from incoming connection/request
- by default, a lot of server bind only to the localhost (127.0.0.1), that mean
  - they only accept connections originating from the same machine where the server is running (This is a security measure to limit exposure to external networks)
- To tell the server to listen request from outside from 
  - outside the container
  - from a machine where the server is not running
  - the server need to listen on all available network interfaces

# example
```powershell
# for hugo
hugo server --bind 0.0.0.0 -p 1313

```