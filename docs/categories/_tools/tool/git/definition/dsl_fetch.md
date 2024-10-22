---
draft : true
mx:  
  - howto/fetch
---

# Definition
- Download changes (eg. commits, blobs, branches, tags) from a repo:remote
- Retrieve remote repo metadata without applying changes locally. 
- Store changes to folder  of repo:local:folder:`.git`.
- Does not **integrate** these changes to the repo:local:working_dir.
- Create or update files in `.git/refs/remotes/xxx`
  - eg. `<ref.to.repo.remote>/<branch.name>`.
  - Each file contains the latest commit:hash of the repo:remote:branch.

## purpose
After a fetch, it is possible to:
- View the differences between the repo:local:branches and the repo:remote:branches.
- Decide to merge or rebase the repo:local with changes made to the repo:remote.
- Check out a new repo:local:branch to tracks a repo:remote:branche.

