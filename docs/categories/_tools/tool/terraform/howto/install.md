---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp: O
  ref:
    content:
      - organization/org/hashicorp
---

# Install inside a docker container
- create a docker base image with one linux OS inside (e.g alpine)
- download the necessary files from hashicorp
- check the file ownernership and integrity
- deploy the binary at destination
- launch the container in interactive mode

# Todo
- reference the  `dockerfile`  and  `dockercompose`  for container : `terraform`

# Allow completion
- for  `bash`  and  `zsh`  only, not for  `alpine`
```powershell
# create code in $HOME/.bashrc
terraform -install-autocomplete
```
