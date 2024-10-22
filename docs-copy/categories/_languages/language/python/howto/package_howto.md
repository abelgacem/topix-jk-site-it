<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Whatis]:   ../whatis/package_whatis.md

# [&larr;][Repo_Readme]Domain > Language > Python > Howto > package ([Definition][Item_Whatis])

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>

# create a tar.gz or Whell to be installable by pip
- (old way) create file `setup.py` 
- (new way) create file `pyproject.toml` and `setup.cfg` (new ways)


# import
```python
from package_name import module_name
from package_name import *
```





# build a package distrib
- create a folder tree below `~/wkspc/rstdlib`
  - folder: 
    - name: `abtit/rstdlib`
    - desc: contains the code
    - info: this folder will later be copied to `site_package`
  - file: 
  - `LICENSE`
  - `README`
  - `pyrpoject.toml`

```powershell
# install lib
pip install --upgrade build  (in venv)

# build package
cd ~/wkspc/rstdlib
rm -rf ./*egg* && rm -rf ./dist && python -m build

# cf output to folder: dist
```

# upload distrib to registry@gitlab

```powershell
# copy config file - that define were to copy the package
cp ./pypirc ~/.pypirc

# define var@(env, sdef)
export TWINE_PASSWORD='git token'

# upload 
l_PACKAGE_ID='abtit_rstdlib'
python -m twine upload --repository ${l_PACKAGE_ID} dist/*
```

# install distrib locally
## from registry@(gitlab, group) 
```powershell
# this solution is better cause more generic
l_PACKAGE_ID="abtit_rstdlib"
l_GROUP_ID="79430905" OR
l_GROUP_ID="glabtit%2Fproject%2Fprj-python"

pip install ${l_PACKAGE_ID} --force-reinstall --index-url https://gitlab.com/api/v4/groups/${l_GROUP_ID}/-/packages/pypi/simple
```

## from registry@(gitlab, project) 
```powershell
l_PACKAGE_ID="abtit_rstdlib"
l_PROJECT_ID="59066758" OR
l_PROJECT_ID="glabtit%2Fproject%2Fprj-python%2Frstdlib"

pip install ${l_PACKAGE_ID} --force-reinstall --index-url https://gitlab.com/api/v4/projects/${l_PROJECT_ID}/packages/pypi/simple
```



# import the installed package
```python
from abtit.rstdlib import MxRLib
...
```

# Todo
- Publish the tar.gz that was created in folder dst into a registry@gitlab
- Import the package from gitlab

- cf. [Module][Module_Howto]