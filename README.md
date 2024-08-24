# _[Unnammed Extension]_ GCode Syntax Highlighting and Snippets for VS Code

## Description

This extension offers syntax highlighting and a collection of useful code snippets for G-code-based CNC programs, designed to make G-code files easier to read and write, and to improve your productivity and accuracy.

The extension is initially being developed for lathe programs using a Mitsubishi CNC control, which is a Fanuc-like control.

## Features

- **Syntax Highlighting**: Automatic syntax highlighting for G-code files, making your code more readable and easier to debug.
  
  - The highlighting uses colors based on the current theme. Unfortunately, most themes (if any?) will not target certain elements of a CNC program. Position-based words are currently highlighted using the following scopes, which are not semantically accurate, but seemed to apply a different colorization to each of the `X`, `Y`, and `Z` positions.

    - `X` & `U`: `string`
    - `Y` & `V`: `support.class`
    - `Z` & `W`: `variable.other.constant`

- **Code Snippets**: Convenient snippets for common GC-code commands and patterns, helping you write code faster and with fewer errors.

  - `G70` | `G71` | `G72` | `G73`

  - `op-description`: inserts a sequence # followed by a comment
    - example: `N1000 (FACE OFF)`
  
  - `star-padded-comment`: inserts a comment padded with stars
    - example: `(*** A COMMENT ***)`
  
  - `dash-pasdded-comment`: inserts a comment padded with dashes
    - example: `(--- ANOTHER COMMENT ---)`

- **Commands**

  - Toggle line comment `ctrl+/`: Toggles parentheses-based line comments for the current line or selected text.

These features will be applied to files with the following extensions:

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

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

No requirements at this time.

## Extension Settings

This extension includes default settings for G-code files. These defaults are automatically applied when the extension is installed.

### Default Settings

The following default settings are applied to GCode files:

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

You can override these defaults by editing your settings.json file in VS Code.

## Known Issues

There are no known issues at this time.

## Release Notes

...

### x.x.x
