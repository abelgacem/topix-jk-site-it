---
mx:
  trail: 1
---


# {{site.data.name.definition}}

## Containerization
- Derived from the noun "container".
- {{site.data.name.aka}} application's virtualization
- It consists of packaging an application and its dependencies into a image then instanciate a container from that image

## Container
- An isolated environment
- An instance of an **image**
- Allows applications to be virtualized.
- Usually run whtitn a {{site.data.name.vm}}.
- Can run within a container in very specific contexts (k8s).
- Needs a **container runtime** to be installed on the {{site.data.name.vm}}.
- Shares resources with the {{site.data.name.vm}}:
  - the kernel's {{site.data.name.os}}. 
- Has specific resources:
  - The Process space
- Can define specific resources:
  - User space
  - libraries
  - binaries
  - configuration files


# {{site.data.name.class}}
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
- `Root` containers (run as root user, elevated privileges)
- `Rootless` containers (do not require root user, providing enhanced security)

## {{site.data.name.toknow}}

- 1 container of type `rootless` is 1 container for which the root user within the container is not the root user within the Host.




# Todo
- Should the container be the same in the all environment (eg. test, dev, uat, staging, prod, test, homol, preprod, isoprod).
- what must guide the choice of the container runtime (Eg: Docker, CRI-O, containerd)
- when used 
  - dind = docker in docker
  - vnv  = vm in vm

# Container Image
- create a sevtion on this topic


# container as a services
interresting service image to build:
- {{site.data.name.git}}       as a service to manage             any Git repository
- {{site.data.name.ansible}}   as a service to provision          a fleet of {{site.data.name.vm}} or container
- {{site.data.name.vault}}     as a service to provide secret to  1 application
- {{site.data.name.terraform}} as a service to provision infra on 1 cloud
- {{site.data.name.aws}}       as a {{site.data.name.cli}} to act on             1 Aws cloud
