# [&larr;][Repo_Readme]doc > [GitlabCI][Topic_Readme] > [Howto][STopic_List] > manage >  Triggering

[//]: #(Reference)
[Repo_Readme]:   ../../README.md
[Topic_Readme]:  ../README.md
[STopic_List]:   ../list/obj_list.md


# git diff
```powershelll
git diff --raw HEAD^1
git diff HEAD~ --name-only|grep folder1
git diff HEAD~ --name-only|grep folder2
git diff $LAST_COMMIT HEAD --name-only|grep folder1
git diff $LAST_COMMIT HEAD --name-only|grep folder2
git diff --name-only `git log --merges --grep="into 'master'" --pretty=format:%H -2|tr "\n" " "`
````

```gitlabci
script:
  - '{ git diff --quiet --name-only --exit-code "$CI_COMMIT_BEFORE_SHA" "$CI_COMMIT_SHA" -- <list of files and directories to check> && printf "No relevant changes between $CI_COMMIT_BEFORE_SHA and $CI_COMMIT_SHA.\n" >&2 && exit 1; } || mkdir public/ && make ...


export LAST_COMMIT=$(curl --header "PRIVATE-TOKEN: my_token" "http://my-ip/gitlab/api/v4/projects/1/pipelines" |
curl -H "PRIVATE-TOKEN: token" "http://my-ip/gitlab/api/v4/projects/1/pipelines" | jq -r .[1].sha
)

export LAST_COMMIT=$(
  curl --header "Private-Token: $PRIVATE_TOKEN" https://gitlab.com/api/v4/projects/PROJECT/pipelines | jq -r [.[] | select(.ref=="master") ] | .[1].sha
)
```


```c
if [[ $(git diff $LAST_COMMIT --name-only | grep admin) ]]; then
    echo admin deploying, detected changes
else 
    echo admin deploy skipped, no changes detected
fi
```


# Only 
```yaml
    changes:
      - Dockerfile
      - assets/*

build:
  stage: build
  only:
    - paths:
      - "^src/.*"
test:
  stage: test
  only:
    - paths:
      - "^src/.*"
      - "^test/.*"
build:
  stage: build
  only:
    - paths:
      - "^src/.*"
  artifacts:
    - paths:
       - "bin/"
test:
 stage: test
 only:
   - paths:
     - "^src/.*"
     - "^test/.*"

 only:
   - paths:
     - "^src/.*"
only:
  variables:
    - $CI_PUSH_CHANGES =~ /^app\//

only:
    refs:
      - master
    changes:
    - frontend/**/*

only:
    - master
only:
    changes:
        - gulpfile.js
        - src/js/*
        - src/js/**/*
only:
    changes:
      - ./foo/**
    refs:
      - master


test:
 stage: test
 only:
   - paths:
     - "^src/.*"
     - "^test/.*"
   - changeset:
     - git diff --name-only HEAD HEAD~1

```

```yaml
triggers:
  - on_change:
    - target: master
    - glob:  **/*.tf

triggers:
  - on_change:
    - target: release
    - glob:  **/*Dockerfile*


build_local:
  stage: build
  only:
    changes:
      - ./check-local/**
    refs:
      - tags
  except: 
    - branches
  script:
  - ./build/create_package.sh check-local
  - ./build/rpmbuild.sh check-local
  artifacts:
    name: "${CI_PROJECT_NAME}-${CI_BUILD_TAG}-check-local"
    paths:
      - build/distributions
```





```bash
folder="folder1"
remote=$(git remote)
if [[ $(git cherry $remote/$CI_MERGE_REQUEST_TARGET_BRANCH_NAME $remote/$CI_MERGE_REQUEST_SOURCE_BRANCH_NAME | while read sha; do echo $(git diff ${sha:2}~ ${sha:2} --name-only); done|grep -e ^$folder -c) != "0" ]]; then
    echo "Changes in $folder found..."
  fi

# git cherry
## gives a list of all commits that the target branch of this commit does not known

# ${sha:2}
## remove the leading "+ " and leading "- " of the cherry output "+ 588ac69a7dad1b6bb1766b27ece1bcbacf9a2d98" becomes the pure sha "588ac69a7dad1b6bb1766b27ece1bcbacf9a2d98"

# git diff --name-only
## gets the folders that have changed -> the result of all changed folders is piped into output

# grep ^$folder -c
## returns the number of changes for the folder

# != "0"
##checks if we have changes


if [ "$(git diff origin/${CI_MERGE_REQUEST_TARGET_BRANCH_NAME}...HEAD --name-only dir1 dir2 dir3" == "" ]; then echo "Skipped" && exit 0; fi
```