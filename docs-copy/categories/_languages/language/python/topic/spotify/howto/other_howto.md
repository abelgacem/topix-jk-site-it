<head><link rel="stylesheet" href="../../../../../../md.css"/><script src="../../../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Whatis]:   ../whatis/app_whatis.md

[Spotify_Dev_Ep]: https://developer.spotify.com/dashboard/

# [&larr;][Repo_Readme]Domain > Language > Spotify > Howto > Other
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Dev EP||||[Online][Spotify_Dev_Ep]&uarr;||
<br>

# Use Api
# Create a dev account
- Go to the Spotify Developer Dashboard
- Log in with your existing Spotify account
- click "create app"

|key|value|desc|
|-|-|-|
|name|MxAppSpotifyApp|The name of the app|
|cli id|zzz||
|cli secret|zzz||

# dev
- create a python venv
- Install lib
  - python -m pip install spotipy
- downgrade 1 dependency  
  - python -m pip install urllib3==1.26.7
