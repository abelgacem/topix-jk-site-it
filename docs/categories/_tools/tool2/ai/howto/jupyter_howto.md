# [&larr;][Repo_Readme]Domain > Computer Science > ai > Howto > Jupyter


[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

[Anaconda_Howto]: ../howto/anaconda_howto.md
[Jupyter_Whatis]: ../whatis/jupyter_whatis.md

# List of references

|Nom|Type|View|Description|
|-|-|-|-|
|Jupyter|See|[Definition][Jupyter_Whatis]|
|Anaconda|See|[Howto][Anaconda_Howto]|
<br>


# Install
```bash
pip install notebook
```

# Play with jupiter notebook
```powershell
# Start jupiter
## on remote - open port
sudo ufw allow 8888/tcp
## on remote - start jupyter
jupyter notebook --no-browser --port=8888
## on local  - forward port
ssh -N -f -L localhost:8080:localhost:8888 o4u
## on local  - browse
http://localhost:8080/?token=7d7323144d21d8c2821302b98a4c138581ba4b381ce0114d
````

