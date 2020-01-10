# Change Log

All notable changes to the Ocean Markdown extension will be documented in this file. Ocean Markdown follows semantic versioning.

## [Unreleased]

- API:
  - Plugin system for adding converters from various sites
  - Plugin system for adding conversion actions
  - System for defining metadata fields
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
- Editing:
- Settings:
- Syntax highlighting:
  - Commonmark (base)
  - Blockquotes
  - Attributes
