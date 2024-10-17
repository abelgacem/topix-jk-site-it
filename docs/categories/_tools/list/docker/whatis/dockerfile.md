---
mx:  
---

# Best practide
- name: Dockerfile.yml

# Definition
- Is1 cli
- Is1 file
- Is1 dsl

# Definition
- Is1 > File.Txt
- Contains > Instruction > to > create > Image.Oci
- Is > also > named > Containerfile
# build > Context > directory
## Definition
- Can > be
  - 1 http(s) URL of an archive
  - 1 git repository
  - 1 Containerfile.
- Default
  - Folder.Current
  - Folder > Containing > Dockerfile

## Toknow
- When the URL is 
  - 1 archive, the contents of the URL is downloaded to a temporary location and extracted before execution
  - 1 Containerfile, the Containerfile is downloaded to a temporary location
- When the URL is 1 Repository.Git, the repository is cloned locally and set as the context

# Type
- .in

# Toknow
- Containerfiles ending with a “.in” suffix 
  - will be preprocessed via CPP
  - Allow to decompose Containerfiles into several reusable parts that can be used via CPP’s #include directive.
