# [&larr;][Repo_Readme]Domain > Computer Science > Tls > Howto > Ca

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

# Generate private CA 
from https://docs.docker.com/engine/security/protect-access/
```bash
# step 01
openssl genrsa -aes256 -out ca-key.pem 4096
# step 02
openssl req -new -x509 -days 365 -key ca-key.pem -sha256 -out ca.pem
# step 03
openssl genrsa -out server-key.pem 4096
# step 04
openssl req -subj "/CN=$HOST" -sha256 -new -key server-key.pem -out server.csr
# step 05
echo subjectAltName = DNS:$HOST,IP:10.10.10.20,IP:127.0.0.1 >> extfile.cnf
# step 06
openssl x509 -req -days 365 -sha256 -in server.csr -CA ca.pem -CAkey ca-key.pem \
  -CAcreateserial -out server-cert.pem -extfile extfile.cnf
```


# Principe
- Generate Key.Priv
- Generate Csr
- Send Csr and Key.Priv to CAuthoriy
- CAuthoriy Send back 1 file.Zip containing
  - Certificate.Server
  - Certificate.Root
  - Certificate.Intermediate
- Create Certifcate.Ssl by concatenate the 3 Certificate

```bash
cat CertificateServer.crt CertificateIntermediate.crt CertificateRoot.crt >> CertificateSsl.crt
```

- Copy Certificate.Ssl in /etc/ssl
- Configure Nginx:Vhost
```bash
server {
  listen 443;
  ssl on;
  ssl_certificate /etc/ssl/CertificateSsl.crt;
  ssl_certificate_key /path/to/your_private.key;
  root /path/to/webroot;
  server_name your_domain.com;
}

access_log /var/log/nginx/nginx.vhost.access.log;
error_log  /var/log/nginx/nginx.vhost.error.log;

location / {
  root /var/www/;
  root  /home/www/public_html/your.domain.com/public/;
  index index.html;
}
```
