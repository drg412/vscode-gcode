'use strict';

const vscode = require('vscode');

function activate(context) {
  console.log('in the activation');

  let disposable = vscode.commands.registerCommand(
    'extension.commentWithParens',
    function () {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }
      console.log('hello callback');

      const selections = editor.selections;

      editor.edit((editBuilder) => {
        selections.forEach((selection) => {
          // Get the line numbers for the selection
          const startLine = selection.start.line;
          const endLine = selection.end.line;

          // Retieve the text for the start and end lines
          const startLineText = editor.document.lineAt(startLine).text;
          const endLineText = editor.document.lineAt(endLine).text;

          // Create a range that covers the entire line?
          const range = new vscode.Range(
            startLine,
            0,
            endLine,
            endLineText.length
          );

          // Retrieve the text within the range
          const text = editor.document.getText(range);

          const lines = text.split(/\r\n|\r|\n/);

          console.log(text);
          console.log(lines);
          let isCommented = false;

          const newText = lines.map((line) => `( ${line} )`).join('\n');
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
