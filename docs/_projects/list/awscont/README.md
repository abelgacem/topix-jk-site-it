---
layout: tool
mx:
  domain: tool
  description: AWS. in container
  lp:
  ref:
---

# {{ site.data.name.description }}

# Good to know
- installed alpine aws pacakage using APK in a alpine container says sometime

```
$ aws sso get-role-credentials help

[Errno 2] No such file or directory: '/usr/lib/python3.11/site-packages/awscli/examples/global_synopsis.rst'
```
- so decided to install awscli in an alpine.python container using pip rather than apk 