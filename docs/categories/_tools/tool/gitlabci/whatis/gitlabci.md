---
draft : true
mx:  
  lp: O
  ref:
    child:
      - whatis/pipeline
      - whatis/gitlabcifile
---


# definition
- The name of the gitlab application pipeline engine

# member
- 1 or more GitlabCiFile

# purpose
Automate:
  - delivery (**c**ontinuous **d**elivery)
  - integration (**c**ontinuous **i**ntegration)
  - deployment (**c**ontinuous **d**eployment)


# Good to know
- Difficulty of GitabCi comes from the ability of configuring the triggering of jobs that can runs in parallel in sequenced stage ... rules and instructions are not that clear



# Best practise
Else exeption:
- 2 jobs of the same pipeline should not runs on the same runner
