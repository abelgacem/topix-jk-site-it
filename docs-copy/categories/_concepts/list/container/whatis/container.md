---
layout: topic
mx:
  trail: 0
---


# Definition
- 1 instance of 1 image
- 1 evolution of the {{site.data.name.linux}}:concept:{{site.data.name.process}} to {{site.data.name.linux}}:concept:{{site.data.name.container}}
- allows to 
  - Iisolate a tree of process
  - Run Applications's processes in 1 isolated environment

# Member
- `Runtime`
- Image
- Configuration

# Category
related to standard
- `Docker`
- `Buildah`
- `Oci` compliant or not
- `Lxc`, `Lxd`

related to the type of application inside the container
- [`Not`]Server

related to security
- [`Not`]`Root` (i.e rootless)


# container of type  `rootless` 
- 1 container for which
  - user@`root` inside container is not user@`root` on host
