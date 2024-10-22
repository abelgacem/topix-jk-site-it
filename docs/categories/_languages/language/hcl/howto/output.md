---
draft : true
mx:  
  lp:
  ref:
    child:
      - definition/output
---

# Example
```tf
output all_names {
  value = <<EOT
%{ for name in var.names ~}
${name}
%{ endfor ~}
EOT
}
```

 # Example
```tf
output "just_mary" {
  value = <<EOT
%{ for name in var.names ~}
%{ if name == "Mary" }${name}%{ endif ~}
%{ endfor ~}
EOT
}
```
 # Example
```tf
output "vnet_rg_name" {
  value = "rg-network-${var.environment_name}"
}
```

