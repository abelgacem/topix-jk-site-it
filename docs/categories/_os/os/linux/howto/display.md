---
draft : false
mx:
  lp:
  ref:
    child:
      - definision/display
---

# Format
## Generic
```powershell
# define var
lHOSTNAME_OR_IP="176.12.4.56"  
lDISPLAY_NUMBER="yyy"       # 1 integer usually 0
lSCREEN_NUMBER="zzz"        # 1 integer usually 0
# 
export DISPLAY="${lHOSTNAMEORIP}${lDISPLAY_NUMBER}${lSCREEN_NUMBER}"
```