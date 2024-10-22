---
mx:  
  - cf. flow
---

# Definition
- deal with release and Semantic versioning
- a name associated to 1 commit
- a branch which codebase cannot be modified
- mark the release version (e.g. v0.0.1)
# Type
- Lightweight 
- Annotated

## Annotated Tag
- should be public
- store the following data
  - the name
  - a pointer to a `commit`
  - tagger name
  - email
  - date
## Lightweight Tag
- should be private
- store the following data
  - the name
  - a pointer to a `commit`
 
# To know
- When the *major version* is zero, the project is unstable.
- Bugs reported from *version:stable* creates a **minor version**
- When a new *major version* is released, minor and patch versions must reset to zero.
- When a new *minor version* is released, patch version must reset to zero
- Patch versions include bug fixes
- do not use **Patch version** for new features.

# What mean release a version
- Create a tagged a version on *branch:main*
  - it can be any version: major, minor or patched version

# To know
- different version:stable can coexists in production

