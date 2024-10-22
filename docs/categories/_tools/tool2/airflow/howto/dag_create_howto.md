<head><link rel="stylesheet" href="../../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/dag_howto_list.md
[Dag_Whatis]:  ../whatis/dag_whatis.md

# [&larr;][Repo_Readme]Airflow > Howto > Create > Dag
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Dag|see|[Definition][Dag_Whatis]|-|



# Create simple Dag
## Method
```python
import pendulum
from datetime               import datetime, timedelta
from textwrap               import dedent
from airflow                import DAG
from airflow.operators.bash import BashOperator

# define metavar
sOwner  = "mx"
sDag_ID = "mx.test.prj.sprj.manual.v01"
sDAG_SHEDULE_CRON       = None
sDAG_SHEDULE_VISIBILITY = datetime=(2023, 1, 1, tzinfo=pendulum.timezone("Europe/Paris"))

## Method
```python
from datetime               import datetime, timedelta
from textwrap               import dedent
from airflow                import DAG
from airflow.operators.bash import BashOperator

my_dag =  DAG(
    sDag_ID, 
    start_date = pendulum.datetime(2021, 1, 1, tz="UTC"),
    schedule   = "@daily", 
    catchup    = False
)
op = EmptyOperator(task_id="task", dag=my_dag)
```


# Create advanced Dag
## Method - good
```python
from datetime               import datetime, timedelta
from textwrap               import dedent
from airflow                import DAG
from airflow.operators.bash import BashOperator

# define var
## These args will get passed on to each operator
default_args = {
         'owner':       'me',
         'depends_on_past': False,
         'email_on_failure': False,
         'email_on_retry': False,
        # 'start_date':  datetime(2018, 10, 31),
        # 'retry_delay': timedelta(minutes=5)
        # 'email": ["airflow@example.com"],
        # 'retries": 1,
        # 'queue': 'bash_queue',
        # 'pool': 'backfill',
        # 'priority_weight': 10,
        # 'end_date': datetime(2016, 1, 1),
        # 'wait_for_downstream': False,
        # 'sla': timedelta(hours=2),
        # 'execution_timeout': timedelta(seconds=300),
        # 'on_failure_callback': some_function,
        # 'on_success_callback': some_other_function,
        # 'on_retry_callback': another_function,
        # 'sla_miss_callback': yet_another_function,
        # 'trigger_rule': 'all_success'
}

# define var
## used by method@python
NVD_MODIFIED_META_URL = 'https://static.nvd.nist.gov/feeds/xml/cve/2.0/nvdcve-2.0-Modified.meta'
NVD_MODIFIED_URL      = 'https://static.nvd.nist.gov/feeds/xml/cve/nvdcve-2.0-Modified.xml.gz'
LAST_NVD_HASH         = '/tmp/lastnvd'

# define dag
dag = DAG(
    'demo', 
    description  =  "A simple tutorial DAG",
    default_args = default_args, 
    catchup      = False
    tags=["example"],
    # start_date=datetime(2021, 1, 1),
    # schedule=timedelta(days=1),
    # schedule   = "@daily", 
    # schedule_interval='0 * * * *'

)

# define method@python
def check_updates():
    logger.info("Downloading {url}...".format(url=NVD_MODIFIED_META_URL))

    resp = requests.get(NVD_MODIFIED_META_URL)
    buf  = BytesIO(resp.content).read().decode('utf-8')

    nvd_sha256 = buf.split('sha256')[1][1:-2]
    logger.info("New NVD hash is : {hash}".format(hash=nvd_sha256))

    try:
        with open(LAST_NVD_HASH) as f:
            last_nvd256 = f.read()
    except FileNotFoundError:
        last_nvd256 = None
    logger.info("Local hash is : {hash}".format(hash=last_nvd256))

    if nvd_sha256 != last_nvd256:
        logger.info("Hashes differ, Saucs database needs to be updated...")
        return {'updated': True, 'hash': nvd_sha256}
    else:
        logger.info("Hashes are the same, nothing to do.")
        return {'updated': False}

# define method@python
def download_xml(ds, **context):
    update = context['task_instance'].xcom_pull(task_ids='CheckUpdates')
    if not update['updated']:
        return

    logger.info("Downloading {url}...".format(url=NVD_MODIFIED_URL))

    resp = requests.get(NVD_MODIFIED_URL)
    buf = BytesIO(resp.content)
    data = gzip.GzipFile(fileobj=buf)

    xml_string = data.read().decode('utf-8')
    xml_string = re.sub(' xmlns="[^"]+"', '', xml_string)

    with open('/tmp/{0}.xml'.format(ds), 'w') as f:
        f.write(xml_string)

