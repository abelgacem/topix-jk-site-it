# [&larr;][Repo_Readme]Domain > Computer Science > Nginx > Howto > Other

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

[Anaconda_Howto]:   ../../ai/howto/conda_howto.md


# install server@nginx
```bash
docker pull nginx
docker run -d --name cnginx -p 8080:80  nginx
curl http://localhost:8080
```

# Ckeck server is running
```bash
# method
curl curl http://localhost:8080
# method
Browse curl http://localhost:8080
```