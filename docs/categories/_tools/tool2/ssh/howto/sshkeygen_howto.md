<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/cli_list.md
[Keygen_Whatis]:   ../whatis/keygen_whatis.md

# [&larr;][Repo_Readme]Domain > Computer Science > SSH > Cli > Howto > manage > Ssh Keygen
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Keygen|[Definition][Keygen_Whatis]|
<br>



# generate sever key
```bash
# generate all the missing host keys for the server
# theses server's host key is checked against the client's list of trusted host keys (known_hosts)
ssh-keygen -A
```
# Example
```powershell
# Define var
lKEY_NAME="my-key"
lKEY_FOLDER="~/.ssh"
lKEY_FILE_NAME="${lKEY_NAME}"
lKEY_PATH="${lKEY_FOLDER}/${lKEY_FILE_NAME}"

#
ssh-keygen -t rsa -C ${lKEY_NAME} -f ${lKEY_PATH}
```