<head><link rel="stylesheet" href="../../../md.css"/></head><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:      ../list/object_list.md
[Action_Whatis]:    ../whatis/action_whatis.md
[Action_Howto]:     ../howto/action_howto.md
[Scheduler_Howto]:  ../howto/scheduler_howto.md

# [&larr;][Repo_Readme]Airflow > What is > Scheduler
# List of references
|Name|Learning Path|Seq|View|Description|
|-|-|-|-|-|
|Scheduler||pre|[Howto][Scheduler_Howto]|-|
|Dagrun||pre|[Howto][Scheduler_Howto]|-|

# Definition
- is used to launch Dag at frequency define in the dag
- get its info from db

# Todo
## BP
- always define the timezone
## some var
|name||description|
|-|-|-|
|start_date||<li>when the dag become visible/schedulable</li><li>before this date, the dag is not visible/shedulable</li>


# todo
## the pbs
- Scheduling Action that schedule Action
## the idea

- start_date
  - define it hard in code
  - set capure paramaters to false
  - must be static

- end_date
  - dag is not scheduled

- schedule_interval = 
  - cron expression = crontab guru
  - when the dag is triggered
  - when the dag is rescheduled when it sleeps
  - when the dag is put in sleep with times going on
  - example
   - schedule_interval ='@daily'
   - schedule_interval ='@weekly'
   - schedule_interval ='@CRON'
  - idea
   - when trigger the dag 


- dag_run is 1 instance of 1 DAG    

- dag is triggered after
  - last_run/scheduled_interval



