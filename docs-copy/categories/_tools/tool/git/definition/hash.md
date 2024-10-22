---
draft : true
mx:  
  - definition/reference
---

# Definition
- 1 Id. 
- A SHA-1 string made of 40 hexa digit (eg. f5e6c0a1c9e0ef0f04529bfa3e129eb8d3a5fabc).
- Actions, on the local repo, can create Git objects in folder:`.git/`, with a hash as name.

# To know
Hashes are created for nearly all git's objects:
  - blobs (files)
  - trees (folders)
  - commits  (codebase changes)
  - tags     (codebase release)
  - branches (codebase version)


# Blob hash (files)
when a `git add` occurs to add files to the staging area, git trigger the following actions
- Create a **blob object** wich contains the content of the files
- Create a **hash** for this object based on its contents
- Store this object as à compressed binary file (using zlib) the folder `.git/objects/xx/yyy` where
  - xx are the first two characters of the hash.
  - yy is the remainder of the hash.

# Tree hash (folders)
when a `git add` occurs to add folders to the staging area, git trigger the following actions: 
- Create a **tree object** wich contains the 
  - references to the Blob objects (for files)
  - references to the Tree objects (for subfolders)
- Create a hash for this object based on its contents
- Store this object as à compressed binary file (using zlib) in file `.git/objects/xx/yyy` where
  - xx are the first two characters of the hash.
  - yy is the remainder of the hash.

# Commit hash
when a `git commit` occurs to XXXXX, git trigger the following actions: 
- Create a **commit object** wich contains:
  - the state of the codebase at a specific point in time.
  - the hash of the previous commit
  - other infos: user, msg, ...
- Create a hash for this object based on its contents  
- Store this object as à compressed binary file (using zlib) in file `.git/objects/xx/yyy` where
  - xx are the first two characters of the hash.
  - yy is the remainder of the hash.

# Tag hash
when a `git tag` occurs to create a release, git trigger the following actions: 
- Create a **tag object** wich contains:
  - a reference to a commit in `.git/refs/tags` for tag@Lightweight.
  - For tag@annotated, other infos like:
    - user, msg, ...
    - a reference to a commit, tree or blob.
- Store this object as à compressed binary file (using zlib) in file `.git/refs/tags/yy` where:
  - yy is the name of the tag.



# To know
- Blob objects do not store file names or paths, only content. 
- The file’s name and path are stored in the tree object.
- Tree objects are recursive: 
  - They can reference other tree objects, allowing Git to represent nested directories.
