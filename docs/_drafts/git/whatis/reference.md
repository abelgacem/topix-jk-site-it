---
mx:  
  - definition/commit
---

# Definition
- A named pointer to a git object

## Member
- A folder OR
- A file that often contains a commit's hash

## Type
- remote
- branch locale or remote
- tag

# Head
## Track local branch
- 1 [named] reference to a local repo branch.
- 1 **file** in folder:`.git/refs/heads/<repo-local-branch-name>`, containg the hash of the latest commit in the branch.
- Example: 
  - 1 repo locale branch named `dev`, will have a file: `.git/refs/heads/dev`.

## Track remote branch
- 1 [named] reference to a remote repo branch.
- 1 **file** in folder:`.git/refs/<repo-remote-reference>/`, containg the latest commit in the branch
- Example: 
  - 1 remote repo named `pubrepo` in `.git/config`, with a branch named `main`, will have a file: `.git/refs/remotes/pubrepo/main`.

# remote
- 1 [named] reference to a remote repo.
- the name is defined in `.git/config`.
- 1 sub**folder** of folder:`.git/refs/remote`.
- Example: 
    - 1 repo:remote named `origin` in `.git/config`, will have a folder: `.git/refs/remotes/origin`.


# Tag
- 1 [named] reference to a commit.
- 1 **file** in folder:`.git/refs/tags/`, containg commit hash
- has some additional feature:
  - denote a release of the codebase.
  - it is not possible to update the tagged codebase.

# symbolic reference
- HEAD: 
  - the reference to the current branch
  - the file `.git/HEAD` that contains a path to either
    - a branch like `refs/heads/main`.
    - a commit like `refs/commits/<commit_hash>`. 

# Reflog
- 1 **file** in folder:`.git/logs/`
- the history of changes made to other references
- Example: 
    - `.git/logs/HEAD` contains history made to `.git/HEAD`.
    - `.git/logs/refs/HEAD` contains history made to `.git/HEAD`.



## Todo
- commit (`refs/commits/<commit_hash>`)
- branch:
  - Is a reference that points to the latest commit in that branch.
  - Is stored under xxx. 
  - Eg. the branch main is stored as `refs/heads/main`.
- tag: 
  - Is a reference that points to a specific commit.
