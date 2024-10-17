---
layout: topic
mx:
  description:  A time slot booking written using Django.
---


# {{ site.data.name.description }}
- Dedicated for mathematics courses remotly or onsite.

# {{ site.data.name.purpose }}
Learn to use frameworks:
  - Django (for the UI)
  - Stripe (for payments)


# Project's steps
1. Manage a Python venv
1. Install Dependencies
1. Create the Django Project
1. Forward request to your local machine
1. Configure the project
1. Django Models for courses and bookings
1. Django Views for course and booking management
1. Configure URLs
1. HTML Templates for the UI
1. Apply Migrations
1. Create the application administrator
1. Start the Server

# Manage a python venv
## prerequisites
- python is already installed
## other steps

install python venv manager
```powershell
# for debian/ubuntu
lPYTHON_VERSION=$(python3 --version | cut -d " " -f 2 | cut -d. -f1,2)
sudo apt install python${lPYTHON_VERSION}-venv -y
```

create a python venv
```powershell
# define var
lPYTHON_VENV_FOLDER_ROOT="${HOME}/python/venv"
lPYTHON_VENV_FOLDER_DJANGO="${lPYTHON_VENV_FOLDER_ROOT}/django"

# action
python3 -m venv ${lPYTHON_VENV_FOLDER_DJANGO}
```
source the venv
```powershell
source ${lPYTHON_VENV_FOLDER_DJANGO}/bin/activate
```

deactivate the venv
```powershell
dactivate
```


# Install Dependencies
we suppose:
  - python is already installed
  - a python venv is sourced
```powershell
pip install django django-allauth stripe
```



# Create the Django Project
```powershell
# define var
lDJANGO_NAME_PROJECT="bookit"

# go into python venv
cd ${lPYTHON_VENV_FOLDER_DJANGO}

# create project
django-admin startproject ${lDJANGO_NAME_PROJECT}

# go into django project
cd ${lDJANGO_NAME_PROJECT}

# start server
python manage.py runserver # python manage.py startapp ${lDJANGO_NAME_PROJECT}
the output looks like (the server is listening request):
  Django version 5.1.1, using settings 'bookit.settings'
  Starting development server at http://127.0.0.1:8000/
```

# port forward request to your local machine
```powershell
lSERVER_NAME_REMOTE='o1u'
lSERVER_NAME_LOCAL='127.0.0.1' # Refers to the VM (o1u), but within the context of the SSH connection.
lSERVER_NAME_LOCAL='localhost' # Refers to the VM (o1u), but within the context of the SSH connection.
lPORT_LOCAL='9000'
lPORT_REMOTE='8000'
# ssh -L [local_port]:[remote_host]:[remote_port] [ssh_server]
ssh -L ${lPORT_LOCAL}:${lSERVER_NAME_LOCAL}:${lPORT_REMOTE} ${lSERVER_NAME_REMOTE}
```

# Contributors
- Jawad, Amar
