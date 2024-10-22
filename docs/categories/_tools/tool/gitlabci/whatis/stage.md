---
draft : false
mx:
  ref:
    child:
      - whatis/gitlabci
      - whatis/runner
---

# Definition
- 1 set of jobs
- Define wwhen to run the jobs
- belongs to 1 pipeline

# Type
- Default
- Custom

# Stage@default
- .pre

# Stage@default
- Build
- Test
- Deploy

# Rules
- Each job  of 1 stage  is executed on a **runner**
- All  jobs of 1 stage are by default executed in **parallel** on different runners



# Exception
- 

# Best practice
- avoid dependencies of jobs of a same stage

# To know
- All jobs of 1 stage can start in parallel: 1 job per runner
- When 1..1 job fails, the stage fails
- When 1..1 stage fails, the pipeline fails
- When 1 stage is in success the next stage in the pipeline is executed
