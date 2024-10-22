# [&larr;][Repo_Readme]Domain > Computer Science > Tls > What is > Csr

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md


# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|SELinux|see|[Definition][SELinux_Whatis]|
<br>

# Definition

# Lexical Field
- Java Key Store
- Apache Open SSL
# Definition
- Is > acronym > for > Cert Signing Request
- Is > used > by > CAuthority > to > Generate > Certificate.Ssl
- Is > used > to > define > 1 > Organization
- Is > usually > Base-64 based PEM format
- Is > Sent > to > CAuthority > apply > for > Certificate.Ssl

# Member
|Name|Tag|Desc|Example|
|-|-|-|-|
|Country||2 letter code|FR, US, ES, IT, ...|
|State|||France, Italy |
|Locality|||Toucoing, Lille,|
|On|Organization, Name|Raison Social|ab transition it, FranceConnect, |
|Ou|Organization, Name, Unit|Service compta, Service Info|example.com, dev-franceconect.fr, omt.ovh||
|Cn|Name, Common, Fqdn, Server:Hostname|<li>example.com, mail.example.com</li><li> *.example.com</li><li>dev-franceconect.fr, omt.ovh</li>||




# Example
```bash
-----BEGIN NEW CERTIFICATE REQUEST-----
MIIDVDCCAr0CAQAweTEeMBwGA1UEAxMVd3d3Lmpvc2VwaGNoYXBtYW4uY29tMQ8w DQYDVQQLEwZEZXNpZ24xFjAUBgNVBAoTDUpvc2VwaENoYXBtYW4xEjAQBgNVBAcT
...
ZSZTusPFTLKaqValdnS9Uw+6Vq7/I4ouDA8QBIuaTFtPOp+8wEGBHQ==
-----END NEW CERTIFICATE REQUEST-----
```
