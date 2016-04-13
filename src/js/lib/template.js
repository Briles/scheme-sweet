module.exports = function (palette) {
  'use strict';

  return {
    colorSpaceName: 'sRGB',
    settings: [{
        settings: {
          background: palette.background,
          caret: palette.fg4,
          foreground: palette.foreground,
          invisibles: palette.foreground,
          lineHighlight: palette.bg1,
          selection: palette.bg1,
          inactiveSelection: palette.bg1,
          guide: palette.foreground,
          activeGuide: palette.foreground,
          stackGuide: palette.foreground,
          bracketContentsOptions: 'underline',
          bracketContentsForeground: palette.fg4,
          bracketsOptions: 'underline',
          bracketsForeground: palette.fg4,
          gutterForeground: palette.gray,
          highlight: palette.foreground,
          highlightForeground: palette.foreground,
          findHighlight: palette.neutralYellow || palette.yellow || palette.yellow,
          findHighlightForeground: palette.background,
          tagsOptions: 'underline',
          selectionBorder: palette.bg1,
        },
      },

      {
        name: 'Text and Source Base Colors',
        scope: [
          'meta.method.body.source.cs', // Fix poor syntax highlighting
          'none',
          'source',
          'text',
        ],
        settings: {
          foreground: palette.foreground,
        },
      },

      {
        name: 'Punctuation',
        scope: [
          'meta.brace',
          'meta.delimiter',
          'meta.group.braces',
          'meta.punctuation.separator',
          'meta.separator',
          'punctuation',
        ],
        settings: {
          foreground: palette.foreground,
        },
      },

      {
        name: 'Comments',
        scope: [
          'comment text',
          'comment',
          'markup.strikethrough',
          'punctuation.definition.comment',
          'punctuation.whitespace.comment',
          'text.cancelled',
        ],
        settings: {
          fontStyle: 'italic',
          foreground: palette.gray,
        },
      },

      {
        name: 'Keywords Inside Comments',
        scope: [
          'comment.keyword',
          'comment.keyword.punctuation',
        ],
        settings: {
          foreground: palette.fg2,
        },
      },

      {
        name: 'DocBlockr & Other Keywords Inside Comments',
        scope: [
          'comment.parameter',
          'comment.punctuation',
          'comment.string',
          'comment.type',
          'storage.type.class.jsdoc',
        ],
        settings: {
          foreground: palette.fg3,
        },
      },

      {
        name: 'Entity',
        scope: [
          'entity.name.type',
          'entity.other.inherited-class',
          'constant.language.name',
        ],
        settings: {
          foreground: palette.yellow,
        },
      },

      {
        name: 'Template String Punctuation',
        scope: [
          'punctuation.quasi',
          'punctuation.section.embedded',
          'variable.other.interpolation.scss',
          'string.interpolated',
          'entity.name.tag.mustache',
        ],
        settings: {
          foreground: palette.cyan,
        },
      },

      {
        name: 'Keywords',
        scope: [
          'keyword',
          'keyword.control',
          'meta.prolog.haml',
          'meta.tag.sgml.doctype.html',
          'storage.type.import.haxe',
          'variable.documentroot',
          'meta.at-rule.media support.function.misc',
          'source.cs keyword.operator',
          'keyword.operator.logical.python',
          'storage.type.function.jade',
          'js.embedded.control.flow keyword.operator.js',
          'storage.type.import.include.jade',
        ],
        settings: {
          foreground: palette.red,
        },
      },

      {
        name: 'CSS At-Rule Punctuation (@)',
        scope: [
          'punctuation.definition.keyword',
        ],
        settings: {
          foreground: palette.neutralRed || palette.red,
        },
      },

      {
        name: 'Operators',
        scope: [
          'keyword.control.new',
          'keyword.operator',
          'keyword.other.arrow',
          'keyword.other.double-colon',
        ],
        settings: {
          foreground: palette.cyan,
        },
      },

      {
        name: 'Constants Punctuation',
        scope: [
          'constant.other.color punctuation.definition.constant',
          'constant.other.color.rgb-value.scss',
          'constant.other.unit',
          'keyword.other.unit',
        ],
        settings: {
          foreground: palette.neutralPurple || palette.purple,
        },
      },

      {
        name: 'Storage',
        scope: [
          'storage',
          'storage.type.annotation',
          'storage.type.primitive',
        ],
        settings: {
          foreground: palette.red,
        },
      },

      {
        scope: [
          'storage.modifier.package',
          'storage.modifier.import',
          'storage.type.import',
        ],
        settings: {
          foreground: palette.foreground,
        },
      },

      {
        name: 'Function Keyword',
        scope: [
          'storage.type.function',
        ],
        settings: {
          foreground: palette.cyan,
        },
      },

      {
        name: 'Variables',
        scope: [
          'entity.name.variable',
          'meta.definition.variable',
          'variable',
          'variable.interpolation variable',
          'variable.other.interpolation variable',
          'variable.parameter.sass',
        ],
        settings: {
          foreground: palette.blue,
        },
      },

      {
        name: 'Variable - Punctuation',
        scope: [
          'punctuation.definition.variable',
          'variable.interpolation',
          'variable.other.dollar punctuation.dollar',
        ],
        settings: {
          foreground: palette.neutralBlue || palette.blue,
        },
      },

      {
        name: 'Object Properties',
        scope: [
          'meta.property.object',
        ],
        settings: {
          foreground: palette.foreground,
        },
      },

      {
        name: 'Parameters',
        scope: [
          'variable.parameter',
          'meta.parameters',
        ],
        settings: {
          foreground: palette.foreground,
        },
      },

      {
        name: 'SASS Import URL',
        scope: [
          'variable.parameter.url',
        ],
        settings: {
          foreground: palette.green,
        },
      },

      {
        name: 'Language Constants',
        scope: [
          'constant',
          'constant.numeric',
          'constant.other.symbol',
          'constant.other',
          'constant.other.color',
          'support.constant.color',
          'punctuation.definition.constant.scss',
          'variable.language',
        ],
        settings: {
          foreground: palette.purple,
        },
      },

      {
        name: 'User-Defined Constants',
        scope: [
          'variable.other.constant',
        ],
        settings: {
          foreground: palette.yellow,
        },
      },

      {
        name: 'Escaped Characters',
        scope: [
          'constant.character.escape',
          'constant.character.escaped',
          'constant.other.character-class.escape',
          'constant.character.quoted',
        ],
        settings: {
          foreground: palette.red,
        },
      },

      {
        name: 'Invalids and Illegals',
        scope: [
          'invalid',
        ],
        settings: {
          foreground: palette.foreground,
          background: palette.red,
        },
      },

      {
        name: 'Strings',
        scope: [
          'string',
        ],
        settings: {
          foreground: palette.green,
        },
      },

      {
        name: 'Regular Expressions',
        scope: [
          'string.regexp',
        ],
        settings: {
          foreground: palette.red,
        },
      },

      {
        name: 'Embedded Ruby Regular Expressions',
        scope: [
          'string.regexp.source.ruby.embedded',
        ],
        settings: {
          foreground: palette.yellow,
        },
      },

      {
        name: 'Hyperlinks',
        scope: [
          'string.other.link',
          'constant.other.reference.link',
        ],
        settings: {
          foreground: palette.cyan,
        },
      },

      {
        name: 'Markup Tag Punctuation',
        scope: [
          'punctuation.definition.tag',
        ],
        settings: {
          foreground: palette.blue,
        },
      },

      {
        name: 'Markdown Heading',
        scope: [
          'markup.heading',
        ],
        settings: {
          foreground: palette.green,
        },
      },

      {
        name: 'Markdown Heading Punctuation',
        scope: [
          'punctuation.definition.heading',
          'punctuation.definition.identity',
        ],
        settings: {
          foreground: palette.neutralGreen || palette.green,
        },
      },

      {
        name: 'Markdown Bold Text',
        scope: [
          'markup.bold',
        ],
        settings: {
          foreground: palette.orange,
          fontStyle: 'bold',
        },
      },

      {
        name: 'Markdown Bold Text Punctuation',
        scope: [
          'punctuation.definition.bold',
        ],
        settings: {
          foreground: palette.neutralOrange || palette.orange,
          fontStyle: 'bold',
        },
      },

      {
        name: 'Markdown Italic Text',
        scope: [
          'markup.italic',
        ],
        settings: {
          foreground: palette.red,
          fontStyle: 'italic',
        },
      },

      {
        name: 'Markdown Italic Text Punctuation',
        scope: [
          'punctuation.definition.italic',
        ],
        settings: {
          foreground: palette.neutralRed || palette.red,
          fontStyle: 'italic',
        },
      },

      {
        name: 'Markdown Inline Code',
        scope: [
          'markup.raw.inline',
        ],
        settings: {
          foreground: palette.yellow,
        },
      },

      {
        name: 'Markdown Quoted',
        scope: [
          'markup.quote',
        ],
        settings: {
          foreground: palette.purple,
        },
      },

      {
        name: 'Markdown List',
        scope: [
          'markup.list',
          'punctuation.definition.list_item.number',
          'punctuation.definition.list_item.markdown',
        ],
        settings: {
          foreground: palette.blue,
        },
      },

      {
        name: 'Support',
        scope: [
          'support.class',
          'support.type',
          'variable.other.class',
        ],
        settings: {
          foreground: palette.yellow,
        },
      },

      {
        scope: [
          'keyword.other.special-method',
          'meta.function-call variable.function',
          'support.function',
        ],
        settings: {
          foreground: palette.cyan,
        },
      },

      {
        name: 'Methods',
        scope: [
          'meta.function-call.method variable.function',
          'meta.function-call.static variable.function',
          'support.function.mutator',
          'meta.method-call',
          'meta.method',
        ],
        settings: {
          foreground: palette.neutralCyan || palette.cyan,
        },
      },

      {
        name: 'Special Variables',
        scope: [
          'support.module',
        ],
        settings: {
          foreground: palette.purple,
        },
      },

      {
        name: 'Entities',
        scope: [
          'entity.name.function',
          'entity.name.section',
        ],
        settings: {
          foreground: palette.green,
        },
      },

      {
        name: 'HTML & CSS ID',
        scope: [
          'entity.other.attribute-name.id',
          'constant.id.tag',
          'entity.name.tag.id',
        ],
        settings: {
          foreground: palette.orange,
        },
      },

      {
        name: 'HTML & CSS ID Punctuation (#)',
        scope: [
          'entity.other.attribute-name.id punctuation.definition.entity',
        ],
        settings: {
          foreground: palette.neutralOrange || palette.orange,
        },
      },

      {
        name: 'HTML & CSS Class',
        scope: [
          'entity.name.tag.class',
          'entity.other.attribute-name.class',
        ],
        settings: {
          foreground: palette.yellow,
        },
      },

      {
        name: 'HTML & CSS Class Punctuation (.)',
        scope: [
          'entity.other.attribute-name.class punctuation.definition.entity',
        ],
        settings: {
          foreground: palette.neutralYellow || palette.yellow,
        },
      },

      {
        name: 'HTML Entity Punctuation',
        scope: [
          'constant.character.entity punctuation.definition.entity',
        ],
        settings: {
          foreground: palette.neutralPurple || palette.purple,
        },
      },

      {
        scope: [
          'entity.name.class',
          'entity.name.type.class',
        ],
        settings: {
          foreground: palette.yellow,
        },
      },

      {
        name: 'Markup Tag',
        scope: [
          'entity.name.tag',
          'entity.tag',
          'source.less keyword.control.html.elements',
          'keyword.control.untitled',
          'keyword.doctype.xml',
          'punctuation.definition.prolog.haml',
        ],
        settings: {
          foreground: palette.blue,
        },
      },

      {
        name: 'HTML Attribute Names',
        scope: [
          'entity.name.attribute-name',
          'entity.other.attribute-name',
          'meta.section.attributes.haml constant.other.symbol.ruby',
        ],
        settings: {
          foreground: palette.yellow,
        },
      },

      {
        name: 'CSS Pseudo Elements/Classes & Vendor Prefixes',
        scope: [
          'entity.other.attribute-name.placeholder punctuation.definition.entity',
          'entity.other.attribute-name.pseudo-class',
          'entity.other.attribute-name.pseudo-element',
          'entity.other.attribute-name.tag.pseudo-class',
          'entity.other.attribute-name.tag.pseudo-element',
          'support.type.vendor-prefix',
        ],
        settings: {
          foreground: palette.neutralYellow || palette.yellow,
        },
      },

      {
        name: 'Meta',
        scope: [
          'meta.class',
        ],
        settings: {
          foreground: palette.yellow,
        },
      },

      {
        scope: [
          'meta.class.body',
          'meta.tag',
        ],
        settings: {
          foreground: palette.foreground,
        },
      },

      {
        name: 'Markdown Image & Hyperlink',
        scope: [
          'meta.link',
          'meta.image',
        ],
        settings: {
          foreground: palette.purple,
        },
      },

      {
        scope: [
          'meta.require',
        ],
        settings: {
          foreground: palette.green,
        },
      },

      {
        name: 'Function with Parameters Punctuation',
        scope: [
          'meta.brace.round',
          'punctuation.definition.parameters',
          'constant.name.attribute.tag.jade',
        ],
        settings: {
          foreground: palette.fg3,
        },
      },

      {
        name: 'CSS Property Names',
        scope: [
          'meta.property-name',
          'support.type.property-name',
        ],
        settings: {
          foreground: palette.green,
        },
      },

      {
        name: 'CSS Property Name Vendor Prefixes',
        scope: [
          'meta.property-name support.type.vendor-prefix',
        ],
        settings: {
          foreground: palette.neutralGreen || palette.green,
        },
      },

      {
        name: 'CSS Property Values',
        scope: [
          'constant.string.sass',
          'meta.property-value',
          'support.constant.property-value',
        ],
        settings: {
          foreground: palette.foreground,
        },
      },

      {
        name: 'CSS Property Value Vendor Prefixes',
        scope: [
          'meta.property-value support.type.vendor-prefix',
        ],
        settings: {
          foreground: palette.fg3,
        },
      },

      {
        name: 'Diff Foreground Text',
        scope: [
          'source.diff',
        ],
        settings: {
          foreground: palette.fg4,
        },
      },

      {
        name: 'Diff Header Text From',
        scope: [
          'meta.diff.header.from-file',
        ],
        settings: {
          foreground: palette.blue,
        },
      },

      {
        name: 'Diff Header Text From Punctuation',
        scope: [
          'punctuation.definition.from-file',
        ],
        settings: {
          foreground: palette.neutralBlue || palette.blue,
        },
      },

      {
        name: 'Diff Header Text To',
        scope: [
          'meta.diff.header.to-file',
        ],
        settings: {
          foreground: palette.purple,
        },
      },

      {
        name: 'Diff Header Text To Punctuation',
        scope: [
          'punctuation.definition.to-file',
        ],
        settings: {
          foreground: palette.neutralPurple || palette.purple,
        },
      },

      {
        name: 'Diff Additions & Deletions Stats',
        scope: [
          'meta.diff.range',
          'meta.toc-list.line-number',
        ],
        settings: {
          foreground: palette.yellow,
        },
      },

      {
        name: 'Diff Additions & Deletions Stats Punctuation',
        scope: [
          'punctuation.definition.range.diff',
        ],
        settings: {
          foreground: palette.neutralYellow || palette.yellow,
        },
      },

      // GitGutter
      {
        name: 'GitGutter & Diff Deleted',
        scope: [
          'markup.deleted',
          'punctuation.definition.deleted',
        ],
        settings: {
          foreground: palette.red,
        },
      },

      {
        name: 'GitGutter & Diff Inserted',
        scope: [
          'markup.inserted',
          'punctuation.definition.inserted',
        ],
        settings: {
          foreground: palette.green,
        },
      },

      {
        name: 'GitGutter & Diff Changed',
        scope: [
          'markup.changed',
          'punctuation.definition.changed',
        ],
        settings: {
          foreground: palette.yellow,
        },
      },

      {
        name: 'GitGutter ignored',
        scope: [
          'markup.ignored',
        ],
        settings: {
          foreground: palette.gray,
        },
      },

      {
        name: 'GitGutter untracked',
        scope: [
          'markup.untracked',
        ],
        settings: {
          foreground: palette.gray,
        },
      },

      // Bracket Highlighter
      {
        name: 'Bracket Tag',
        scope: [
          'brackethighlighter.tag',
        ],
        settings: {
          foreground: palette.gray,
        },
      },

      {
        name: 'Bracket Curly',
        scope: [
          'brackethighlighter.curly',
        ],
        settings: {
          foreground: palette.gray,
        },
      },

      {
        name: 'Bracket Round',
        scope: [
          'brackethighlighter.round',
        ],
        settings: {
          foreground: palette.gray,
        },
      },

      {
        name: 'Bracket Square',
        scope: [
          'brackethighlighter.square',
        ],
        settings: {
          foreground: palette.gray,
        },
      },

      {
        name: 'Bracket Angle',
        scope: [
          'brackethighlighter.angle',
        ],
        settings: {
          foreground: palette.gray,
        },
      },

      {
        name: 'Bracket Quote',
        scope: [
          'brackethighlighter.quote',
        ],
        settings: {
          foreground: palette.gray,
        },
      },

      {
        name: 'Bracket Unmatched',
        scope: [
          'brackethighlighter.unmatched',
        ],
        settings: {
          foreground: palette.red,
        },
      },

      // SublimeLinter
      {
        name: 'SublimeLinter Error',
        scope: [
          'sublimelinter.mark.error',
        ],
        settings: {
          foreground: palette.red,
        },
      },

      {
        name: 'SublimeLinter Gutter Mark',
        scope: [
          'sublimelinter.gutter-mark',
        ],
        settings: {
          foreground: palette.gray,
        },
      },

      {
        name: 'SublimeLinter Warning',
        scope: [
          'sublimelinter.mark.warning',
        ],
        settings: {
          foreground: palette.yellow,
        },
      },

      // HexViewer
      {
        name: 'HexViewer Upper Byte Nibble',
        scope: [
          'raw.nibble.upper',
        ],
        settings: {
          foreground: palette.foreground,
        },
      },

      {
        name: 'HexViewer Lower Byte Nibble',
        scope: [
          'raw.nibble.lower',
        ],
        settings: {
          foreground: palette.foreground,
        },
      },

      {
        name: 'HexViewer Highlight',
        scope: [
          'hexviewer.highlight',
        ],
        settings: {
          foreground: palette.background,
          background: palette.yellow,
        },
      },

      {
        name: 'HexViewer Edited Highlight',
        scope: [
          'hexviewer.highlight.edited',
        ],
        settings: {
          foreground: palette.background,
          background: palette.orange,
        },
      },

      // Raw Glyphs
      {
        name: 'Raw New Line: Carriage Return',
        scope: [
          'glyph.carriage-return',
        ],
        settings: {
          foreground: palette.foreground,
        },
      },

      {
        name: 'Raw New Line: New Line Glyph',
        scope: [
          'glyph.new-line',
        ],
        settings: {
          foreground: palette.foreground,
        },
      },

      /**
       * PlainTasks
       */

      {
        name: 'PlainTasks: Header',
        scope: [
          'keyword.control.header.todo',
        ],
        settings: {
          foreground: palette.green,
          background: palette.background,
        },
      },

      {
        name: 'PlainTasks: Notes',
        scope: [
          'notes.todo',
        ],
        settings: {
          foreground: palette.fg3,
        },
      },

      {
        name: 'PlainTasks: Punctuation',
        scope: [
          'text.todo punctuation.definition.italic',
          'text.todo punctuation.definition.bold',
        ],
        settings: {
          foreground: palette.bg4,
        },
      },

      {
        name: 'PlainTasks: Task Pending',
        scope: [
          'meta.item.todo.pending',
        ],
        settings: {
          foreground: palette.foreground,
        },
      },

      {
        name: 'PlainTasks: Task Pending Punctuation',
        scope: [
          'punctuation.definition.bullet.pending.todo',
        ],
        settings: {
          foreground: palette.gray,
        },
      },

      {
        name: 'PlainTasks: Task Completed Punctuation',
        scope: [
          'punctuation.definition.bullet.completed.todo',
        ],
        settings: {
          foreground: palette.cyan,
        },
      },

      {
        name: 'PlainTasks: Task Cancelled Punctuation',
        scope: [
          'punctuation.definition.bullet.cancelled.todo',
        ],
        settings: {
          foreground: palette.red,
        },
      },

      {
        name: 'PlainTasks: Tag Critical',
        scope: [
          'string.other.tag.todo.critical',
        ],
        settings: {
          foreground: palette.red,
          fontStyle: 'bold',
        },
      },

      {
        name: 'PlainTasks: Tag High',
        scope: [
          'string.other.tag.todo.high',
        ],
        settings: {
          foreground: palette.orange,
          fontStyle: 'bold',
        },
      },

      {
        name: 'PlainTasks: Tag Low',
        scope: [
          'string.other.tag.todo.low',
        ],
        settings: {
          foreground: palette.blue,
          fontStyle: 'bold',
        },
      },

      {
        name: 'PlainTasks: Tag Today',
        scope: [
          'string.other.tag.todo.today',
        ],
        settings: {
          foreground: palette.yellow,
          fontStyle: 'bold',
        },
      },

      {
        name: 'PlainTasks: Tag',
        scope: [
          'meta.tag.todo',
        ],
        settings: {
          foreground: palette.purple,
        },
      },

      {
        name: 'PlainTasks: URL',
        scope: [
          'punctuation.definition.url',
          'todo.url',
        ],
        settings: {
          foreground: palette.blue,
        },
      },

      {
        name: 'PlainTasks: Separator',
        scope: [
          'meta.punctuation.separator.todo',
          'meta.punctuation.archive.todo',
        ],
        settings: {
          fontStyle: 'italic',
          foreground: palette.gray,
        },
      },

    ],
  };
};
