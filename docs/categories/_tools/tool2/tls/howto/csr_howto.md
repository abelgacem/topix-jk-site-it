# [&larr;][Repo_Readme]Domain > Computer Science > Tls > Howto > Csr

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

## Generate > CSR
### Method
```bash
# Create > 1 > Key.Priv & 1 Csr - Enter Csr:Member in Interactive way
##
openssl req -nodes -sha256
            -newkey rsa:2048  
            -keyout MyPrivKey.key 
            -out    MyCsr.csr
##
openssl req -nodes 
            -new -newkey rsa:2048  
            -keyout MyPrivKey.key 
            -out    MyCsr.csr            
##            
## req       = Create CSR            
## -newkey   = Create Key.Priv
## -rsa:2048 = Key.Priv of type RSA 2048
## -sha256   = Use Algo SHA-256 (SHA-2)
## -nodes    = No DES  = Do not encrypt Key.Priv in file.PKCS12
## -keyout   = File fore Key.Priv
## -out      = File fore Csr
```
### Method
```bash
# create 1 certificate for 1 app: nginx, mysql, ...
openssl req -nodes -sha256
        -x509   
        -newkey rsa:2048 
        -keyout selfsigned.key 
        -out cert.pem
```
### Method


```bash
# Create > 1 > Key.Priv
openssl genrsa  
        -out privkey.pem 2048
# Generate CSR - interactive way
openssl req 
        -new -key privkey.pem
        -out cert.csr
## -new   = Use Exixting Key.Priv

# Send the Csr to CAuthority
# CAuthority 1 Signed Server Certificate (aka End Entity Certificate via email)
# the Signed Server Certificate is usually in the Base64 encoded PEM format.
```

