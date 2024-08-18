'use strict';

const vscode = require('vscode');

function activate(context) {
  console.log('in the activation');

  let disposable = vscode.commands.registerCommand(
    'extension.commentWithParens',
    function () {
      // const editor = vscode.window.activateTextEditor;
      // if (!editor) {
      //   return;
      vscode.window.showInformationMessage('Hello World!');
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
