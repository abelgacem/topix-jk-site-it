---
mx:
  ref:
    - whatis/containerization
---


# {{site.data.name.definition}}
- An isolated environment
- An instance of an image
- Runs in a {{site.data.name.vm}} or in a container
- Light (compare to VM)
- Portable across OS
- Only needs a **container runtime**
- Shares resources with the Host {{site.data.name.vm}} OS:
  - kernel
- Can define specific resources:
  - User space
  - process space

- Provide its own 
  - libraries
  - binaries
  - configuration files

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
