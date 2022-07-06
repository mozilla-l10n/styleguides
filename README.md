# Style Guides

This repository is used to store style guides for Mozilla communities. All localization style guides and related documents are listed in [docs/SUMMARY.md](docs/SUMMARY.md).

If you’re reading these pages on GitHub, a version with improved readability and search capabilities is available [here](https://mozilla-l10n.github.io/styleguides).

## Updating the documentation

Simply open a pull request adding the new file or updating an existing document. Make sure to follow [these style guidelines](https://github.com/mozilla-l10n/documentation/blob/main/src/misc/documentation_styleguide.md), and note that all pull requests need to be reviewed before merging. The instructions for creating new community style guides are part of the [guidelines for community style guides](src/guidelines/). Please also run the following commands to ensure the files are correctly formatted.

```
$ npm install
$ npm test
```

## GitHub Pages

A version with improved readibility and search is built automatically via GitHub Actions and [mdBook](https://github.com/rust-lang/mdBook/). Updates are pushed to the `gh-pages` branch and available via GitHub Pages [here](https://mozilla-l10n.github.io/styleguides).

If you want to build and preview these pages locally,  [install Rust and cargo](https://www.rust-lang.org/learn/get-started) and then run the following commands from the root of the repository:

```
$ cargo install mdbook
$ cargo install mdbook-toc
$ mdbook serve
```

[mdbook-toc](https://github.com/badboy/mdbook-toc/) is used as a preprocessor, and will install the correct version of mdBook as a dependency.

If you want content to appear on mdBook, it needs to be listed in [docs/SUMMARY.md](docs/SUMMARY.md).
