# [&larr;][Repo_Readme]doc > [GitlabCI][Topic_Readme] > [Howto][STopic_List] > [Language][SSTopic_List] >  manage >  Image

[//]: #(Reference)
[Repo_Readme]:   ../../README.md
[Topic_Readme]:  ../README.md
[STopic_List]:   ../list/obj_list.md
[SSTopic_List]:  ../whatis/language_whatis.md

[Runner_Whatis]:      ../whatis/runner_whatis.md
[GitlabCI_Whatis]:    ../README.md
[LangImage_Whatis]:   ../whatis/language_whatis.md
[LangService_Howto]:  ../howto/dsl_service_howto.md

# See Also 

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Image|[Definition][LangImage_Whatis]|instruction
|Service|[Howto][LangService_Howto]|instruction
|GitlabCI|[Definition][GitlabCI_Whatis]|
|Runner|[Definition][Runner_Whatis]|
<br>


# Define 1 default image
All GitlabCI file played by this runner will run in 1 contianer instanciate by this image

```bash
# update file /etc/gitlab-runner/config.toml of the runner
[runners.docker]
  ...
  image = "ruby:2.7" # defaulted to docker.io//library/ruby:2.7
  ...
```

# Override the image define by the runner
## Example
```yaml
# in GitlabCI file
## Syntax
image: my.registry.tld:5000/namepace/image:tag
## Syntax
image:
  name: "registry.example.com/my/image:latest"

services:
  - name: postgresql:14.3
  - name: redis:latest
```
# Override the image:entrypoint
```yaml
# Define Shell as entrypoint
## Method (Docker > 17.06)
image:
  name: super/sql:experimental
  entrypoint: [""]
## Method (Docker < 17.03)
image:
  name: super/sql:experimental
  entrypoint: ["/bin/sh", "-c"]
```


## Example
```yaml
image: ruby:2.7

services:
  - postgres:9.3

before_script:
  - bundle install

test:
  script:
  - bundle exec rake spec
```

## Example
```yaml
# In config.toml
[runners.docker]
  image = "ruby:2.7"

[[runners.docker.services]]
  name = "mysql:latest"
  alias = "db"

[[runners.docker.services]]
  name = "redis:latest"
  alias = "cache"
```

