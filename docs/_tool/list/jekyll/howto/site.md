---
---



# Create a site
```shell
lJEKYLL_SITE="${HOME}/wkspc/jekyll/site00"
lJEKYLL_SITE="/tmp/site00"
mkdir -p $(dirname ${lJEKYLL_SITE})
jekyll new ${lJEKYLL_SITE} 
``` 

# Build a site
```shell
cd ${lJEKYLL_SITE}
bundle exec jekyll build
``` 

# Build (if needed) and publish a site
```shell
cd ${lJEKYLL_SITE}
bundle exec jekyll serve --livereload --incremental
``` 
meaning:
- `--livereload`:  a changes trigger a build and a publish
- `--incremental`: build is incremental


# Browse a site
in the browser
## from the vm hosting the server
```shell
# in the browser of the vm hosting the jekyll server
localhost:4000
```

## from another vm or you personal computer
in the other vm shell
```shell
# var
lVM_RUNNING_SERVER_JEKYLL='o1u'   # define in ~/.ssh/config
lVM_RUNNING_SERVER_JEKYLL_PORT='4000'
lVM_ANOTHER_VM_PORT='9000'

# in the other vm browser
ssh -L ${lVM_ANOTHER_VM_PORT}:localhost:${lVM_RUNNING_SERVER_JEKYLL_PORT} ${lVM_RUNNING_SERVER_JEKYLL}
ssh -L 9000:localhost:4000 01u

```
in the other vm browser
```shell
# in the other vm browser
localhost:9000
``` 
