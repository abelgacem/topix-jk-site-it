---
mx:
  domain: tool
  description: A documentation hub.
  lp:
  ref:
---

# {{ site.data.name.purpose }}
Create a hub that:  

- Is a point of reference for the company's documentation.
- Establish a common terminology shared by all.
- Unify the writing and conception of document.
- Allows for writing and consuming any type of document, including:
  - Technical guides, User manuals
  - DAT, DCT, Specs, Release, RFC
  - Project specifications
  - Tutorials, Processes
  - Policies
  - And more
- Display a document in the user's language or any other language.
- leverage the full capabilities of a {{site.data.name.git}} repository and codebase (security, release, collaboration, review, ...).
- Implement cross-references between related documents, improving navigation and context.
- Establish flexible learning paths for users to explore at their own pace:
  - Processes
  - Topics within specific domains
  - Tutorials

# Documentation Structure

## Version Control
- The codebase is managed with `Git`.

## Documentation Framework
- Choose a documentation framework from:
  - `Hugo`
  - `Jekyll`
  - `Docusaurus`

## Documentation Model
- Organize documentation using the following objects:
  - `Domain`:  The documentation is subdivided into domains and subdomains (e.g., Math, IT, Physics, Psychology, History, etc.).
  - `Subdomain`:  A specific subdivision of a domain covering related topics.
  - `Topic`:  Individual subjects within a subdomain.
  - `List`:  A collection of related items or topics, categorized by relevance or purpose.
  - `Whatis`:  Definitions and explanations of terms or concepts.
  - `Howto`:  Step-by-step guides for completing specific tasks.

## Codebase Organization
- Ensure the codebase reflects these objects for intuitive organization and access.

## Documentation Language
- Use `Markdown`  to write the documentation, allowing the use of:
  - `LaTeX`:  For mathematical and scientific expressions.
  - `Mermaid`:  For creating diagrams and flowcharts.

# IDEA
- License of the framework used
- example of documentation site
  - https://www.hashicorp.com/
  - https://devconnected.com/
# Who will create content
- Interface devant git pour les user novice de git
- User tech = tous ce qui n'est pas fonctionel: PO
- Evangéliser les user
  - Editeur = vscode
  - git clone
  - git pull
  - git push

# Contributors
- Amar

# ref
- front pout github
- https://github.com/planetjekyll/awesome-jekyll-editors