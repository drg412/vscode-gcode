'use strict';

const vscode = require('vscode');

function activate(context) {
  // console.log('in the activation');

  let disposable = vscode.commands.registerCommand(
    'extension.commentLine',
    function () {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }
      // console.log('hello callback');

      const selections = editor.selections;

      editor.edit((editBuilder) => {
        selections.forEach((selection) => {
          // Get the start and end line numbers of the selection
          const startLine = selection.start.line;
          const endLine = selection.end.line;

          // Determine the leftmost index across the entire selection
          let leftmostIndex;
          for (let i = startLine; i <= endLine; i++) {
            const lineText = editor.document.lineAt(i).text;
            const firstNonWhitespaceIndex = lineText.match(/\S/)?.index;

            if (
              firstNonWhitespaceIndex !== undefined &&
              (leftmostIndex === undefined ||
                firstNonWhitespaceIndex < leftmostIndex)
            ) {
              leftmostIndex = firstNonWhitespaceIndex;
            }
          }

          if (leftmostIndex === undefined) {
            leftmostIndex = 0;
          }

          console.log(`Leftmost index: ${leftmostIndex}`);

          // Create a range that covers the entire selection
          const range = new vscode.Range(
            startLine,
            0,
            endLine,
            editor.document.lineAt(endLine).text.length
          );

          // Retrieve the text within the range
          const text = editor.document.getText(range);

          const lines = text.split(/\r\n|\r|\n/);

          // console.log(text);
          // console.log(lines);
          let isCommented = false;

          // TODO: Now we need to permit UNCOMMENTING if all lines are already comments

          // TODO: Rename command or have 2 commands?

          const newText = lines
            .map((line) => {
              const currentIndentation = line.slice(0, leftmostIndex);
              return `${currentIndentation}( ${line.slice(leftmostIndex)} )`;
            })
            .join('\n');

          editBuilder.replace(range, newText);
        });
      });
      // // const editor = vscode.window.activateTextEditor;
      // // if (!editor) {
      // //   return;
      // vscode.window.showInformationMessage('Hello World!');
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
