---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp:       2
---

# Type
- at runtime
- static
# Member
- status (running, failed, stop, history, ...)

# Dag
- need strong python skills
- is1 acronym
- denotes, represents 1 *workflow*
- is1 sequence of tasks
- is launch 
  - at a regular basis
  - via 1 trigger
- is saved in airflow:db
# Representation
```mermaid
graph LR;
 Task01-->Task02-->Task03-->Task04;    
```
## example
```mermaid
graph LR;
 Task01_wait_input-->Task02_donwload_file-->Task03_process_file-->Task04_upload_file;    
```

# Dag Run
- is1 instantiation of the DAG (in time)

# Toknow 
- Any time 1 DAG is executed, 1 DAG Run is created and all tasks inside it are executed
- 1..N Dag can runs at the same time

# Status
Can be:
- *success* if all of the leaf nodes states are either *success* or *skipped*,
- *failed* if any of the leaf nodes state is either *failed* or *upstream_failed*.

# Example
- Run a Spark job
- Move data between two buckets
- Send 1 email