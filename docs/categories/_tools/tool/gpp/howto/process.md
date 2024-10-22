---
draft : true
mx:  
  lp: 0
  ref:
    child:
      - howto/gpg
---



# process for asymetric encryption

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


