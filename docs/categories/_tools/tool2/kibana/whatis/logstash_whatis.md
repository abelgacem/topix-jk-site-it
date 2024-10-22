<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:      ../list/object_list.md
[Node_Howto]:       .
[Logstash_Howto]:   ../howto/logstash_howto
[Cluster_Whatis]:   ../whatis/cluster_whatis.md

# [&larr;][Repo_Readme] Elk > What is > Logstash
# See Also 
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Logstash|[Howto][Logstash_Howto]|
|Cluster|[Definition][Cluster_Whatis]|
<br>




# Definition
- capture log file
- inject them in elasticsearch

# Configuation file
## Type
- for pipeline (ie pipeline)
- for logstash strat and stop (ie settings)

# to know
- conf file defining plugins, can reference event fields and process events when they meet certain criteria
- the conf file is pass to logstash with param -f

# Config file skeleton
```toml
# This is a comment. You should use comments to describe
# parts of your configuration.
input {
  ...
}

filter {
  ...
}

output {
  ...
}
```

# Example of Config file
```toml
input {
  # first input file  
  # file denote 1 plugin
  file {
    # file denote 1 plugin
    path => "/var/log/messages"
    type => "syslog"
  }
  # second input file  
  file {
    path => "/var/log/apache/access.log"
    type => "apache"
  }
}
```
# Plugin
## Definition
- operate on events
- is configured via settings (ie kvpair)
## Type
|Name|Desc|
|-|-|
|Input|Enables a specific *source of events* to be read by Logstash|
|Output|<li>Sends *event* data to a particular destination</li><li>Outputs are the final stage in the event pipeline</li>|
|Filter|<li>Performs intermediary processing on an *event*</li><li>Is often applied conditionally depending on the characteristics of the *event*</li>
|Codec|<li>Changes the data representation of an *event*</li><li>Is essentially stream filter that can operate as part of an input or output</li>

# todo
- file $HOME/.sincedb
- file /var/lib/logstash/plugins/inputs/file/