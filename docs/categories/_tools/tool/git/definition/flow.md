---
draft : true
mx:  
  - cf. tag
---

# The process
## branch : feature
create a branch:`feature` from branch:`develop` for each feature.
   ```powershell
   git checkout develop
   git pull origin develop
   git checkout -b feature/featureName
   git push -u origin feature/featureName
   ```
**implement** the feature.

**test** the feature.

**merge** branch:feature into bracnh:develop.
   ```powershell
   git checkout develop
   git pull origin develop
   git merge feature/featureName
   git push origin develop
   ```
**delete** branch:feature `at the end`.

## branch : bugfix
create a branch:`feature` from branch:`develop` for each feature.
   ```powershell
   git checkout develop
   git pull origin develop
   git checkout -b bugfix/bugfixName
   git push -u origin bugfix/bugfixName
   ```
**implement** the feature.

**test** the feature.

**merge** branch:feature into bracnh:develop.
   ```powershell
   git checkout develop
   git pull origin develop
   git merge bugfix/bugfixName
   git push origin bugfix
   ```
**delete** branch:bugfix `at the end`.

# branch : hotfix (corretc bug on a prod/stable version)
create a branch:`hotfix` from branch:`main|master` for each feature.
   ```powershell
   git checkout main
   git pull origin main
   git checkout -b hotfix/hotfixName
   git push -u origin hotfix/hotfixName
   ```
**implement** the feature.

**test** the feature.

**delete** branch:hotfix `at the end`.

# Terminology
- A feature add a new functionality to the project
- A bugfix correct a bug on a feature
- A hotfix correct a bug on a `version:stable`
# An example of a gitflow
- branches that exits always are:
  - branch:**master**.
  - branch:**develop**.
- branches that are temporary are:
  - branch:**feture/xxxx**.
  - branch:**hotfix/xxxx**.
  - branch:**bugfix/xxxx**.
- branch:**master**  contains the `version:stable:latest` and the official history of it.
- branch:**develop** contains the version:unstable:latest.
- branch@temporary (except hotfix) must merge into develop. So:
  - create branches:release from **develop**
  - merge  branches:release into **develop** and **master**
  - Version tags must merge into branch:**master**.

# Version Release Process


## 1. Code Freeze
- **What**: Halt all new feature development and only allow critical bug fixes.
- **Why**: To maintain stability and prevent last-minute changes that could introduce bugs before the release.
- **How**: Communicate the freeze date to the team, and use branch protection rules in your version control system to enforce the freeze.

## 2. Define the Version
- **What**: Assign a version number (e.g., 1.0.0) and document changes.
- **Why**: To clearly communicate updates and enhancements to users and stakeholders.
- **How**: Use Semantic Versioning to categorize releases and maintain a changelog that details new features, bug fixes, and any breaking changes.

## 3. Testing
- **Local Testing**
  - **What**: Run tests on a developer's local environment.
  - **Why**: To catch early bugs before the code is shared with others.
  - **How**: Execute unit tests and other local tests using your preferred testing framework.
  
- **Development (Dev) Testing**
  - **What**: Deploy to a development environment and run automated tests.
  - **Why**: To ensure the integration of new changes works with the existing codebase.
  - **How**: Use continuous integration (CI) tools to automatically run tests on every push to the dev branch.
  
- **Staging Testing**
  - **What**: Deploy to a staging environment for final testing.
  - **Why**: To mimic production conditions and catch any remaining issues before release.
  - **How**: Manually deploy the build to staging and conduct thorough testing, including UAT.

## 4. Validation
- **What**: Confirm that the software meets requirements and works as expected.
- **Why**: To ensure quality and stakeholder satisfaction before moving to production.
- **How**: Review test results with the team, conduct code reviews, and gather feedback from stakeholders for approval.

## 5. Stage
- **What**: Prepare the code for the build process.
- **Why**: To ensure that the codebase is in a clean state for building the release.
- **How**: Merge any necessary branches, ensure all features are completed, and resolve any outstanding issues.

