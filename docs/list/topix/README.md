---
layout: default
title: Pubme
---


[//]: #(Reference)
[homepage]:   {{ "/index" | absolute_url }}

# [&larr;][homepage] Project > Topix
# Decscription

create a documentation hub

# Purpose

- Define a single point of reference for all type of documentation (eg. Math, IT, physics, ...).
- Unify the Writing: Standardize the creation of all documentation to ensure a cohesive approach across technical guides, user manuals, project specifications, and policies, etc.
- Author documentation once in English and enable readers to access it in any language.
- leverages the full capabilities of a Git repository and codebase (release, collaboration, review, ...).
- Implement automation for generating cross-references between related documents within the hub, improving navigation and context for users.
- Establish clear learning paths for users to explore:
  - Processes
  - Topics within specific domains
  - Tutorials


Here’s a refined version of your implementation plan:

---

## Implementation

- The codebase is managed with Git.
- Choose a documentation framework: `Hugo`, `Jekyll`, or `Docusaurus`.
- Model the documentation using the following objects:
  - **Domain**
  - **Subdomain**
  - **Topic**
  - **List**
  - **What Is** (whatis)
  - **How To** (howto)
- Ensure the codebase clearly reflects these objects for intuitive organization and access.

