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

- Define a single point of reference for the documentation whatever the domain is.
- Define a common terminology that is shared by all topics of all domains.
- Unify the Writing and conception of the documentation to ensure a cohesive approach across technical guides, user manuals, project specifications, policies, terminologies, tutorials, procesceses, etc.
- Author documentation once in English and enable readers to access it in any language.
- leverage the full capabilities of a Git repository and codebase (security, release, collaboration, review, ...).
- Implement automation for generating cross-references between related documents within the hub, improving navigation and context for users.
- Establish clear learning paths for users to explore:
  - Processes
  - Topics within specific domains
  - Tutorials



# Documentation Structure

## Version Control
- The codebase is managed with `Git`.

## Documentation Framework
- Choose a documentation framework among: 
  - `Hugo`
  - `Jekyll`
  - `Docusaurus`

## Documentation Model
- Organize documentation using the following objects:
  - `Domain`:    the documentation is subdivided into domains and subdomains (eg. Math, IT, physics, psychology, history, etc).
  - `Subdomain`: A specific subdivision of a domain that covers related topics.
  - `Topic`:     Individual subjects within a subdomain.
  - `List`:      A collection of related items or topics, possibly categorized by relevance or purpose.
  - `Whatis`:    Definitions and explanations of terms or concepts.
  - `Howto`:     Step-by-step guides or instructions for completing specific tasks.

## Codebase Organization
- Ensure the codebase clearly reflects these objects for intuitive organization and access.

## Documentation Language
- Use `Markdown` to write the documentation, it allow to use:
  - `LaTeX`:   For mathematical and scientific expressions.
  - `Mermaid`: For creating diagrams and flowcharts.


