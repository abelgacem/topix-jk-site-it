---
draft : false
mx:
  ref:
    child:
      - definition/credential
---


# var@env
```powershell
OVH_ENDPOINT
OVH_APPLICATION_KEY
OVH_APPLICATION_SECRET
OVH_CONSUMER_KEY
```
# manage via api
```powershell
# list all app:key:id (aka credential)
API_VERB = 'GET'
API_URL  = '/me/api/application'

# delete 1 app:key:id
RES_ID   = 'xxx'
API_VERB = 'DELETE'
API_URL  = '/me/api/application/{RES_ID}'
```

# create credentials
- create 1 appication
  - browser > https://api.ovh.com/createApp/

  

- login via OVHcloud API
  - account ba106449-ovh = root user
  - OVHcloud API console wants to access your ba106449-ovh account.
  - You will be redirected to: https://eu.api.ovh.com/console/oauth-receiver.html

# Create token
- create 1 appication
  - browser > https://api.ovh.com/createToken/?GET=/*
  - browser > https://api.ovh.com/createToken/?GET=/*&PUT=/*&POST=/*&DELETE=/*
