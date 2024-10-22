<head><link rel="stylesheet" href="../../md.css"/><script src="../../md.js"></script></head>



[//]: #(Reference)
[Repo_Readme]:          ../README.md

[Ovh_api]:            https://api.ovh.com/
[Ovh_02_Api]:         https://api.ovh.com/console/ 
[Ovh_Keypair_Api]:    https://www.ovh.com/auth/api/createApp
[Ovh_Keypair_03_Api]: https://www.ovh.com/auth/api/createToken?GET=/*&PUT=/*&POST=/*&DELETE=/*
# [&larr;][Repo_Readme]doc > Ovh > Api

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Api|||[Ovh][Ovh_Api]



# Use Api
# Create Keypair - Bad
- browse to [Ovh Api][Ovh_Keypair_Api]
- Log in with your existing ovh account

|key|value|desc|
|-|-|-|
|name|MxAppOvhApi|Manage Ovh account via Api|
|app id|0f3b96635698e373||
|app secret|7216f118c3a6e614a5aa21ab613faca9||

# Create Keypair - Good
- browse to [Ovh Api][Ovh_Keypair_03_Api]
- Log in with your existing ovh account

|key|value|desc|
|-|-|-|
|name|MxAppOvhKeypair|Manage Ovh account via Api|
|app key|1f798b7b562b4ddc||
|app secret|df83deebf56c909f5ed1655b5b01cd2a||
|consumer key|1be2896133e1e8a42631afe5af08a0cf||

<!-- lAPP_KEY="1f798b7b562b4ddc"
lAPP_SECRET="df83deebf56c909f5ed1655b5b01cd2a"
lCONS_KEY="1be2896133e1e8a42631afe5af08a0cf"

curl -X GET \
  -H "Content-Type: application/json" \
  -H "X-Ovh-Application: $lAPP_KEY" \
  -H "X-Ovh-Consumer: $lCONS_KEY" \
  "https://eu.api.ovh.com/v1/vps/vps-5b6ad1b7.vps.ovh.net/serviceInfos"


curl -X GET "https://eu.api.ovh.com/v1/vps/vps-5b6ad1b7.vps.ovh.net/serviceInfos" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTQSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTk3MDhFNjRDMDA4MDEiLCJraW5kIjoib2F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6IjJiM2VkOWNmNTFkYmU2Y2EyZTcwMzAwZGNmY2FiMDM2ZjBiNDE2Y2NiMGMzNTA3ZDQ0NTA4YWZlMzI2ZjI0MDAiLCJpYXQiOjE3MDExNTA5NDV9.uP2-R0MnvTz2XmlCovpwelfaT81lrTFBAj1n_Q4FBIFgtcAO_TiYimYBAMCSoAWPPptJTiyXZxRqSaIZUPdvBQ" \ -->
