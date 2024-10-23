---
---

# Definition
- crypt string, file, folder, stream with
  - ssl
  - pgp, gpg

# Type 
- Symetric
  - the same key is used to crypt and decrypt (eg. like openssl, just a shared password)
- asymetric
  - receiver:Key@pub  is used by sender to crypt the file he will send to receiver
    - receiver needs to
      - generate a gpg kvpair (pub and priv)
      - to sends key@pub to sender
  - receiver:Key@priv is used to decrypt files send by sender with this key@pub
    - receiver needs to
      - store key@priv to decrypt files that will be send by sender


- asymetric
  - the key@pub is shared openly
  - 