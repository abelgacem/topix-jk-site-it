---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp: O
  ref:
    child:
      - howto/podman
    parent:
      - buildah/definition/buildah
    content:
      - organization/definition/Redhat
---

# Definition
- 1 CLI
- Replacement > for
    - CLI:`docker`
    - CLI:`Buildah`
- Used to manage
  - Image of type  `OCI`
  - Container of type  `OCI`
  - Container of type  `docker`
  - `Dockerfile`
- fully integrates with `systemd`
- provided by RedHat
- uses  `RunC`
- Allows to  
  - run Containers in Pods
  - generate unit files from containers
  - run`systemd`  within a container

# Type
- [Not]Sudo
  - Reference: https://www.vultr.com/docs/how-to-install-and-use-podman-on-ubuntu-20-04

# Folder
- /var/lib/containers (instead of Docker:/var/lib/docker)
- ~/.local/share/containers
- /etc/containers/registries.conf

# Toknow
- container running in rootless mode have Address.Ip="none"
