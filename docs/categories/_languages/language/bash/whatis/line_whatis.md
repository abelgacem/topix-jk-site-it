<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Whatis]:   ../whatis/alphabet_whatis.md

[Grammar_Whatis]: ../whatis/grammar_whatis.md
[Set_Whatis]:     ../../theory_set/whatis/set/README.md
[Symbol_Whatis]:  ../list/object_list.md

# [&larr;][Repo_Readme]Domain > Language > Bash > Howto

# process line
## method
```bash
while read -r line; do
    job_name=$(echo "$line" | awk '{print $1}')
    second_item=$(echo "$line" | awk '{print $2}' | cut -d'-' -f1)
    echo "Job Name: $job_name, Second Item: $second_item"
done < output.txt
```

## method
```bash
mx_s3_file_pretty() {
  while IFS=' ' read -r line; do
    lFILE_PATH=$(awk -F' ' '{print $NF}' <<< $line)
    echo $lFILE_PATH
  done
}
```

## method

```bash
mx_s3_file_pretty() {
  awk -F' ' '{print $NF}'
}
```

## method

```bash
mx_s3_file_pretty() {
  awk -F' ' '{print $NF}'
}
```

## method
```bash
mx_s3_file_pretty() {
# Read the input list from stdin
lLIST_LINE_INPUT=$(cat)

# Replace char in the list
lLIST_LINE_TO_PROCESS=$(echo "$input" | tr '@' '\n')

# Process each line
for lLINE in $lLIST_LINE_TO_PROCESS; do
    echo "Processing line: $lLINE"
done
}
```
