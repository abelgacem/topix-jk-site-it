---
draft : true
mx:  
  lp:
  ref:
    child:
      - definition/datasource
---

# Example
```hcl
data "aws_ami" "example" {
  most_recent = true

  owners = ["self"]
  tags = {
    Name   = "app-server"
    Tested = "true"
  }
}
```

# Example
```hcl
data "local_file" "foo" {
  filename = "${path.module}/foo.bar"
}

resource "aws_s3_object" "shared_zip" {
  bucket  = "my-bucket"
  key     = "my-key"
  content = data.local_file.foo.content
} 
```

# Example
```hcl
// Define 1 > Aws:Image
data "aws_ami" "ubuntu" {
  most_recent = "true"    
  filter  {
    name      = "MyName"    
    values    = ["MyName*-"]    
  }
}
```
