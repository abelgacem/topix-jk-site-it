---
---
   

# Definition
common def
  - Is 1 resource that 
    - is NotShared, Personal
    - should be accessible to a finite set of persons

It def
  - Is 1 resource that 
    - **should be** defined by 1 tool and regulary updated by this tool
    - **should be** accessible only to a finite set of tools
    - **should nver be** accessible to a human

Example:
  - User
     - Login:Name and Login:Pwd
  - Gitlab
    - Token
  - Ssh
    - key@private
# Member
- Time to live
- keyvpair
# Type
relative to Time to live
  - ephemeral
  - eternal

relative to format
  - txt String
  - File
  - Binary String
  - Txt

# Good to know
- 1 string@txt can be 1 file@txt (e.g big string like key@ssh private)
