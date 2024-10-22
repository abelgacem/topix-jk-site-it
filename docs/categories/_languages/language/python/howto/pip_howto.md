<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>


[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Item_Whatis]:   ../whatis/pip_whatis.md

[Pip_Whatis]:     ../whatis/pip_whatis.md
[Venv_Whatis]:    ../whatis/venv_whatis.md

# [&larr;][Repo_Readme]Domain > Language > Python > Howto > pip ([Definition][Item_Whatis])



# Install package@pip

```bash
# activate venv
lVENV_FULLPATH="~/workspace/python/env_airflow"
source ${lVENV_FULLPATH}/bin/activate

# install package version latest
python -m pip install novas

# install specific package version 
python -m pip install requests==2.6.0

# install from git
pip install -e git+https://github.com/ovh/python-ovh.git#egg=ovh

# upgrade existing package to version latest 
python -m pip install --upgrade requests

# install dependencies from file 
python -m pip install -r requirements.txt
pip install -r requirements.txt
```

# Create a file from package@(pip installed)
```bash
# generate dependencies for a project
pip freeze > requirements.txt
# other
 python -m pip freeze > requirements.txt
```

# Delete package@pip

```bash
python -m pip uninstall novas
pip uninstall novas
```


# Information

```bash
# List all package installed 
python -m pip list

# List all package installed with a format compatible with file requirements.txt
python -m pip freeze

# dispaly info on 1 package
python -m pip show wheel

# list versions available
pip index versions cryptography
```




# Todo
```bash
pip --use-deprecated legacy-resolver install "apache-airflow==${AIRFLOW_VERSION}" --constraint "${CONSTRAINT_URL}"
python -m pip install --upgrade pip
python -m pip install --no-cache-dir paramiko<2.9.0
python -m pip install --upgrade --pip==20.2.4 
python -m pip install --upgrade paramiko==2.9.0
python -m pip install --upgrade <package>==<version>
export PYTHON_VERSION="$(python --version | cut -d " " -f 2 | cut -d "." -f 1-2)"
python -m pip install --index-url http://index.example.com/simple/ SomeProject
python -m pip install -r requirements.txt
```