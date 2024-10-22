# Purpose
## create 1 file@sh from 1 file@yaml
## export 1 var per line in yaml
mx_yaml_ve_create() {
  sFILE_OUTPUT=$1
  sFILE_INPUT="/tmp/res/ve.yaml"

  sLIST_ROOTKEY=$(cat "${sFILE_INPUT}" | yq "keys | sort | .[]" )
  # for each rootkey
  for tITEM_ROOTKEY in ${sLIST_ROOTKEY}; do
    # add 1 comment
    echo "# section ${tITEM_ROOTKEY}" >> ${sFILE_OUTPUT}
    # add 1 export for each item in the rootkey:list 
    cat ${sFILE_INPUT} | yq ".[\"${tITEM_ROOTKEY}\"] | .[]" | sed "s/: /=/" | sed 's/^/export /' >> ${sFILE_OUTPUT}
  done
}

# Purpose
## create 1 file@sh from 1 file@yaml
## create 1 folder per line in file@yaml
mx_yaml_folder() {
  sFILE_OUTPUT=$1
  sFILE_INPUT="/tmp/res/folder.yaml"
  # for each item create a sentence to create 1 folder
  cat ${sFILE_INPUT} | yq ".[]" | sed 's/^/mkdir -p /' >>  ${sFILE_OUTPUT}
  chmod +x ${sFILE_OUTPUT}
}

# Purpose: append export to existing file
mx_yaml_ve_append() {
sFILE_OUTPUT=$1
sFILE_INPUT="/tmp/res/ve.yaml"

sLIST_ROOTKEY=$(cat "${sFILE_INPUT}" | yq "keys | sort | .[]" )
# for each rootkey
for tITEM_ROOTKEY in ${sLIST_ROOTKEY}; do
  # add 1 comment
  echo "# section ${tITEM_ROOTKEY}" >> ${sFILE_OUTPUT}
  # add 1 export for each item in the list 
  cat ${sFILE_INPUT} | yq ".[\"${tITEM_ROOTKEY}\"] | .[]" | sed "s/: /=/" | sed 's/^/export /' >> ${sFILE_OUTPUT}
done
}
