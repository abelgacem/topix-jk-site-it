---
draft : false
mx:
  ref:
    child:
      - definition/ovh
---


# xxx via python
- start a python container (eg. a docker container)
- create and activate a python:venv (eg. call it ovh)

```powershell
```

# Browse api via gui
- browser >  https://eu.api.ovh.com


# Api call via curl

```powershell
lAPI_URL_ROOT="https://eu.api.ovh.com/v1"
lAPI_RESOURCE="vps"
lAPI_REQUEST="${lAPI_URL_ROOT}/${lAPI_RESOURCE}"
lAPI_BEARER="eyJhbGciOiJFZERTQSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTk3MDhFNjRDMDA4MDEiLCJraW5kIjoib2F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6ImU3ZGUzNmQ3NzUzMDAwMjZlYzdlNWMxZmMwYTYzZTRiNWQ1OGY5MWExNDUwMzRkOTE3OTFmMzI0NTdhYWE0NDQiLCJpYXQiOjE3MTY1NjE5NDl9.bk-oLB5bbs5lf5nIs9fmc_9ErHvfMPueFgmfJLmN6P4T_YNr71Rt6bVeESiLQCkcAfx2Wpi_g8Ief0GZ8T3wBA"
curl -X GET "${lAPI_REQUEST}" \
     -H "accept: application/json"\
     -H "authorization: Bearer ${lAPI_BEARER}"

# Create token via curl
```powershell
https://www.ovh.com/auth/api/createToken?GET=/*&PUT=/*&POST=/*&DELETE=/*
```

# create token via GUI
- browser >  
  - https://eu.api.ovh.com/createToken
  - https://www.ovh.com/auth/api/createToken?GET=/*&PUT=/*&POST=/*&DELETE=/*
- define the actions allowed by the token (all)
  - mx_ovh_credential_terraform
  - allow terraform to do all actions on ovh resources
## example
same as above, but parameters are in URL
```

```

