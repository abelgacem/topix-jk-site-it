


# Definition
Define condition to include/exclude job in pipeline

# Type

Type00
- simple
- complex

Type01
- When can be
  - on_succes
  - on_failure
  - always
  - manual
  - delayed [duration]
  - never
- Allow_failure can be
  - true
    - allow job to failed but stage to succeed
  - false (default)
- variables
  - used with *if*

Type02
- if
- changes
- exists
  - check if 1..N files/folders exists

# Member
- Clause
  - if
  - changes (which file has changed)
  - exists  (which file exists)
- Operator  (compare var)
  - VarName (True if var exists)
  - ==
  - !=
  - ||
  - &&
  - =~  (regexp)
  - !~  (regexp)
- Result
  - when  (denote then of if...then expression)
  - allow_failure
  - start_in
- WhenOption
  - always
  - never
  - on_success
  - on_failure
  - manual
  - delayed

# Default behavior for all job
```yaml
job:
  stage: mystage
  script:
    - ...
  when: on_success
  allow_failure: true
```
# Toknow
- rules are evaluated before any jobs run.
- dotenv variables created in job cannot be used in rules
- replace the deprecated only/except
- avoid to use only/except