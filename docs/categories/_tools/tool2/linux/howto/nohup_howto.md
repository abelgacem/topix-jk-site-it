# [&larr;][Repo_Readme] Linux > Howto > nohup

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

# Example
```bash
# in prompt
nohup bash -c 'for i in $(seq 2); do mx_lambda_launch uat; done' > /tmp/nohup.uat 2>&1 &

# via 1 alias launching 1 method@bash
```

# Example
```bash
# step 01
alias test="nohup mycmd &"
```
