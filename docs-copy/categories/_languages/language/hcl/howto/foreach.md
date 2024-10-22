---
draft : true
mx:
  ref:
    content:
      - it/tool/terraform/definition/backend
---

# Example
## Define a map
```powershell
variable "list_group" {
  type = map(object({
    display_name      = string
    description       = string
  }))
  default = {
    group1 = {
      display_name      = "mx_group_admin_tech_task"
      description       = "manage technical administration tasks in AWS"
    }
    group2 = {
      display_name      = "mx_group_admin_cost_task"
      description       = "manage cost administration tasks in AWS"
    }
  }
}
```
## use the map

```powershell
# create identity_center:group
resource "aws_identitystore_group" "identity_center_group" {
  identity_store_id = local.identity_store_id
  for_each          = var.list_group
  display_name      = each.value.display_name
  description       = each.value.description
}

```

# Example
## Define a list
```powershell
# list of identity_center:group to manage
variable "list_group" {
  type = list(object({
    display_name      = string
    description       = string
  }))
  default = [
    {
      display_name      = "mx_group_admin_tech_task"
      description       = "manage technical administration tasks in AWS"
    },
    {
      display_name      = "mx_group_admin_cost_task"
      description       = "manage cost administration tasks in AWS"
    }
  ]
}
```

## use the list
```powershell
```
