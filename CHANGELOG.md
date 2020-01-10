# Change Log

All notable changes to the Ocean Markdown extension will be documented in this file. Ocean Markdown follows semantic versioning.

## Ocean tools
[OT]: #ocean-tools

Beyond syntax highlighting and preview for Ocean-flavored Markdown, there are some tools and commands useful for people editing whole collections of Markdown files, e.g. for a website or literary collection. These tools can be enabled with the following setting:

```
"oceanMarkdown.useOceanTools": true
```

## [Unreleased]

- API:
  - Plugin system for adding converters from various sites
  - Plugin system for adding conversion actions
- Commands:
  - [OT] Convert to OFM from URL
  - [OT] Check Metadata (automatic on open) 
  - [OT] Edit metadata (automatic on create and convert)
  - [OT] Blank OFM file
- Editing:
  - Bold
  - Italic
  - Bullet list continuation
  - Numbered list continuation
  - [OT] "Replace All" action (saves conversion action)
  - [OT] Manual text change (saves conversion action -- STOP)
  - [OT] Footnotes: convert per paragraph (saves conversion action)
  - [OT] Footnotes: convert per page (saves conversion action)
  - [OT] Remove page breaks (saves conversion action)
- Settings:
  - Prefer Commonmark blockquotes
  - [OT] Metadata fields
- Syntax highlighting:
  - Code blocks:
    - Should be a different color
  - Blockquotes:
    - Should not be gray
    - Are not correctly identified after lists
  - Attributes:
    - Should be less prominent
- Compress with rollup
- Full release

## 0.x

- Preview for OFM
- Commands:
  - Toggle OFM
  - Toggle paragraph numbers in preview
  - Toggle page numbers in preview
  - Toggle Ocean Tools ([OT])
- Editing:
- Settings:
  - Use Ocean-flavored Markdown
  - Use Ocean Tools [OT]
  - Show page numbers in preview
  - Number paragraphs in preview
- Syntax highlighting:
  - Commonmark (base)
  - Blockquotes
  - Attributes
