# [&larr;][Repo_Readme]doc > [GitlabCI][Topic_Readme] > [Howto][STopic_List] > manage >  gitlabCI File

[//]: #(Reference)
[Repo_Readme]:          ../../README.md
[Topic_Readme]:         ../README.md
[STopic_List]:          ../list/obj_list.md

[Runner_Whatis]:        ../whatis/runner_whatis.md
[GitlabCiFile_Whatis]:  ../whatis/gitlabcifile_whatis.md

# See Also 

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|GitlabCiFile|[Definition][GitlabCiFile_Whatis]|
|Runner|[Definition][Runner_Whatis]|
<br>

# Write 1 simple gilabCiFile (aka Pipeline)

```yaml
# content
stages:
- stage01
- stage02

Job01:
  stage: stage01

```
 # Example

```yaml
# play > script.this inside image.this
image:
  name: ${CI_REGISTRY}/glabtit/library/docker/dockerfile/mxi-ruby:2.7
# Define > stage.udef:order
stages:
  - list_change
  - debug
  - build_image
  - push_image
  - test_image
  - deploy_container

# Define > var.global.string
variables:
  ## var.string.udef
  MX_FILE_CI_NAME:             .gitlab-ci.yml
  MX_FILE_DOCKERCOMPOSE_NAME:  docker-compose.yml
  MX_FILE_README_NAME:         README.md
  MX_IMAGE_PREFIX:             mxi
  ## var.string.Inherited
  MX_IMAGE_REGISTRY:           ${CI_REGISTRY}
  MX_IMAGE_REGISTRY_FOLDER:    ${CI_PROJECT_PATH}  
  MX_IMAGE_REGISTRY_PATH:      ${MX_IMAGE_REGISTRY}/${MX_IMAGE_REGISTRY_FOLDER}
  
# Define > Var > listof:folder.updated
list_change:
  stage: list_change
  variables:
    MX_LIST_FILE_UPDATED: ''
  script:
    # Get Folder.Changed:Name
    - MX_LIST_FILE_UPDATED=$(git diff-tree --no-commit-id --name-only $CI_COMMIT_SHA)
    # Remove Ci
    - MX_LIST_FILE_UPDATED=${MX_LIST_FILE_UPDATED/${MX_FILE_CI_NAME}/}
    # Remove Readme
    - MX_LIST_FILE_UPDATED=${MX_LIST_FILE_UPDATED/${MX_FILE_README_NAME}/}
    # Delete Newline
    - MX_LIST_FOLDER=$(echo -e ${MX_LIST_FILE_UPDATED} | tr "\n" " ")
    # Failed Job if no folder.sub.changed
    - if [ ${#MX_LIST_FOLDER} -eq 1 ]; then echo "No folder.changed => Failed  job"; exit 1; fi   
  # Create > var.global > from > var.local.calculated (1 per line)
    - echo "MX_LIST_FOLDER=${MX_LIST_FOLDER}" >> varglobal.env
  artifacts:
    reports:
      dotenv: varglobal.env

## Job.Debug > Check > that > job.this > can > Access
### var.global
### Folder
list_folder:
  stage: debug
  script:
    - >
      echo -e "Mx:debug > list > var
      \nMX_LIST_FOLDER        = ${MX_LIST_FOLDER}
      \nMX_LIST_FOLDER.Length = ${#MX_LIST_FOLDER}
      \n"
      echo -e "Mx:debug > Action
      \nBuild > Image.Docker from folder:${MX_LIST_FOLDER}
      \n"
      echo -e "Mx:debug > list > file > in > folder > ${MX_LIST_FOLDER}
      \n"
    - cd ${MX_LIST_FOLDER} && ls -ial
  # Allow > to > access > job.other:var.local.calculated
  dependencies:
    - list_change    

# Build folder.Changed:Image
.build_image:
  stage: build_image
  variables:
    MX_DOCKERFILE_FOLDER:  ${MX_LIST_FOLDER}
  image: 
    # name: docker:latest
    name: ${CI_REGISTRY}/${CI_PROJECT_PATH}/mxi-docker:20.10.14-git
  services:
    - docker:dind
  script:
    - cd ${MX_DOCKERFILE_FOLDER}
    # get > dockercomposefile:key:image:value
    - MX_IMAGE_NAME=$(cat ${MX_FILE_DOCKERCOMPOSE_NAME} | grep image | cut -d ':' -f2- | tr -d " \'\t\n\r" )
    - MX_IMAGE_PATH_FULL=${MX_IMAGE_REGISTRY_PATH}/${MX_IMAGE_NAME}
    - echo -e "Mx:debug > Info
      \nBuild > Image.Dockerfile:Folder = ${MX_DOCKERFILE_FOLDER}
      \nBuild > Image.Path.Full         = ${MX_IMAGE_PATH_FULL}
      \n"
    # Login > to > registry.Gitlab
    - echo "$CI_REGISTRY_PASSWORD" | docker login --username "$CI_REGISTRY_USER" --password-stdin "$CI_REGISTRY"
    # Create image from dockerfile
    - docker build -t ${MX_IMAGE_PATH_FULL} .
    # Push > image > to > registry
    - docker push ${MX_IMAGE_PATH_FULL}
  # Allow > to > access > job.other:var.local.calculated
  dependencies:
    - list_change    


```