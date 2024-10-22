---
draft : true
mx:  
  lp: 0
  ref:
    child:
      - root/concept/definition
---


# Type
related to xx
- principale
- subkey

related to capability
- sign
- encrypt
- decrypt

# What to do with a public key
- encrypt a message, string or file that only the owner of the correponding private key can decrypt
- Validate the message, string or file was not corrupted nor modified in transmission
- Validate the owner of this key has signed the message, string or file with it secret key

# What to do with a private key
- decrypt message, string or file that was encrypted with the public key
- sign message, string or file that others can verify/validate it came from you (they need the public key)
