---
mx:
  domain: tool
  description: A documentation hub.
  lp:
  ref:
---

# {{ site.data.name.description }}
- {{ page.mx.description }}
- A web application.

# {{ site.data.name.purpose }}
This hub:  

- Is the entry point for the company's documentation.
- Defines a common terminology accessible and shared by all.
- Unifies the writing and conception of documents.
- Allows for writing and consuming any type of document, including:
  - Technical guides, User manuals
  - DAT, DCT, Specs, Release, RFC
  - Project specifications
  - Tutorials, Processes
  - Policies
  - And more
- Displays a document in the user's language or any other language.
- Leverages the full capabilities of a {{site.data.name.git}} repository and codebase (security, release, collaboration, review, ...).
- Implement cross-references between related documents, improving navigation and context.
- Establishes flexible learning paths for users to explore at their own pace to learn about:
  - The Processes, methodologies, technologies, {{site.data.name.etc}}.
  - Topics within specific domains, Tutorials.


# {{ site.data.name.requirement }}

## Documentation Model
The application defines the following concepts:

- {{site.data.topix.domain}}:   
    - The documentation is subdivided into domains ({{site.data.name.eg}} Math, IT, Physics, Psychology, History, etc.).
    - Each is subdivided into {{site.data.topix.category}}, {{site.data.name.eg}}:
      - The Maths domain would have the categories: Theories, Numbers.
      - The IT domain would have the categories: Programing, Cloud, Network.
- {{site.data.topix.category}}: 
    - There are 2 kind of {{site.data.topix.category}}:
       - the categoy named {{site.data.topix.list}} {{site.data.name.sdef}}
       - the other {{site.data.topix.category}} {{site.data.name.udef}}
    Each contains a collection of item named {{site.data.topix.topic}}, {{site.data.name.eg}}:
    - Each contains a collection of item named {{site.data.topix.topic}}, {{site.data.name.eg}}:
      - The Theories category of the Maths domain would define the items : Set, Language.
      - The Programing category of the IT domain would have the items    : Java, Liquid.
- {{site.data.topix.topic}}:  
    - Each defines a set of {{site.data.topix.stopic}} with points of view, which together help to understand the {{site.data.topix.topic}}, {{site.data.name.eg}}:
      - {{site.data.topix.topic}}:Set in the Maths domain woud have objects: element,  
      - {{site.data.topix.topic}}:Java in the Maths domain woud have objects: variable, control flow   
- {{site.data.topix.stopic}}:  
    - They are the cornerstone of the documentation. 
    - This is a file under a specifc folder. The name of the folder is a {{site.data.topix.classifier}}.

- {{site.data.topix.classifier}}:  
    - Can be {{site.data.name.sdef}} or {{site.data.name.udef}}.
    - Defines the kind of informations contained in a {{site.data.topix.stopic}}.
    - {{site.data.topix.classifier}} {{site.data.name.sdef}}  are:
        - {{site.data.topix.whatis}} :   used to define and describe a {{site.data.topix.stopic}}.
        - {{site.data.topix.howto}} :    used to define step-by-step guide on how to manage or use a {{site.data.topix.stopic}}.
        - {{site.data.topix.list}} :     used to describe a {{site.data.topix.stopic}} that is often a container for other {{site.data.topix.stopic}}.
        - {{site.data.topix.tutorial}} : usually an aggregation of different {{site.data.topix.howto}}.


## Version Control
- The codebase for both the docs and the code is managed with {{site.data.name.git}}.
- The codebase for the docs reflects the documentation model for intuitive organization and access.

## {{site.data.name.framework}} and tool
- The choosen documentation {{site.data.name.framework}} is {{site.data.name.jekyll}}.
- The choosen documentation language ({{site.data.name.ie}} to write the documentation) is {{site.data.name.markdown}}. It allows the use of:
  - {{site.data.name.latex}}:   For mathematical and scientific expressions.
  - {{site.data.name.mermaid}}: For creating diagrams and flowcharts.

## Category of users

|name|description|comment|
|-|-|-|
|Technical|anyone that is not only functional ({{site.data.name.eg}} PO.)|should use {{site.data.name.vscode}} + {{site.data.name.git}} to interact with {{site.data.topix.topix}}|
|Functiunal|anyone that is not a Tech. user|should use a {{site.data.name.gui}} to interact with {{site.data.name.topix}}|

<br>

# {{ site.data.name.improvement }}
- A {{site.data.name.poc}} to easily move from {{site.data.name.jekyll}} to another framework like:
  - {{site.data.name.hugo}}
  - {{site.data.name.docusaurus}}
  - {{site.data.name.anthora}}
- A {{site.data.name.gui}} to author and manage the content.
  - for non technichal users
  - to administer the tool 

# {{ site.data.name.reference }}
## Example of static sites
  - https://www.hashicorp.com/
  - https://devconnected.com/
  - https://www.abtit.com
  - https://jekyllrb.com/
  - https://shopify.github.io/liquid/


## {{ site.data.name.front }} for github
- https://github.com/planetjekyll/awesome-jekyll-editors

# {{ site.data.name.todo }}
- prioritize items in section {{site.data.name.improvement}}

# Contributors
- Amar