# define method@python
def parse_xml(ds, **context):
    update = context['task_instance'].xcom_pull(task_ids='CheckUpdates')
    if not update['updated']:
        return

    parser = ET.XMLParser(encoding="utf-8")
    tree = ET.parse('/tmp/{0}.xml'.format(ds), parser=parser)
    root = tree.getroot()

    for child in root:
        logger.info("Parsing {cve}...".format(cve=child.attrib.get('id')))

        # 1. Process the CVE (new CVE, CPE updated, references updated, CVSS updated...)
        # 2. Create an alert for all impacted users

# define method@python
def send_mails(ds, **context):
    update = context['task_instance'].xcom_pull(task_ids='CheckUpdates')
    if not update['updated']:
        return

    logger.info('Sending mail for users with an alert')
    """users = get_users_with_alerts()

    for user in users:
        send_user_mail()
        user.new_alerts = False"""

    # We're done, we can set the new NVD hash in local
    with open(LAST_NVD_HASH, 'w') as f:
        f.write(update['hash'])

with dag:
    # create task
    task01_op = SimpleHttpOperator(
        task_id="task01_op"
        endpoint="http://example.com/update/"
    )
    # create task
    task02_op = EmailOperator(
        task_id="task02_op"
        to="admin@example.com", subject="Update complete"
    )
    # create task
    task03_op = BashOperator(
        task_id="task03_op"
        bash_command="date",

    )
    # create task
    task04_op = EmptyOperator(
        task_id="task"
    )
    # create task@python
    check_updates_op = PythonOperator(
        task_id='CheckUpdates',
        python_callable=check_updates
    )

    # create task@python
    download_xml_op = PythonOperator(
        task_id='DownloadXml',
        provide_context=True,
        python_callable=download_xml
    )

    # create task@python
    parse_xml_op = PythonOperator(
        task_id='ParseXml',
        provide_context=True,
        python_callable=parse_xml
    )

    # create task@python
    send_mails_op = PythonOperator(
        task_id='SendMails',
        provide_context=True,
        python_callable=send_mails
    )
# define tasks dependencies
## multiline
task01_op >> task02_op >> task03_op >> task04_op
check_updates_op >> download_xml_op >> parse_xml_op >> send_mails_op


```



## Method
```python
from datetime               import datetime, timedelta
from textwrap               import dedent
from airflow                import DAG
from airflow.operators.bash import BashOperator

dag =  DAG(
    "my_dag_name", 
    start_date = pendulum.datetime(2021, 1, 1, tz="UTC"),
    schedule   = "@daily", 
    catchup    = False
)

with dag:
    # create task@python
    op = EmptyOperator(
        task_id="op"
    )
```



## Method
```python
# Standart import
...

dag = DAG("my-dag")
with dag:
    # create task@SimpleHttp
    ping_op = SimpleHttpOperator(
        endpoint="http://example.com/update/"
    )
    # create task@Email
    email_op = EmailOperator(
        to="admin@example.com", subject="Update complete"
    )

# task dependency
ping_op >> email_op
```



# Method
```python
from datetime               import datetime
from airflow                import DAG
from airflow.decorators     import task
from airflow.operators.bash import BashOperator

# create 1 dag
with DAG(
    dag_id="demo", 
    start_date=datetime(2022, 1, 1), 
    schedule="0 0 * * *"
) as dag:

    # create 1 task@bash
    hello = BashOperator(
        task_id="hello", 
        bash_command="echo hello"
    )

    # create 1 task@python
    @task()
    def airflow():
        print("airflow")

    # define tasks dependencies
    hello >> airflow()
```    

## Method
```python
from datetime               import datetime, timedelta
from textwrap               import dedent
from airflow                import DAG
from airflow.operators.bash import BashOperator

