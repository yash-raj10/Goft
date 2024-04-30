const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('"goft" is now active!');

  let disposable = vscode.commands.registerCommand("goft.okay", function () {
    const terminal = vscode.window.createTerminal("Goft");
    terminal.sendText("gofmt -w .");
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
