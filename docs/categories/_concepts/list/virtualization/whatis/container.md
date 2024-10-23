---
mx:
  ref:
    - whatis/containerization
---


# {{site.data.name.definition}}
- An isolated environment
- An instance of an image
- Allows applications to be virtualized by packaging them along with all their dependencies.
- Often run whtitn a {{site.data.name.vm}}.
- Can run within a container in very specific contexts (k8s).
- Needs a **container `runtime`** to be installed on the {{site.data.name.vm}}.
- Shares resources with the {{site.data.name.vm}}:
  - the kernel's {{site.data.name.os}}. 
- Have specific resources:
  - The Process space
- Can define specific resources:
  - User space
  - process space
  - libraries
  - binaries
  - configuration files


To simplify the presentation, we can reduce the complexity by focusing on clarity and using a cleaner layout. Here's an approach where the information is split into clear, well-defined blocks with minimal overlap, more like a flowchart or segmented diagram:

---

# {{site.date.name.class}}
Containers can be categorized based on some of their charasteritics.

## Container Runtimes
Each with its own capabilities and purposes:
- {{site.data.name.buildah}}
- {{site.data.name.docker}}
- {{site.data.name.lxc}}
- {{site.data.name.lxd}}

## Container Specifications
Compliance with industry standards. Eg.:
- OCI. Compliant ((Open Container Initiative))
- Non-OCI Compliant

## Application Types within Containers
The category of application they host:
- Server-based containers (e.g., web server, database)
- Non-Server   containers (e.g., CLI., batch processing apps)

## Security Features
The security model they use:
- Root containers (run as root user, elevated privileges)
- Rootless containers (do not require root user, providing enhanced security)


# {{site.data.name.toknow}}
container of type  `rootless` 
- 1 rootless container is 1 container for which the root user within the container is not the root user within the Host.
