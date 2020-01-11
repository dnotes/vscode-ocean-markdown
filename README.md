# Ocean Markdown

Ocean-flavored Markdown ([OFM]) is a custom Markdown specification tailored for literature. This extension handles syntax highlighting and preview of OFM in VS Code.

## Features

- Proper code highlighting for [OFM]
- Proper rendering of [OFM] in preview
- Basic commands and keyboard shortcuts for writing [OFM]
- Tools for editors working with [OFM] collections

## Installation

Since this extension breaks VS Code's implementation of Commonmark and does not work with other Markdown extensions, we recommend that VS Code users keep it disabled globally and only enable it in workspaces dedicated to working with collections of Ocean-flavored Markdown documents. See [Known Issues] below.

## Known Issues

- This extension **completely** takes over VS Code's Markdown implementation. It will not work reliably with other extensions that provide Markdown functionality, nor will it be possible to configure VS Code to support normal Commonmark Markdown while this extension is enabled. **This is a flaw in our extension** which we have accepted for the sake of expedience. If the extension were written correctly, it would provide a separate language for Ocean-flavored Markdown and re-implement all the related tools, including the preview pane and language constructs.

- Markdown in RTL languages (Farsi, Arabic, Hebrew) is not supported in VS Code.

## Release Notes

See [CHANGELOG.md].



[CHANGELOG.md]: https://github.com/dnotes/vscode-ocean-markdown/blob/master/CHANGELOG.md
[OFM]: https://github.com/dnotes/ocean-markdown-it
