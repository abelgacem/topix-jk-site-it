---
draft : false
mx:
  ref:
    child:
    - howto/conf
---

# File
1. `./ovh.conf`
1. `~/.ovh.conf`
1. `/etc/ovh.conf`

## Example 
```ini
[default]
; general configuration: default endpoint
endpoint=ovh-eu

[ovh-eu]
; configuration specific to 'ovh-eu' endpoint
application_key=my_app_key
application_secret=my_application_secret
consumer_key=my_consumer_key
```
# var@env
- `OVH_ENDPOINT`
- `OVH_APPLICATION_KEY`
- `OVH_APPLICATION_SECRET`
- `OVH_CONSUMER_KEY`

