const vscode = require('vscode');
const conf = vscode.workspace.getConfiguration('oceanMarkdown')

/**
 * // @param {vscode.ExtensionContext} context
 */
function activate(/* context */) {
  return {
    extendMarkdownIt(md) {
      md = require('ocean-markdown-it')
      if (conf.previewParagraphNumbers) md.use(require('markdown-it-auto-parnum'), {headingSign: '¶'})
      return md
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
