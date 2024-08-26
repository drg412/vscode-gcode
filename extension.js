'use strict';

const vscode = require('vscode');

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    'extension.commentLine',
    function () {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      const selections = editor.selections;
      editor.edit((editBuilder) => {
        selections.forEach((selection) => {
          const startLine = selection.start.line;
          const endLine = selection.end.line;

          let leftmostIndex;
          let allLinesCommented = true;
          const lines = [];

          for (let i = startLine; i <= endLine; i++) {
            const line = editor.document.lineAt(i).text;
            lines.push(line);
            const firstNonWhitespaceIndex = line.search(/\S/);

            if (
              firstNonWhitespaceIndex !== -1 &&
              (leftmostIndex === undefined ||
                firstNonWhitespaceIndex < leftmostIndex)
            ) {
              leftmostIndex = firstNonWhitespaceIndex;
            }

            const trimmedLine = line.trim();
            if (allLinesCommented) {
              if (!(trimmedLine.startsWith('(') && line.trim().endsWith(')'))) {
                allLinesCommented = false;
              }
            }
          }

          const newLines = lines.map((line) => {
            if (allLinesCommented) {
              // Uncomment the line
              return (
                line.slice(0, leftmostIndex) +
                line.slice(leftmostIndex + 1, line.length - 1)
              ).trim();
            } else {
              // Comment the line
              return (
                line.slice(0, leftmostIndex) +
                '( ' +
                line.slice(leftmostIndex) +
                ' )'
              );
            }
          });
          // if (leftmostIndex === undefined) {
          //   leftmostIndex = 0;
          // }

          for (let i = startLine; i <= endLine; i++) {
            const range = new vscode.Range(
              i,
              0,
              i,
              editor.document.lineAt(i).text.length
            );
            editBuilder.replace(range, newLines[i - startLine]);
          }

          // Create a range that covers the entire selection
          // const range = new vscode.Range(
          //   startLine,
          //   0,
          //   endLine,
          //   editor.document.lineAt(endLine).text.length
          // );

          // Retrieve the text within the range and split into lines
          // const text = editor.document.getText(range);
          // const lines = text.split(/\r\n|\r|\n/);

          // newText = lines
          //   .map((line) => {
          //     if (line.trim() === '') {
          //       return '';
          //     } else {
          //       const currentIndentation = line.slice(0, leftmostIndex);
          //       return `${currentIndentation}( ${line.slice(leftmostIndex)} )`;
          //     }
          //   })
          //   .join('\n');

          // editBuilder.replace(range, newText);
        });
      });
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