# create 1 dag
with DAG(
    "tutorial",
    # These args will get passed on to each operator
    # You can override them on a per-task basis during operator initialization
    default_args={
        "depends_on_past": False,
        "email": ["airflow@example.com"],
        "email_on_failure": False,
        "email_on_retry": False,
        "retries": 1,
        "retry_delay": timedelta(minutes=5),
        # 'queue': 'bash_queue',
        # 'pool': 'backfill',
        # 'priority_weight': 10,
        # 'end_date': datetime(2016, 1, 1),
        # 'wait_for_downstream': False,
        # 'sla': timedelta(hours=2),
        # 'execution_timeout': timedelta(seconds=300),
        # 'on_failure_callback': some_function,
        # 'on_success_callback': some_other_function,
        # 'on_retry_callback': another_function,
        # 'sla_miss_callback': yet_another_function,
        # 'trigger_rule': 'all_success'
    },
    description="A simple tutorial DAG",
    schedule=timedelta(days=1),
    start_date=datetime(2021, 1, 1),
    catchup=False,
    tags=["example"],
) as dag:

    # create 1 task@bash
    t1 = BashOperator(
        task_id="print_date",
        bash_command="date",
    )

    # create 1 task@bash
    t2 = BashOperator(
        task_id="sleep",
        retries=3,
        depends_on_past=False,
        bash_command="sleep 5",
    )
    # document 1 task@bash
    t1.doc_md = dedent(
        """\
    #### Task Documentation
    You can document your task using the attributes `doc_md` (markdown),
    `doc` (plain text), `doc_rst`, `doc_json`, `doc_yaml` which gets
    rendered in the UI's Task Instance Details page.
    ![img](http://montcs.bloomu.edu/~bobmon/Semesters/2012-01/491/import%20soul.png)
    **Image Credit:** Randall Munroe, [XKCD](https://xkcd.com/license.html)
    """
    )

    # document the dag
    dag.doc_md = __doc__  # providing that you have a docstring at the beginning of the DAG; OR
    # document the dag
    dag.doc_md = """
    This is a documentation placed anywhere
    """  # otherwise, type it like this
    # create templated bash code that will be used by task t3
    templated_command = dedent(
        """
    {% for i in range(5) %}
        echo "{{ ds }}"
        echo "{{ macros.ds_add(ds, 7)}}"
    {% endfor %}
    """
    )

    # create 1 task@bash
    t3 = BashOperator(
        task_id="templated",
        depends_on_past=False,
        bash_command=templated_command,
    )

    # define tasks dependencies
    t1 >> [t2, t3]
```
## Method
```python
from datetime               import datetime, timedelta
from textwrap               import dedent
from airflow                import DAG
from airflow.operators.bash import BashOperator

# define var
default_args={
   "depends_on_past": False,
             "email": ["airflow@example.com"],
  "email_on_failure": False,
    "email_on_retry": False,
           "retries": 1,
       "retry_delay": timedelta(minutes=5),
# 'queue': 'bash_queue',
# 'pool': 'backfill',
# 'priority_weight': 10,
# 'end_date': datetime(2016, 1, 1),
# 'wait_for_downstream': False,
# 'sla': timedelta(hours=2),
# 'execution_timeout': timedelta(seconds=300),
# 'on_failure_callback': some_function,
# 'on_success_callback': some_other_function,
# 'on_retry_callback': another_function,
# 'sla_miss_callback': yet_another_function,
# 'trigger_rule': 'all_success'
}

# create 1 dag
dag = DAG(
    "tutorial",
    default_args=default_args,
    description="A simple tutorial DAG",
    schedule=timedelta(days=1),
    start_date=datetime(2021, 1, 1),
    catchup=False,
    tags=["example"],
)
with dag:
    # create task@bash
    t1_op = BashOperator(
        task_id="print_date",
        bash_command="date",
    )

    # create task@bash
    t2_op = BashOperator(
        task_id="sleep",
        depends_on_past=False,
        bash_command="sleep 5",
        retries=3,
    )
    # document task@bash
    t1_op.doc_md = dedent(
        """\
    #### Task Documentation
    You can document your task using the attributes `doc_md` (markdown),
    `doc` (plain text), `doc_rst`, `doc_json`, `doc_yaml` which gets
    rendered in the UI's Task Instance Details page.
    ![img](http://montcs.bloomu.edu/~bobmon/Semesters/2012-01/491/import%20soul.png)
    **Image Credit:** Randall Munroe, [XKCD](https://xkcd.com/license.html)
    """
    )

    # document the dag
    dag.doc_md = __doc__  # providing that you have a docstring at the beginning of the DAG; OR
    # document the dag
    dag.doc_md = """
    This is a documentation placed anywhere
    """  # otherwise, type it like this
    # create templated bash code that will be used by task t3
    templated_command = dedent(
        """
    {% for i in range(5) %}
        echo "{{ ds }}"
        echo "{{ macros.ds_add(ds, 7)}}"
    {% endfor %}
    """
    )

    # create task@bash
    t3_op = BashOperator(
        task_id="templated",
        depends_on_past=False,
        bash_command=templated_command,
    )

