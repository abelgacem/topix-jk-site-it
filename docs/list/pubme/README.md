---
layout: default
---


[//]: #(Reference)
[homepage]:   {{ "/index" | absolute_url }}

# [&larr;][homepage] Project > {{ site.data.project_name.pubme_name }}
# Decscription
- {{ site.data.project_description.pubme_description }}

# Purpose
- Explain how to port forward to a public IP using differents tools.
- Quickly test real world access to a server runing in a vm, cloud or container.
- Quickly publish and share any service for a temporary collaboration.

# Proposition

## 1. NgRock

- create an account in https://ngrok.com/share-your-ngrok-story
- install tool on a vm (eg. o1u)
  ```powershell
  # debian/ubuntu
  sudo snap install ngrok
  ```
- start a server on the vm (eg. o1u)
  ```powershell
  # example with django
  python manage.py runserver
  update file settings.pywith the following
  ALLOWED_HOSTS = ['*']
  ```
- forward it to a temporary public ip
  ```powershell
  # generate a temporary public Url
  ngrok http localhost:8000
  ```
**other command**

```powershell
ngrok config check
ngrok config add-authtoken xxx
```

## 2. Serveo

- start a server on the vm (o1u)
  ```powershell
  # example with django
  python manage.py runserver
  update file settings.pywith the following
  ALLOWED_HOSTS = ['*']
  ```
- forward it to a temporary public ip
  ```powershell
  # generate a temporary public Url
  ssh -R 80:localhost:8000 serveo.net
  ```

## 3. Github pages
- create a public repository in https://github.com
- GUI > repository > pages:
  - `deploy from a branch`
  - choose the branch > save
- a push on branch:main trigger thje deployment

## 4. from your mac

- start a server on the vm (o1u)
  ```powershell
  # example with django
  python manage.py runserver
  ```
- forward it to a temporary public ip (on the mac)
  ```powershell
  # generate a temporary public Url
  ssh -L 9000:localhost:8000 o1u
  ```

# Contributors
- Amar
