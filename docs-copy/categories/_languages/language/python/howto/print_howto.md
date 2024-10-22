<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>


[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Item_Whatis]:   ../whatis/venv_whatis.md

[Venv_Whatis]:    ../whatis/venv_whatis.md


# [&larr;][Repo_Readme]Domain > Language > Python > Howto > Print ([Definition][Item_Whatis])



# Example
```python
print(
    f" ID: {pl_id}"
    f" Track: {pl_nbtrack}"
    f" Name: {pl_name}     "
    f"Owner:    {pl_owner}"
)
```

# Example
```python
# table:header
print("| Playlist Id             | Nb Track | Name               | Owner    |")
print("|-------------------------|----------|--------------------|----------|")
for playlist in lJSON_AS_VAR['items']:
    pl_id      = str(playlist['id'])
    pl_name    = playlist['name']
    pl_owner   = playlist['owner']['display_name']
    pl_nbtrack = str(playlist['tracks']['total'])
    pl_desc    = playlist['description'] if 'description' in playlist else "(empty)"
    pl_pub     = str(playlist['public'])
    pl_url     = f"[Link]({playlist['external_urls']['spotify']})"
    # table:row
    print(f"| {pl_id.ljust(24)} | {pl_nbtrack.ljust(7)} | {pl_name.ljust(18)} | {pl_owner.ljust(8)} |")    

```