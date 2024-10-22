---
draft : true
mx:  
  ref:
    child:
      - definition/ansible-vault
      
---


# Usage
```bash
lVAULT_FILE="myvault.yml"
# interactive
## crypt file
ansible-vault encrypt ${lVAULT_FILE}
## display content, not decrypt file
ansible-vault view    ${lVAULT_FILE}
## decrypt file
ansible-vault decrypt ${lVAULT_FILE}
```

# Provide vault pwd when testing
```powershell
# Allow ansible to view var@(ansible, crypted) in code
export ANSIBLE_VAULT_PASSWORD_FILE="/tmp/vault"
echo "xxxxxx" > /tmp/vault
```

