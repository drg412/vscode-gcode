# G-code Syntax

## Description

This extension offers syntax highlighting and a small collection of code snippets for G-code-based CNC programs.

The extension is currently based on using a Mitsubishi 700 Series CNC control (lathe system), which is a "Fanuc-like" control.

## Features

### Syntax Highlighting
  
- Highlighting uses colors based on the current theme. Unfortunately, most themes (if any?) will not target many elements of a CNC program. I had to mostly apply scopes that were not semantically accurate to get the syntax highlighting that I wanted. There will be some themes where the highlighting does not look so good. This is because there is no consistency in the scopes that the various themes are targeting.

- An attempt was made to highlight the `X`, `Y`, & `Z` coordinate positions with unique colors. Position-based words for these axes are currently highlighted using the following scopes:

  - `X` & `U`: `string`
  - `Y` & `V`: `support.class`
  - `Z` & `W`: `storage.type`

### **Code Snippets**

Convenient snippets for common G-code commands and patterns:

- `G70` | `G71` | `G72` | `G73`

- `op-description`: inserts a sequence # followed by a comment
  - example: `N1000 (FACE OFF)`

- `star-padded-comment`: inserts a comment padded with stars
  - example: `(*** A COMMENT ***)`

- `dash-padded-comment`: inserts a comment padded with dashes
  - example: `(--- ANOTHER COMMENT ---)`

### Commands

- Toggle Line Comment `ctrl+/`: Toggles parentheses-based line comments for the current line or selected text.

### File Extensions

The above features will be applied to files with the following extensions:

``` json
[".nc", ".cnc", ".eia", ".gcode"]
```

Additional file extensions can be included by adding the following to your user or workspace `settings.json`:

```json
{
  "files.associations": {
    "*.ext1": "gcode",
    "*.ext2": "gcode",
    "*.ext3": "gcode"
  }
}
// This will associate files with extensions of ".ext1", ".ext2", and ".ext3"
```

## Requirements

No requirements at this time.

## Extension Settings

This extension includes default settings for G-code files. These defaults are automatically applied when the extension is installed.

### Default Settings

The following default settings are applied to G-code files:

```json
{
  "[gcode]": {
    "editor.suggestOnTriggerCharacters": true,
    "editor.acceptSuggestionOnEnter": "off",
    "editor.snippetSuggestions": "top",
    "editor.suggest.snippetsPreventQuickSuggestions": true
  }
}
```

## Known Issues

There are no known issues at this time.

## Release Notes

### 0.1.0

Initial release
