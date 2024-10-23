---
---

# Member
- public
- private

# Type
|Name|Description|
|-|-|
|RSA|Used for both encryption and digital signatures|
|DSA|Primarily used for digital signatures|
|ElGamal| Used for encryption|
|ECC|Gaining popularity for strong security with shorter key lengths compared to RSA|


# Key@public
Allow to
- Encrypt a message that can be decrypt only by 1 Person having the corresponding key@private
- Validate that 1 person signed 1 message with the corresponding key@private 
- Verify strongly that the message was not corrupted nor modified in transmission


# Key@private
Allow to
- Decrypt messages encrypted with the key@public key
- Sign messages that others can verify came from you (they need your public key to verify the signature.)

# Operation
- import
# Member
- public
- private

# Type
|name|type|description|
|-|-|-|
|RSA|asymetric|Used for both encryption and digital signatures|
|DSA|asymetric|Primarily used for digital signatures|
|ElGamal|asymetric|Used for encryption|
|ECC|asymetric|Gaining popularity for strong security with shorter key lengths compared to RSA|
|AES|symetric|Widely used cipher|
|DES|symetric|older symmetric cipher|
|3DES|symetric|Triple DES, stronger than DES|
|Blowfish|symetric|block cipher known for its flexibility|
|Twofish|symetric|a replacement for Blowfish|


# Key@public
Allow to
- Encrypt a message that can be decrypt only by 1 Person having the corresponding key@private
- Validate that 1 person signed 1 message with the corresponding key@private 
- Verify strongly that the message was not corrupted nor modified in transmission


# Key@private
Allow to
- Decrypt messages encrypted with the key@public key
- Sign messages that others can verify came from you (they need your public key to verify the signature.)

# Operation
- import


# Definition
- [usually] denote
  - 2 linked object of the same type used in cryptography
    - 1 key@public that can be shared to with the world
    - 1 key@private that must be shraed only by 1..1

# Lexical field 
## Keypair in SSH
- 1 ssh public key
- 1 ssh private key

## Keypair in aws
