# Fementity

## Important Links

- [Azure board (use Dal VPN to access)](https://seaforth.research.cs.dal.ca/CSCI%20X691/Fem%20Entity
)
- [Figma](https://www.figma.com/files/team/1063134887845716774/Fem-Entity?fuid=1063135865631881301)
- [Git Workflow](#git-workflow)
- [React Directory Structuring](#react-directory-structuring)

---

## Git Workflow

### Git Branching

- Feature branches should only encompass a single feature and be short lived (1-2 days).
- Code must be reviewed and approved by two group members.
- Preface each branch with your respective group, example: `directory-new-button`.

### Git Rebasing

In order to keep our git history clean we will follow the [rebase](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) functionality to bring branches up to date with main.

- When squash merging your PR into `main` check to see if it has fallen behind `main` commits.
- If the new commits in `main` effects your new changes, rebase your branch oof of `main` before squashing and merging.

### Steps to Rebase

Check out `main` branch

```
git checkout main
```

Pull in the latest changes

```
git pull
```

Switch to your feature branch

```
git checkout <feature-branch>
```

Rebase your feature branch

```
git rebase main
```

Push your changes

```
git push -f origin <feature-branch>
```

### Merging into Main

- When merging your feature branch into the `main` branch please ensure to select (if not selected by default) `squash and merge`.

---

## React Directory Structuring

In order to keep our React apps understandable we will locate our 

```
.
├── README.md
├── member.js
├── package-lock.json
├── package.json
└── src
    ├── about <- components related to the about page
    │   └── About.js
    ├── app <- main react components
    │   ├── App.js
    │   ├── Main.js
    │   ├── Navigation.js
    │   ├── Page.js
    │   └── PageNotFound.js
    ├── common <- components that are shared across the app
    │   └── <some files ...>
    ├── theme <- custom theme & shared component properties
    │   └── fementity.js
    ├── utilities <- custom hooks and helper functions
    │   └── useDocumentTitle.js
    ├── member.js
    └── Server.js
```
