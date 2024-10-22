---
draft : true
mx:  
  lp: 0
  ref:
    root:
      - concept/secret/definition
---



# Definition
- 1 acronym
- open source version of tool PGP created in 1991
- 1 implementation of OpenPGP
- can encrypt string, files, folders
- used in different context

# Operation
- encrypted message
- encrypted signed message
- decrypt encrypted message
- decrypt encrypted signed message
- verify the signature of a signed message


# Encryption type
|name|alias|description
|-|-|-
|asymetric encryption|public key encryption|use of public key
|symetric encryption|symetric key encryption|use of a passphrase

# Configuration
- folder $HOME/.gnupg

# Good to know
- GPG launch gpg-agent that keeps pwd in cache
- in a same session, the password is only asked once
- Solve the age-old problem : 
  - "how do I communicate with someone securely without somehow exchanging a secret password first"
- With public-key encryption
  - There is no need to share a pwd
  - Each part generates a "keypair" ("public" and a "secret/private")
- PGP is now (2023) propriatory of Symantec

# todo
- distinguish the **encryption** of 1 message/content and the **signing** of 1 message/content
  - we can encrypt using N public keys
  - we sign using only 1 private key
- key@pub  is used to to encrypt
- key@priv is used to decrypt


# process for asymetric encryption

- recipient = destinaraire

|Actor|Step|GPG Command|
|-|-|-|
|recipient|generate kvpair|`gpg --gen-key`|
|recipient|store key@priv||
|recipient|export key@pub| `gpg --export -a "Recipient Name" > recipient_public_key.asc`|
|recipient|share key@pub with senders|send mail or publish it on a server key|
|sender|import key@pub|`gpg --import recipient_public_key.asc`|
|sender|encrypt the message with key@pub|`gpg --encrypt --recipient "Recipient Name" --armor -o encrypted_message.asc -s message.txt`|
|sender|encrypt the message with key@pub|`gpg --encrypt --recipient "Recipient Name" -o encrypted_message.asc message.txt`|
|sender|sends the message to recipient|email, ftp|
|recipient|decrypt the message with key@priv|`gpg --decrypt -o decrypted_message.txt encrypted_message.asc`|


# process for symetric encryption

- passphrase = password
- public  key is openly shared and freely distributed
- private key is only known by owner/recipient
- encryption process uses the public  key to encrypt the data
- decryption process uses the private key to decrypt the data
- anyone can encrypt the data


|Actor|Step|GPG Command|
|-|-|-|
|sender|create a passphrase||
|recipient|share passphrase with senders|send mail or publish it on a server key|
|sender|encrypt the message with the passphrase|`gpg --symmetric filename.txt`|
|sender|sends the message to recipient|email, ftp|
|recipient|decrypt the message with passphrase|`gpg --decrypt -o decrypted_file.txt encrypted_file.gpg`|


