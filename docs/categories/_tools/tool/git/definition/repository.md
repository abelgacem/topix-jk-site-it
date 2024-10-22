---
draft : true
mx:  
  - definition/codebase
  - definition/branch
---

# Definition



A storage unit (ie. a root folder) containing both the primary data and its associated metadata.

The name of the root folder is the name of the repository.

The **data** (aka. the **codebase**):
  - A hierarchical structure of  **our files and folders**.


The **metadata** (aka. **Git objects**):
- Model the data or are used to manage the repository. The metadata includes:
  - Commits
  - Blobs
  - Trees
  - References (Tags, Branches)
  - Modules
  - Submodules

# Purpose
- Store different versions (aka. **branches** xor **tags**) of our codebase.
- Allow team members to:
  - Collaborate, document, Share and contribute to changes made to the codebase.
  - Discuss, review and approve changes before their integration into a codebase.
- Backup and recovery of any version codebase or its member.



# Member of local repo
The current folder containing a version of our `codebase`.

1 folder `.git` that stores the `metadata`

|name|type|path|description|
|-|-|-|-|
|config|file|.git/config|
|description|file|.git/description|
|exclude|file|.git/info/exclude|
|index|file|.git/index|storage of staging area data
|hooks|folder|.git/hooks|trigger actions on repo events
|objects|folder|.git/objects|storage for blobs, trees and commits
|references|folder|.git/refs|storage for tags and branches
|logs|folder|.git/logs|history

# Classification
- [Not]Local  (aka. Remote)
- [Not]Public (aka. Private)
- git, gitlab, github

# Operation

## create
- create 1 repo:locale from scratch on 1 Fs.
- create 1 repo:locale from 1..N repo:remote (ie. clone).
- create 1 repo:remote from 1 repo:locale.

## fetch
- get changes made to 1 repo:remote into 1 repo:local

## pull
- integrate, apply changes made to 1 repo:remote into 1 repo:local

## push
- save changes made to 1 repo:local into 1 repo:remote

## Mirror
- synchronize multiple repo
- Type: push, pull, both

# To know
- The name of the root folder is the name of the repository

# Todo

## Repository@(remote, Gitlab)
- Repo@git with additional features