# define tasks dependencies
t1_op >> [t2_op, t3_op]
```

# Create
```python
import gzip
import logging
import re
import requests
from datetime  import datetime, timedelta
from io        import BytesIO
from xml.etree import ElementTree as ET
from airflow   import DAG
from airflow.operators.python_operator import BranchPythonOperator, PythonOperator

# define var
default_args = {
         'owner': 'me',
    'start_date': datetime(2018, 10, 31),
       'retries': 5,
   'retry_delay': timedelta(minutes=5)
}

# define logger
logger = logging.getLogger(__name__)

# define var
NVD_MODIFIED_META_URL = 'https://static.nvd.nist.gov/feeds/xml/cve/2.0/nvdcve-2.0-Modified.meta'
NVD_MODIFIED_URL      = 'https://static.nvd.nist.gov/feeds/xml/cve/nvdcve-2.0-Modified.xml.gz'
LAST_NVD_HASH         = '/tmp/lastnvd'

# define method@python
def check_updates():
    logger.info("Downloading {url}...".format(url=NVD_MODIFIED_META_URL))

    resp = requests.get(NVD_MODIFIED_META_URL)
    buf  = BytesIO(resp.content).read().decode('utf-8')

    nvd_sha256 = buf.split('sha256')[1][1:-2]
    logger.info("New NVD hash is : {hash}".format(hash=nvd_sha256))

    try:
        with open(LAST_NVD_HASH) as f:
            last_nvd256 = f.read()
    except FileNotFoundError:
        last_nvd256 = None
    logger.info("Local hash is : {hash}".format(hash=last_nvd256))

    if nvd_sha256 != last_nvd256:
        logger.info("Hashes differ, Saucs database needs to be updated...")
        return {'updated': True, 'hash': nvd_sha256}
    else:
        logger.info("Hashes are the same, nothing to do.")
        return {'updated': False}

# define method@python
def download_xml(ds, **context):
    update = context['task_instance'].xcom_pull(task_ids='CheckUpdates')
    if not update['updated']:
        return

    logger.info("Downloading {url}...".format(url=NVD_MODIFIED_URL))

    resp = requests.get(NVD_MODIFIED_URL)
    buf = BytesIO(resp.content)
    data = gzip.GzipFile(fileobj=buf)

    xml_string = data.read().decode('utf-8')
    xml_string = re.sub(' xmlns="[^"]+"', '', xml_string)

    with open('/tmp/{0}.xml'.format(ds), 'w') as f:
        f.write(xml_string)

# define method@python
def parse_xml(ds, **context):
    update = context['task_instance'].xcom_pull(task_ids='CheckUpdates')
    if not update['updated']:
        return

    parser = ET.XMLParser(encoding="utf-8")
    tree = ET.parse('/tmp/{0}.xml'.format(ds), parser=parser)
    root = tree.getroot()

    for child in root:
        logger.info("Parsing {cve}...".format(cve=child.attrib.get('id')))

        # 1. Process the CVE (new CVE, CPE updated, references updated, CVSS updated...)
        # 2. Create an alert for all impacted users

# define method@python
def send_mails(ds, **context):
    update = context['task_instance'].xcom_pull(task_ids='CheckUpdates')
    if not update['updated']:
        return

    logger.info('Sending mail for users with an alert')
    """users = get_users_with_alerts()

    for user in users:
        send_user_mail()
        user.new_alerts = False"""

    # We're done, we can set the new NVD hash in local
    with open(LAST_NVD_HASH, 'w') as f:
        f.write(update['hash'])

# create dag
dag = DAG('demo', default_args=default_args, schedule_interval='0 * * * *')

with dag:
    # create task@python
    check_updates_op = PythonOperator(
        task_id='CheckUpdates',
        python_callable=check_updates
    )

    # create task@python
    download_xml_op = PythonOperator(
        task_id='DownloadXml',
        provide_context=True,
        python_callable=download_xml
    )

    # create task@python
    parse_xml_op = PythonOperator(
        task_id='ParseXml',
        provide_context=True,
        python_callable=parse_xml
    )

    # create task@python
    send_mails_op = PythonOperator(
        task_id='SendMails',
        provide_context=True,
        python_callable=send_mails
    )
# define tasks dependencies
check_updates_op >> download_xml_op >> parse_xml_op >> send_mails_op

"""
# Can be written :
check_updates_op.set_downstream(download_xml_op)
download_xml_op.set_downstream(parse_xml_op)
parse_xml_op.set_downstream(send_mails_op)
"""

```
