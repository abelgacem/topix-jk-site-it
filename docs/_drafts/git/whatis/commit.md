---
draft : true
mx:  
  - definition/repository
  - definition/reference
---

# Definition
- Git's cornerstone
- A reference to a git object
 
## Member
- 1 hash: a SHA-1 string made of 40 hexa digit (eg. f5e6c0a1c9e0ef0f04529bfa3e129eb8d3a5fabc)
- 1 comment

## Type
- Named
- Unnamed


# Unnamed Commit
- A commit whose name is its hash
- Refers to following Git object:
  - Blobs;
  - Trees;
  - Commits;


# Named Commit
- A commit with a human-readable name.
- Ease the access to a specific codebase.

## User defined commit name
It refers to several Git concepts:
- 1 **Local Branch Name**: (e.g. `dev`).
- 1 **Remote Branch Name**: (e.g. `origin/main`, `pubrepo/dev`).
- 1 **Tag Name**: (e.g., `v1.0`, `v1.2.3-rc.1`).

## System defined commit name
- **HEAD**: 
  - **Description**: The latest commit in the current branch.
  - **File Location**: `.git/HEAD`
  - **Commands**: Affected by commands like `git checkout`, `git commit`, and `git merge`.

- **ORIG_HEAD**: 
  - **Description**: The penultimate HEAD.
  - **Usage**: Used to recover a commit if a merge fails or if you need to undo recent changes.
  - **File Location**: `.git/ORIG_HEAD`
  - **Commands**: Updated by commands like `git merge`, `git rebase`, and `git reset`.

- **FETCH_HEAD**: 
  - **Description**: The latest commit fetch from a remote repo.
  - **Usage**: Used for inspection before a merge.
  - **File Location**: `.git/FETCH_HEAD`
  - **Commands**: Updated by `git fetch` and `git pull`.

- **MERGE_HEAD**: 
  - **Description**: The commit being merged into the current branchs.
  - **Usage**: Used to resolve merge conflicts and indicates the state of the merge process.
  - **File Location**: `.git/MERGE_HEAD`
  - **Commands**: Set during a `git merge` operation.

- **REBASE_HEAD**: 
  - **Description**: The commit being rebased onto the current branch.
  - **Usage**: Which commit is currently being processed.
  - **File Location**: `.git/REBASE_HEAD`
  - **Commands**: Set during a `git rebase` operation.

- **STASH**: 
  - **Usage**: Allows to temporarily save changes in your working directory without committing them.
  - **File Location**: Stashes are stored in the `.git/refs/stash` file.
  - **Commands**: Affected by `git stash`, `git stash pop`, and `git stash apply`.

- **REMOTE**: 
  - **Description**: alias of a remote repository (e.g., `origin`).
  - **File Location**: Remote configuration is stored in `.git/config`.
  - **Commands**: Affected by commands like `git remote add`, `git fetch`, and `git push`.

# Operation
- create
- list
