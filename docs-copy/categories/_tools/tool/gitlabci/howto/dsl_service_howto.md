# [&larr;][Repo_Readme]doc > [GitlabCI][Topic_Readme] > [Howto][STopic_List] > [Language][SSTopic_List] >  manage >  Service

[//]: #(Reference)
[Repo_Readme]:   ../../README.md
[Topic_Readme]:  ../README.md
[STopic_List]:   ../list/obj_list.md
[SSTopic_List]:  ../whatis/language_whatis.md

[Runner_Whatis]:       ../whatis/runner_whatis.md
[GitlabCI_Whatis]:     ../README.md
[LangService_Whatis]:  ../whatis/dsl_service_whatis.md
[LangImage_Howto]:     ../howto/dsl_image_howto.md
[Image_Whatis]:        ../whatis/dsl_image_whatis.md

# See Also 

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Service|[Definition][LangService_Whatis]|instruction
|Image|[Definition][Image_Whatis], [Howto][LangImage_Howto]|instruction
|GitlabCI|[Definition][GitlabCI_Whatis]|
|Runner|[Definition][Runner_Whatis]|
<br>


# Define 2..N default service
Theses services are available to all GitlabCI played by this runner
```bash
# update file /etc/gitlab-runner/config.toml of the runner
[runners.docker]
  services = ["mysql:latest", "postgres:latest"]  
```

# Define Services
```yaml
# in GitlabCI file
## Syntax
services:
  - postgresql:14.3
  - redis:latest
## Syntax
services:
  - name: postgresql:14.3
  - name: redis:latest

```

# Define 2..N services and images

## Example
```yaml
before_script:
  - bundle install

test:2.6:
  image: ruby:2.6
  services:
  - postgres:9.3
  script:
  - bundle exec rake spec

test:2.7:
  image: ruby:2.7
  services:
  - postgres:9.4
  script:
  - bundle exec rake spec
```
