---
mx:  
  ref:
    - whatis/runc
---



# Definition
- 1 acronyme (open container initiative)
- 1 organization (open container initiative)
- Defines specifications@`Open`  on
  - Container Runtime
  - Container Image
- 1 specification/requirement for
  - `Container`
  - Image to instanciate `container`
- 1 project of the Linux Foundation
- Specify the content for Image@`Oci`


# Member
|name|categorie|description|
|-|-|-|
|`runtime-spec`||`Runtime`  Specification - how to run a “filesystem bundle” that is unpacked on disk
|`image-spec`||`Image`  Specification
|`distribution-spec`||`Distribution`  Specification

# Process
## Oci implementation
- Download 1 image@`oci`
- Unpack the image into 1 Runtime filesystem bundle of type  `oci`
- The  Runtime Bundle of type  `oci`  would be run by a runtime of type   `oci`

# Low-level implementation
- `runc`

# High-level implementation
- `containerd`

# Example 
- `Docker`
- `Rkt`

```bash
docker run example.com/org/app:v1.0.0
rkt run example.com/org/app,version=v1.0.0
```


# Image of type  `oci`
## Member
- 1 image manifest file 
  - metadata about the contents and dependencies of the image
    - the content-addressable identity.
    - 1..N  filesystem serialization archives that will be unpacked to make up the final runnable filesystem. 

- 1 image configuration
  - command
  - application arguments
  - var@env, ...
  - 

- 1..N filesystem serializations


# todo

- the image of type  `oci`  contains sufficient information to launch the application on the target platform
- the image manifest contains
- The image configuration includes
  
