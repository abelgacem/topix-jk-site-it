---
draft : true
mx:  
  lp: O
  ref:
    child:
---


- MX_LIST_FILE_UPDATED=$(git diff-tree --no-commit-id --name-only -r $CI_COMMIT_SHA)
- MX_LIST_FILE_UPDATED_FILERED=${MX_LIST_FILE_UPDATED}


.build:
  stage: build
  image: 
    name: docker:latest
  services:
    - docker:dind
  # Action
  script:
    # Login > to > registry.Gitlab
    - echo "$CI_REGISTRY_PASSWORD" | docker login --username "$CI_REGISTRY_USER" --password-stdin "$CI_REGISTRY"
    # Create image from dockerfile in the same folder
    - docker build -t ${MX_IMAGE_PATH_FULL} .
    # Push > image > to > registry.Gitlab
    - docker push ${MX_IMAGE_PATH_FULL}


# Method 01
docker login --username "$CI_REGISTRY_USER" --password "$CI_REGISTRY_PASSWORD" "$CI_REGISTRY"

# Method 02
echo "$CI_REGISTRY_PASSWORD" | docker login --username "$CI_REGISTRY_USER" --password-stdin "$CI_REGISTRY"


# in file list-method.ci.yml
.list-method: &list-method |

  function display_info() {
    echo "${1}"
  }

before_script:
  - *list-method

# In another file
stages:
- test
sast:
  stage: test
include:
- template: Security/SAST.gitlab-ci.yml

