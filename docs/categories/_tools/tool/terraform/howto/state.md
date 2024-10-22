---
draft : true
mx:  
  lp: 1
  ref:
    child:
      - definition/state
---

# display info

# manage state file remotly with gitlab
enable gitlab:infra 
- gitlab project > settings > general > Visibility, project features, permissions > expand > infrastructure > toggle

get gitlab:project:id
- gitlab project > settings > general > project ID


## variable
```bash
# prj-terraform > learn
lGIT_PROJECT_ID="57370541"
export TF_ADDRESS="https://gitlab.com/api/v4/projects/${lGIT_PROJECT_ID}/terraform/state/old-state-name"
export TF_ADDRESS="https://gitlab.com/api/v4/projects/57370541/terraform/state/mxtfstate-01"

# configure terraform state@remote
export TF_ADDRESS="https://gitlab.com/glabtit/project/prj-terraform/sandbox.git/terraform/state/tf_state"

```

## example
```powershell
terraform {
  backend "http" {
    address        = "https://gitlab.com/api/v4/projects/57370541/terraform/state/mxtfstate-01"
    lock_address   = "https://gitlab.com/api/v4/projects/57370541/terraform/state/mxtfstate-01/lock"
    unlock_address = "https://gitlab.com/api/v4/projects/57370541/terraform/state/mxtfstate-01/lock"
  }
}

# getting info from state@remote
data "terraform_remote_state" "foo" {
  backend = "http"
  config = {
    address        = "http://my.rest.api.com"
  }
}

```