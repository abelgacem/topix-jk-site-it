---
---





# Get server status
```shell
[ -n "$(ps -ef | grep jekyll | grep serve | awk '{print $2}')" ] && echo "Server running" || echo "No server running"
``` 
