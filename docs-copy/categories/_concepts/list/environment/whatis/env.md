---
---

# {{site.data.name.definition}}
- set of 
  - hardware
  - virtual resources

# {{site.data.name.example}}
- staging-sand
  - area for user@dev only
  - sandbox area for dev only - experimentation happens, without impacting anyting
- staging-uat
  - 1 acronym
  - 1 version of the tool to go in prod is deployed
  - area for tester only
- prod-qualif
  - 1 version of the tool to go in prod is deployed
  - area for key user only
- prod-isoprod
- prod-prod

# {{site.data.name.todo}}
- promote code between env 
  - from local           to staging-sandbox
  - from staging-sandbox to staging-dev
  - from staging-dev     to staging-uat
  - from staging-uat     to prod-qualification
  - from prod-qualification to prod-ispprod
  - from prod-isoprod       to prod-isoprod
- not forget in each env
  - anonymisation
  - mandatory laws and rules that apply
  - security policies
