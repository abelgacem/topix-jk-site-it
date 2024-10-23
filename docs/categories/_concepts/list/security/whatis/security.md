---
layouy: topic
---

# iam
- define who can access what

# definition
## use case
HashiCorp 
- create a binary
- sign this binary
- push this binary on internet

A company who wants to download this binary must
- get the binary
- get the file checksum (aka md5)
- get the file checksum signature


## use case
- some tools need several ids and token to access some data. E.g
  - aws: credentials
  - git: access token
- level 0 of security
  - do not put these secrets in a txt file
- level 1 of security
  - put these secrets in a envar
  - the tool that need them uses theses envar
  - level 11 of security
    - if in mode:CLI:SHELL
      - shell:session must not persist envar 