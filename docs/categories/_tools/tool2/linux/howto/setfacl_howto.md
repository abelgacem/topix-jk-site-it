# [&larr;][Repo_Readme] Linux > Howto > Setfacl

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

[Setfacl_Whatis]:   ../whatis/setfacl_whatis.md

# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Setfacl|See|[Definition][Setfacl_Whatis]|
<br>



# Install
```bash
sudo apt install acl -y
```

# Usage
```bash
# generic
setfacl [option] [action/specification] file
# action can be
-m (modify)
-x (delete)
-d (defaults)
```

# set acl@defaults for 1 folder
```bash
lFOLDER_PATH="/tmp/test"
lUSER_NAME="accounting"
sudo setfacl -d -m accounting:rwx ${lFOLDER_PATH}
```

# grant user crictl
```bash
lFOLDER_FILE="/run/containerd/containerd.sock"
lUSER_NAME="ubuntu"
sudo setfacl --modify u:${lUSER_NAME}:rw /run/containerd/containerd.sock
```

# revoke user crictl
```bash
lFOLDER_FILE="/run/containerd/containerd.sock"
lUSER_NAME="ubuntu"
sudo setfacl -x u:${lUSER_NAME} /run/containerd/containerd.sock
```
