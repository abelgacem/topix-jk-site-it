---
draft : true
mx:  
  ref:
    child:
      howto/submodule
---

# Definition
- a repo@git inside a repo@git
- allows to include repo into a repo
- alows to keep independent versioning of included repo
  - It is commonly used in projects where external libraries/components are used and you want to track their versions along with your project.

# Configuration
|name|type|description|comment|
|-|-|-|-|
|`.gitmodules`|file|list of folder
|`.git/config`|file|
|`.git/modules/xxx`|folder|

# operation
- add
- delete

# process
- add a submodule
- initialize and update the submodules

# Todo
- find interresting use case of submodule
- cf. subtree

# Toknow
- the  `.git`  is a **FILE NOT A FOLDER**
  - pont to a folder in the parent



