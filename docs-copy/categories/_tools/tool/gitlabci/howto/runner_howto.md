---
draft : false
mx:
  ref:
    child:
      - whatis/gitlabci
      - whatis/gitlabcifile
      - whatis/job
---


# List runners
```shell
Ihm > Gitlab > select group@root > settings > CI/CD > runner
Ihm > Gitlab > select Project    > settings > CI/CD > runner
```


# Install 1 runner 
- Install runner in 1 Vm
- Diasbled Runner@shared
- Get token and url
- Register the runner for project or [sub]group

# Install runner in 1 vm 
```bash
# Install repo@(package, Os) for ubuntu 22.04
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh | sudo bash

# Install Package
sudo apt-get install -qq gitlab-runner -y
```
# Diasble Runner@shared


Ihm > gitlab > select project or group  > settings > CI/CD
  1. Disable shared runners for this group
  1. Allow projects and subgroups to override the group setting

# Get token and url
## for project
Ihm > gitlab > select the project > settings > CI/CD > runner
  - copy the token
  - copy the url

## for project
Ihm > gitlab > select the group > CI/CD > runner
  - copy the token
  - copy the url

# Register 1 runner@shell on 1 Vm

```bash
# Define var
lRUNNER_TOKEN="kjrygdvnJhy6767Xvo-oikd65(" 
lRUNNER_TOKEN="GR1348941uy6uWn7_A_mgnF_Kc8Tb" # group: docker
lRUNNER_TOKEN="GR1348941R5T6NMpCCPq-exsyo6x-" # group: docker
#
lRUNNER_TOKEN="GR1348941kE4jQVZiZuNNBqz46D3E"
lRUNNER_URL="https://gitlab.com/"
lRUNNER_EXECUTOR="shell"
lRUNNER_TAG_LIST="o4u,ovh,shell"
lRUNNER_DESC="runner on ovh:o4u"
#
lRUNNER_TOKEN="GR1348941AwuxKpK9GXvo-Eavg2kk"
lRUNNER_URL="https://gitlab.com/"
lRUNNER_DESC="runner@(shell, group) on ovh:o4u"
lRUNNER_EXECUTOR="shell"
lRUNNER_TAG_LIST="o4u,ovh,shell,gpe"
lRUNNER_DESC="runner on ovh:o4u"
#
lRUNNER_TOKEN="GR1348941myKxaxPyTSD8czDzc7zC" # project: image
lRUNNER_URL="https://gitlab.com/"
lRUNNER_DESC="runner@(shell, abtit:prj:image) on ovho4u"
lRUNNER_EXECUTOR="shell"
lRUNNER_TAG_LIST="o4u,ovh,shell,prj"

# register 1 runner with executro@shell in batch mode
sudo gitlab-runner register \
  --non-interactive \
  --url "${lRUNNER_URL}" \
  --registration-token "${lRUNNER_TOKEN}" \
  --executor "${lRUNNER_EXECUTOR}" \
  --description "${lRUNNER_DESC}" \
  --maintenance-note "Nop" \
  --tag-list "${lRUNNER_TAG_LIST}"
```

```powershell
# register 1 executro@docker in batch mode
sudo gitlab-runner register \
  --non-interactive \
  --url "https://gitlab.com/" \
  --registration-token "PROJECT_REGISTRATION_TOKEN" \
  --executor "docker" \
  --docker-image alpine:latest \
  --description "docker-runner" \
  --maintenance-note "Free-form maintainer notes about this runner" \
  --tag-list "docker,aws" \
  --run-untagged="true" \
  --locked="false" \
  --access-level="not_protected"
```

```powershell
# register 1 executro@docker in interactive mode

sudo gitlab-runner register \
  --url ${lRUNNER_URL}      \
  --registration-token ${lRUNNER_TOKEN}
# follow interactive instruction
```

# Manage Runer via Cli
## Get help
```powershell
# Help
gitlab-runner --help
sudo gitlab-runner register -h
```
# Allow runner to be used by 1 job
- runner define list of tag at creation time
- Job must use 1 tagvia instruction *tag*


# Allow 1 runner to run 2..N jobs in parallel
```powershell
# update /etc/gitlab-runner/config.toml - no need too restart runner
concurrent = 3

```
<hr>
<hr>

# Todo
# Allow Runner to execute Docker
## Method
- Install runer on 1 Vm
- Registrate runer as executor@shell
- allow runner to execute docker
```bash
sudo usermod -aG docker gitlab-runner
```
- Test runner capability to execute docker
```bash
sudo -u gitlab-runner -H docker info
```
## Method
- Install runer on 1 Vm
- Registrate runer as executor@shell
- Use the DockerInDoccker image provide by Docker (docker pull docker:22.06.0-beta.0-git)





```
docker run -d --name gitlab-runner --restart always \
  -v /srv/gitlab-runner/config:/etc/gitlab-runner \
  -v /var/run/docker.sock:/var/run/docker.sock \
  gitlab/gitlab-runner:latest
```
