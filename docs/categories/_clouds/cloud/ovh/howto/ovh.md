---
draft : false
mx:
  ref:
    child:
      - definition/ovh
---

# todo
- who can access which product

# list token
# remove token

## Good to know
- AK = Application key is public
- AS = Application secret is secret
- CK = Consumer key is secret
  - use for delegation of rights

# use API with curl
## example
- Request permissions on the customer's API
```powershell
lOVH_AK=""
lOVH_REDIRECT_URL="https://webhook.site/586c652e-061e-453f-bd71-51912e33419d" # usefull for debug
export OVH_AK="${lOVH_AK}"
export OVH_REDIRECT_URL="${lOVH_REDIRECT_URL}"

curl \
  -H "Content-type: application/json" \
  -H "X-Ovh-Application: ${OVH_AK}" \
  -d '{"redirection": "${OVH_REDIRECT_URL}", "accessRules": [{"method": "GET", "path": "/me"}]}' \
  https://eu.api.ovh.com/1.0/auth/credential
```
## example
```powershell
lOVH_RESOURCE="me" # possible values: me, domain, ...
curl -X GET "https://eu.api.ovh.com/v1/${lOVH_RESOURCE}" \
     -H "accept: application/json"
```


# use API with python
```python
'''
First, install the latest release of Python wrapper: $ pip install ovh
'''
import json
import ovh

# Instantiate an OVH Client
client = ovh.Client(
	endpoint='ovh-eu',               # OVH:API:Endpoint
	application_key='xxxxxxxxxx',    # Application Key
	application_secret='xxxxxxxxxx', # Application Secret
	consumer_key='xxxxxxxxxx',       # Consumer Key
)

response = client.get("/domain")
response = client.get("/me")

# Pretty print
print(json.dumps(request_response, indent=4))
```

# Use Case
- create a policy that
  allow a user:John to
    - reboot a VPS

# Use API with terraform
- 2 ways for credentials
  - Ovh:OAuth2    
  - Ovh:credential    