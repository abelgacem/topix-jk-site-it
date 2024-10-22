---
draft : false
mx:
  lp:
  ref:
    child:
      - definition/account
---

# install ansible 
```bash
# install gcc
## for alpine
apk add build-base libffi-dev

# ansible:version:latest with package:all in /home/user/
python3 -m pip install --user ansible

# ansible:version:latest with package:all in the venv (if one is activated)
python3 -m pip install ansible

# ansible:version:latest with all package@core in /home/user/
python3 -m pip install --user ansible-core

# ansible:version:latest with all package@core in the venv (if one is activated)
python3 -m pip install ansible-core

# ansible:version:specific with all package@core in /home/user/
python3 -m pip install --user ansible-core==2.12.3

# ansible:version:specific with all package@core in the venv (if one is activated)
python3 -m pip install ansible-core==2.12.3
```

# upgrade ansible version:all

```bash
python3 -m pip install --upgrade --user ansible
python3 -m pip install --upgrade ansible
```

# Check pip is installed
```bash
python3 -m pip -V
```

# upgrade
```bash
# according to os:version
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