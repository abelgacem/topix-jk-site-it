---
draft : true
mx: 
  index:  child
  lp: 2
---

# CIDR

## example

- CIDR (Ip/Prefix) : 10.1.2.240/28

|key|value|dexcription|
|-|-|-|
|first bits|28|prefix|
|last bits|4|32-prefix|

|key|binary, dot|decimal, dot|dexcription|
|-|-|-|-|
|network @ host|00001010 . 00000001 . 00000010. 1111 @ 0000|10. 1. 2. 240|IP with separation 28 @ 4
|wildcard|00000000 . 00000000 . 00000000. 0000 @ 1111|0 . 0 . 0. 15|set net to 0, set host to 1 
|netmask|11111111 . 11111111 . 11111111. 1111 @ 0000|255 . 255 . 255. 240|set net to 1, set host to 0 
|broadcast|00001010 . 00000001 . 00000010. 1111 @ 1111|10. 1. 2. 255|keep net, set host to 1 
|network|00001010 . 00000001 . 00000010. 1111 @ 0000|10. 1. 2. 240|keep net, set host to 0
|host min|00001010 . 00000001 . 00000010. 1111 @ 0001|10. 1. 2. 241|keep net, set host to min+1 
|host max|00001010 . 00000001 . 00000010. 1111 @ 1110|10. 1. 2. 254|keep net, set host to max-1 

## example

- CIDR (Ip/Prefix) : 10.1.2.0/24

|key|value|dexcription|
|-|-|-|
|first bits|24|prefix|
|last bits|8|32-prefix|

|key|binary, dot|decimal, dot|dexcription|
|-|-|-|-|
|network @ host|00001010 . 00000001 . 00000010. @ 00000000|10. 1. 2. 0|IP with separation 24 @ 8
|wildcard|00000000 . 00000000 . 00000000. @ 11111111|0 . 0 . 0. 255|set net to 0, set host to 1 
|netmask|11111111 . 11111111 . 11111111. @ 00000000|255 . 255 . 255. 0|set net to 1, set host to 0 
|broadcast|00001010 . 00000001 . 00000010. @ 11111111|10. 1. 2. 255|keep net, set host to 1 
|network|00001010 . 00000001 . 00000010. @ 00000000|10. 1. 2. 0|keep net, set host to 0
|host min|00001010 . 00000001 . 00000010. @ 00000001|10. 1. 2. 1|keep net, set host to min+1 
|host max|00001010 . 00000001 . 00000010. @ 11111110|10. 1. 2. 254|keep net, set host to max-1 


## example

- CIDR (Ip/Prefix) : 171.16.0.0/12:

|key|value|dexcription|
|-|-|-|
|first bits|12|prefix|
|last bits|20|32-prefix|

|key|binary, dot|decimal, dot|dexcription|
|-|-|-|-|
|network @ host|10101011. 0001 @ 0000. 00000000 00000000|171. 16. 0. 0|IP with separation 12 @ 20
|wildcard|00000000. 0000 @ 1111. 11111111 11111111|0.15.255.255|set net to 0, set host to 1 
|netmask|11111111. 1111 @ 0000. 00000000 00000000|255.240.0.0|set net to 1, set host to 0 
|broadcast|10101011. 0001 @ 1111. 11111111 11111111|171.35.255.255|keep net, set host to 1 
|network|10101011. 0001 @ 0000. 00000000 00000000|171.16.0.0|keep net, set host to 0
|host min|10101011. 0001 @ 0000. 00000000 00000001|171.16.0.1|keep net, set host to min+1 
|host max|10101011. 0001 @ 1111. 11111111 11111110|171.31.255.254|keep net, set host to max-1 



# `ipcalc`
- display info on CIDR
```bash
# define var
lIP="10.1.2.0/24"

# cli
ipcalc -bnmphs $lIP

# output
NETMASK=255.255.255.0
BROADCAST=10.1.2.255
NETWORK=10.1.2.0
PREFIX=24
HOSTNAME=10.1.2.0
```