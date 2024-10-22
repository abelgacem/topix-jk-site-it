# [&larr;][Repo_Readme]Domain > Computer Science > ai > Howto > Anaconda


[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

[Anaconda_Whatis]: ../whatis/anaconda_whatis.md
[Jupyter_Howto]:   ../howto/jupyter_howto.md

# List of references

|Nom|Type|View|Description|
|-|-|-|-|
|Anaconda|See|[Definition][Anaconda_Whatis]|
|Jupyter|See|[Howto][Jupyter_Howto]|
<br>


# UninInstall
```bash
# install tool
conda install anaconda-clean
# uninstall
anaconda-clean ––yes
```

# Install Anaconda
```powershell
# download anaconda
lRELEASE="Anaconda3-2022.10-Linux-x86_64.sh"   # vm
lRELEASE="Anaconda3-2022.10-Linux-aarch64.sh"  # mac
lSERVER="repo.anaconda.com"
lURL=https://${lSERVER}/archive/${lRELEASE}
wget -P /tmp ${lURL} 

# install anaconda - follow instruction
chmod +x /tmp/${lRELEASE}
/tmp/${lRELEASE}
```

# to know
```bash
conda config --set auto_activate_base false
```
# Test anaconda
```powershell
conda --help
conda info --envs
conda activate envname
conda create --name env-py35 python=3.9
conda activate env-py35
ll anaconda3/envs/env-py35/
```


# install via conda-for

# manage venv
```bash
# create venv with python 3.6
conda create --name airflow python=3.6
conda create --name airflow python=3.6 --chanel
conda create --name myenv python=3.7 --channel mychannel
```

# activate
conda activate airflow

# deactivate
deactivate

# remove venv




```
# define another base venv
```bash
# default is $CONDA_HOME/venvs
```

# create 1 venv in default base venv
```bash
conda create -n myenv python=3.9
conda create -n myenv python=3.8
```

# create 1 venv in another base venv
```bash
conda create -n myenv python=3.9
```

# Manage env
```bash
# create
conda 
# enter
conda activate env-py35
```
# Search a channel that have python 3.7 for ubuntu 22.10
```
conda search python=3.7.* --platform linux-64    
conda search python=3.7.* --platform noarch
```

# add a channel to conda
```
conda config --add channels mychannel
```

# List channels
```
conda config --show channels
```


# todo
````
conda create --no-default-packages -n airflow python=3.6

conda activate airflow

pip install apache-airflow[postgres,s3] --no-cache-dir
```

