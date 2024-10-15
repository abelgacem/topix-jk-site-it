---
draft : true
mx:  
  lp:
  ref:
    - child: definition/howto
---

# Define Volume in Dockercompose file
```yaml
version: "3.7"

services:
  database:
    ...
    # volumes specific to this service
    volumes: 
    ...

# volumes that can be referenced by 1..N service
volumes: 
...
```
# Example
```yaml
# In Host: the folder@anonymous: /var/lib/docker/volumes/<uuid>/_data is created
# In Container: /var/lib/postgresql/data points to this folder
volumes: 
  /var/lib/postgresql/data

# the named volume "data" must be declared in section:volumes of the dockercompose
# In Container: /var/lib/postgresql/data points to this folder
volumes: 
  data:/var/lib/postgresql/data

# In Host: folder /data/postgresql exists
# In Container: /var/lib/postgresql/data points to this folder
volumes: 
  /data/postgresql:/var/lib/postgresql/data

```
