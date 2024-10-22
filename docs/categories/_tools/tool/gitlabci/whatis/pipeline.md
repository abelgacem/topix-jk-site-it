---
draft : false
mx:
  ref:
  ref:
    content:
      - common/definition/pipeline
    child:
      - whatis/stage
      - whatis/gitlabci
---

# Definition
- 1 sequence of stages
- derible by a one or more GitlabCiFile
- Managed by Gitlab's engine


# Member
- each box   denote a stage
- each arrow denote a trigering
- State

## State
- success
- failed

# The process
- The **first stage** in the pipeline is triggered automatically
- Each stage in state **success** trigger the next stage in the pipeline
- The **last stage** in the pipeline can trigger
  - xxx

# To know
- pipeline can be triggered manually

# Rules
- A pipeline's state is **success** when all stages of the pipeline are in state:**success**, .
- A pipeline's state is **failed**  when 1   stage  of the pipeline is  in state:**failed**, 


# Exceptions
- A stage can be marked so that when it is in state:**failed**, the pipeline's state stays in state **success**.
- https://docs.gitlab.com/ee/ci/pipelines/pipeline_architectures.html#basic-pipelines

# Reference
- https://docs.gitlab.com/ee/ci/pipelines/
- https://docs.gitlab.com/ee/ci/pipelines/pipeline_architectures.html#basic-pipelines