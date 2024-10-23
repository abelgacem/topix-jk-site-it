---
---


## securely download a file
- download HASHICORP pgp public key available at `https://www.hashicorp.com/.well-known/pgp-key.txt`
```powershell
lPGP_PUB_KEY_URL="https://www.hashicorp.com/.well-known/pgp-key.txt"
curl -s ${lPGP_PUB_KEY_URL} | gpg --import
```
- download the files
```powershell
lPRODUCT="terraform"
lVERSION="1.7.5"
lPLATFORM="linux_amd64"
lFOLDER="/tmp"

# the archive : can be vault, consul, ...
curl -Os --output-dir ${lFOLDER} https://releases.hashicorp.com/${lPRODUCT}/${lVERSION}/${lPRODUCT}_${lVERSION}_${lPLATFORM}.zip

# the sha of the archive (for all PLATFORM)
curl -Os --output-dir ${lFOLDER} https://releases.hashicorp.com/${lPRODUCT}/${lVERSION}/${lPRODUCT}_${lVERSION}_SHA256SUMS

# the signature of all SHA
curl -Os --output-dir ${lFOLDER} https://releases.hashicorp.com/${lPRODUCT}/${lVERSION}/${lPRODUCT}_${lVERSION}_SHA256SUMS.sig
```
- validate HASHICORP created the file containing the SHA
```powershell
lFILE_01="${lPRODUCT}_${lVERSION}_SHA256SUMS.sig"
lFILE_02="${lPRODUCT}_${lVERSION}_SHA256SUMS"
gpg --verify ${lFILE_01} ${lFILE_02}
```

- validate the SHA of the archive against the SHA provided 
```powershell
cd ${lFOLDER}
sha256sum -c ${lFOLDER}/${lPRODUCT}_${lVERSION}_SHA256SUMS 2&> /dev/null | grep OK
```


# Todo


unzip /tmp/${PRODUCT}_${VERSION}_linux_amd64.zip -d /tmp
mv /tmp/${PRODUCT} /usr/local/bin/${PRODUCT}
rm -f /tmp/${PRODUCT}_${VERSION}_linux_amd64.zip ${PRODUCT}_${VERSION}_SHA256SUMS ${VERSION}/${PRODUCT}_${VERSION}_SHA256SUMS.sig
apk del .deps

