# _[Unnammed Extension]_ G-code Syntax Highlighting and Snippets for VS Code

## Description

This extension offers syntax highlighting and a collection of useful code snippets for G-code-based CNC programs, designed to make G-code files easier to read and write, and to improve your productivity and accuracy.

The extension is initially being developed for creating programs lathe programs based on a Mitsubishi 700 Series CNC control, which is a "Fanuc-like" control.

## Features

- **Syntax Highlighting**: Automatic syntax highlighting for G-code files, making your code more readable and easier to debug.
  
  - The highlighting uses colors based on the current theme. Unfortunately, most themes (if any?) will not target many elements of a CNC program. I had to mostly apply scopes that were not semantically accurate to get the syntax highlighting that I wanted. There will be some themes where the highlighting does not look so good. This is because there is no consistency in the scopes that the various themes are targeting.
  
  - I wanted the `X`, `Y`, & `Z` coordinate positions to be highlighted with unique colors. Position-based words are currently highlighted using the following scopes to achieve this:

    - `X` & `U`: `string`
    - `Y` & `V`: `support.class`
    - `Z` & `W`: `storage.type`

- **Code Snippets**: Convenient snippets for common G-code commands and patterns, helping you write code faster and with fewer errors.

  - `G70` | `G71` | `G72` | `G73`

  - `op-description`: inserts a sequence # followed by a comment
    - example: `N1000 (FACE OFF)`
  
  - `star-padded-comment`: inserts a comment padded with stars
    - example: `(*** A COMMENT ***)`
  
  - `dash-padded-comment`: inserts a comment padded with dashes
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
