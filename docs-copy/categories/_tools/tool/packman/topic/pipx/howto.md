---
draft : false
mx:
  lp:
  ref:
    child:
      - definition/account
---

# install ansible@full
```bash
pipx install --include-deps ansible
```

# install ansible@core
```bash
pipx install ansible-core
pipx install ansible-core==2.12.3
```

# Upgrade ansible
```bash
pipx upgrade --include-injected ansible
```

# install argcomplete for ansible
```bash
pipx inject --include-apps ansible argcomplete
```

