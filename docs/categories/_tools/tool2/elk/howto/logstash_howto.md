<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:      ../list/object_list.md
[Logstash_Whatis]:  ../whatis/logstash_whatis.md

# [&larr;][Repo_Readme] Elk > Howto > Logstash
# See Also 
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Logstash|[Definition][Logstash_Whatis]|
<br>

# Test Syntax of 1 confile
```bash
lMX_BIN_LOGSTASH="/usr/share/logstash/bin"
lMX_CONF="/tmp/kibana2.json"
sudo ${lMX_BIN_LOGSTASH}/logstash --path.settings /etc/logstash -f ${lMX_CONF} -t
sudo ${lMX_BIN_LOGSTASH}/logstash -f ${lMX_CONF} -t
```

# Start in background
```bash
# put 1 file in /etc/logstash/conf.d name xxx.conf
# Start logstash - WARN: can write to stdout
sudo ${lMX_BIN_LOGSTASH}/logstash "--path.settings" "/etc/logstash" &
```

# Configure via configuration file

1. create a config that specifies the plugins
1. configure each plugin

# Create 1 conf in /etc/logstash/conf.d
## Example
```ini
# Define var
lLOGSTASH_CONF_01="logstash-simple.conf"
# create file ${lLOGSTASH_CONF_01}
input { 
    stdin { } 
}
output {
  elasticsearch { 
    hosts => ["localhost:9200"] 
  }
  stdout { codec => rubydebug }
}
```

## Example
```toml
input {
    # plugin:file to get data from file@(txt,log)
    file { 
        path => "/var/log/kibana/kibana.log" 
        # get data from begining of the file
        start_position => "beginning"
        sincedb_path => "/dev/null"
    }
}

filter {
    # filter used to transfrom input@log
    grok {
        # generate set of kvpair from 1 line of log
        match => { "message" => "%{IP:client} %{WORD:method} %{URIPATHPARAM:request} %{NUMBER:bytes} %{NUMBER:duration}" }
    }
}
output {
    stdout { codec => rubydebug }
}
```






# test logstash
```bash
sudo ${lMX_BIN_LOGSTASH}/logstash -f ${lMX_CONF} -t
sudo ${lMX_BIN_LOGSTASH}/logstash -e 'input { stdin { } } output { stdout {} }'
sudo ${lMX_BIN_LOGSTASH}/logstash -e 'input { file { path => "/var/log/kibana/kibana.log" start_position => "beginning" sincedb_path => "/dev/null" } } output { stdout {} }'
sudo /usr/share/logstash/bin/logstash -e 'input { file { path => "/var/log/kibana/kibana.log" start_position => "beginning" sincedb_path => "/dev/null" } } output { stdout {codec => rubydebug} }'
```



