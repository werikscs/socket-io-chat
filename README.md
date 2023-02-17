# Install
## 1 - clone the repository
## 2 - install the dependencies
- ### `npm i`


# Libs
- ### [eslint](https://www.npmjs.com/package/eslint)
- ### [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
- ### [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
- ### [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- ### [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- ### [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- ### [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter)
- ### [husky](https://www.npmjs.com/package/husky)
- ### [lint-staged](https://www.npmjs.com/package/lint-staged)
- ### [prettier](https://www.npmjs.com/package/prettier)
- ### [typescript](https://www.typescriptlang.org/)
- ### [vitest](https://vitest.dev/guide/)

# How it works?
## `npm run test`
### It searches the entire repository for testable files and runs the tests. 
## `npm run lint:fix`
### It looks for eligible files to apply the patch. If not, it will notify you in the terminal.
## Commit
### During the commit, it will attempt to perform lint fixes and tests on the staging files. The commit will only be performed if these two steps are completed successfully.
### Thanks to lib git-commit-msg-linter, commits must follow the [**conventional commits**](https://www.conventionalcommits.org/en/v1.0.0/) pattern. Otherwise, it also raises an error. Check the [lib](https://www.npmjs.com/package/git-commit-msg-linter) page for more information.

# Eslint
### This project uses the [Airbnb style](https://github.com/airbnb/javascript) guide.
### For non-Airbnb styled codes to be tagged visually, you need to install the extension [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
### To apply corrections, you can type ctrl+shift+p and look for option **ESLint: fix all auto-fixable Problems**. If you click on the gear, you can set hotkeys.
