---
---

# Crypt and decrypt in python
```python
# Install Package
python -m -ip install python

# cryptography package
from cryptography.fernet import Fernet
  
# generate key
key = Fernet.generate_key()
  
# get key:value
f = Fernet(key)
  
# encrypt text
token = f.encrypt(b"welcome to geeksforgeeks")
  
# display text@crypted
print(token)



# decrypt text@crypted
d = f.decrypt(token)
  
# display the text@decrypted
print(d)

# display (text@decrypted and converts from byte to string)
print(d.decode())
```