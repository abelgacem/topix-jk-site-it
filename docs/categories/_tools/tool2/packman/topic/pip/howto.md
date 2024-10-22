<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:       ../README.md
[Repo_Readme]:       ../../../../
[Object_List]:       ./list/object_list.md
[Reference_List]:    ./list/reference_list.md

# [&larr;][Repo_Readme]Domain > Computer Science > Package manager > Pip

# upgrade
```bash
python -m ensurepip -U
python -m pip install --upgrade pip setuptools wheel
```

# generate a file requirements.txt
```bash
python -m pip freeze > requirements.txt
```

# install from file
```bash
python -m pip install -r requirements.txt
```

# install from gitlab
```bash
pip install git+https://xxx:token@gitlab.com/glabtit/library2/lib-python.git
```

# Todo
- https://docs.gitlab.com/ee/user/packages/pypi_repository/
- https://docs.gitlab.com/ee/user/packages/workflows/build_packages.html