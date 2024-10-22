---
draft : false
mx:
  ref:
    child:
      - whatis/artifact
---


# Definition
- 1 Filesystem shared by all runners.
- 1 job can downloads and saves files to this FS.
- Subsequent jobs have access to files on this FS.

# To know
- You can configure a different cache for each branch.

# References
- https://docs.gitlab.com/ee/ci/runners/
- https://docs.gitlab.com/ee/ci/runners/#architecture-diagram-of-hosted-runners-for-gitlabcom
- https://docs.gitlab.com/ee/ci/caching/index.html
- https://docs.gitlab.com/ee/ci/yaml/index.html#cachekey