## 6. Build
- **What**: Compile the code and create build artifacts.
- **Why**: To generate the final version of the software that can be deployed.
- **How**: Use build automation tools (e.g., Jenkins, GitLab CI) to compile code and produce artifacts like binaries or Docker images.

## 7. Publishing
- **What**: Upload build artifacts to a repository or distribution platform.
- **Why**: To make the new version available to users and systems.
- **How**: Use package managers or artifact repositories (e.g., GitHub Releases, Docker Hub) to store the artifacts.

## 8. Distribution
- **What**: Share the new version with users.
- **Why**: To inform users about the new release and encourage adoption.
- **How**: Update websites, send newsletters, or use social media to announce the release.

## 9. Deploy
- **What**: Roll out the new version to the production environment.
- **Why**: To make the new features and fixes available to end-users.
- **How**: Use deployment tools (e.g., Kubernetes, Ansible) to deploy the artifacts, and monitor the deployment process for any issues.

# Version Release Process

| Step                      | What                                                         | Why                                                       | How                                                                                   |
|---------------------------|--------------------------------------------------------------|-----------------------------------------------------------|---------------------------------------------------------------------------------------|
| **1. Code Freeze**        | Halt all new feature development; allow only bug fixes.     | Maintain stability and prevent last-minute changes.       | Communicate the freeze date; use branch protection rules in version control.         |
| **2. Define the Version** | Assign a version number and document changes.               | Communicate updates and enhancements to users.            | Use Semantic Versioning and maintain a changelog.                                    |
| **3. Testing**            |                                                              |                                                           |                                                                                       |
| - Local Testing           | Run tests on a developer's local environment.               | Catch early bugs before sharing code.                     | Execute unit tests using your preferred testing framework.                           |
| - Development Testing     | Deploy to a development environment and run automated tests. | Ensure integration of changes works with the existing code. | Use CI tools to run tests on every push to the dev branch.                           |
| - Staging Testing         | Deploy to a staging environment for final testing.          | Mimic production conditions to catch remaining issues.    | Manually deploy the build to staging and conduct thorough testing, including UAT.    |
| **4. Validation**         | Confirm that software meets requirements.                    | Ensure quality and stakeholder satisfaction.               | Review test results, conduct code reviews, and gather feedback for approval.         |
| **5. Stage**              | Prepare the code for the build process.                     | Ensure codebase is in a clean state for building.         | Merge necessary branches and resolve outstanding issues.                              |
| **6. Build**              | Compile the code and create build artifacts.                | Generate the final version of the software.               | Use build automation tools to compile code and produce artifacts.                    |
| **7. Publishing**         | Upload build artifacts to a repository or distribution.     | Make the new version available to users.                  | Use package managers or artifact repositories to store the artifacts.                |
| **8. Distribution**       | Share the new version with users.                           | Inform users about the new release and encourage adoption. | Update websites, send newsletters, or use social media to announce the release.      |
| **9. Deploy**             | Roll out the new version to production.                     | Make new features and fixes available to end-users.       | Use deployment tools to deploy artifacts and monitor the process for issues.         |

# Version Release Process

- freeze the code. no more changes on codebase
  - purpose: minimize the risk of introducing new bugs or instability.
- define version number (major, minor, patch)
- test the code:
  - unit testing.
  - integration testing.
  - user acceptance testing.
- Tag the version with the defined version
- Document the changes
  - create Release notes
  - create changelogs (ie. The log of changes made to the release since the last release or since the begining)
    - feature  added/removed
    - bugs     solved
    - hotfixes integrated
- Build
  - package the software
- Deploy
  - to a production environment (making it available for users)
- Distribute:
  - update  download links
  - publish the package to repositories
    - app stores, 
    - software repositories
    - package repository like npm, PyPI, gitlab, docker, or Maven Central.  
  - from the project’s website.
  - For libraries or APIs, the new version is often published to a 
# To know
- several version:stable can coexists on prod


- This may involve packaging the software, updating download links, or rolling out updates to users.  
