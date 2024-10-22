---
draft : true
mx:
  ref:
    child:
      - definition/template
---

# Example
```hcl
# create 1 res.tpl
data "template_file" "da_tpl" {
  template = var.tpl_att.file
  vars     = var.tpl_att.vars
}



# way to pass template file
#  template = "file(vm-config.tpl"
#  template = "host ec2_${ec2_name}*\nHostName ${ec2_ip}"
#  template = "${file("${path.module}/init.tpl")}"


# data "template_file" "setup_script" {
#   template = templatefile("setup.sh",{mojang_server_url = var.mojang_server_url})
# }

# template = file("${path.module}/files/server.sh")
# template = file("${path.module}/userdata.sh")
# template = base64encode(file("${path.module}/files/server.sh"))

# filename = "${path.module}/dnsmasq-dynamic.conf.tmpl"
```

