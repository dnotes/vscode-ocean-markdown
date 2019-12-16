// const vscode = require('vscode');

/**
 * // @param {vscode.ExtensionContext} context
 */
function activate(/* context */) {
  return {
    extendMarkdownIt(/* md */) {
      return require('ocean-markdown-it');
    }
  };
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
