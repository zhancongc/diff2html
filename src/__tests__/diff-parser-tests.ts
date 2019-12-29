      const result = parse(diff);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 1,
            "blocks": Array [
              Object {
                "header": "@@ -1 +1 @@",
                "lines": Array [
                  Object {
                    "content": "-test",
                    "newNumber": undefined,
                    "oldNumber": 1,
                    "type": "delete",
                  },
                  Object {
                    "content": "+test1r",
                    "newNumber": 1,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "0ddf2ba",
            "checksumBefore": "0000001",
            "deletedLines": 1,
            "isCombined": false,
            "isGitDiff": true,
            "language": undefined,
            "newName": "sample",
            "oldName": "sample",
          },
        ]
      `);
      const result = parse(diff);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 1,
            "blocks": Array [
              Object {
                "header": "@@ -1 +1 @@",
                "lines": Array [
                  Object {
                    "content": "-test",
                    "newNumber": undefined,
                    "oldNumber": 1,
                    "type": "delete",
                  },
                  Object {
                    "content": "+test1r",
                    "newNumber": 1,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "0ddf2ba",
            "checksumBefore": "0000001",
            "deletedLines": 1,
            "isCombined": false,
            "isGitDiff": true,
            "language": undefined,
            "newName": "sample",
            "oldName": "sample",
          },
        ]
      `);
      const result = parse(diff);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 1,
            "blocks": Array [
              Object {
                "header": "@@ -1 +1 @@",
                "lines": Array [
                  Object {
                    "content": "-test",
                    "newNumber": undefined,
                    "oldNumber": 1,
                    "type": "delete",
                  },
                  Object {
                    "content": "+test1r",
                    "newNumber": 1,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "0ddf2ba",
            "checksumBefore": "0000001",
            "deletedLines": 1,
            "isCombined": false,
            "isGitDiff": true,
            "language": undefined,
            "newName": "sample",
            "oldName": "sample",
          },
        ]
      `);
      const result = parse(diff);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 1,
            "blocks": Array [
              Object {
                "header": "@@ -1 +1 @@",
                "lines": Array [
                  Object {
                    "content": "-test",
                    "newNumber": undefined,
                    "oldNumber": 1,
                    "type": "delete",
                  },
                  Object {
                    "content": "+test1r",
                    "newNumber": 1,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "0ddf2ba",
            "checksumBefore": "0000001",
            "deletedLines": 1,
            "isCombined": false,
            "isGitDiff": true,
            "language": undefined,
            "newName": "sample",
            "oldName": "sample",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 2,
            "blocks": Array [
              Object {
                "header": "@@ -1 +1,2 @@",
                "lines": Array [
                  Object {
                    "content": "-cenas",
                    "newNumber": undefined,
                    "oldNumber": 1,
                    "type": "delete",
                  },
                  Object {
                    "content": "+cenas com ananas",
                    "newNumber": 1,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+bananas",
                    "newNumber": 2,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "e9bd385",
            "checksumBefore": "4c679d7",
            "deletedLines": 1,
            "isCombined": false,
            "isGitDiff": true,
            "language": "scala",
            "mode": "100644",
            "newName": "bla with 	tab.scala",
            "oldName": "bla with 	tab.scala",
          },
        ]
      `);
      const result = parse(diff);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 2,
            "blocks": Array [
              Object {
                "header": "@@ -1 +1,2 @@",
                "lines": Array [
                  Object {
                    "content": "-cenas",
                    "newNumber": undefined,
                    "oldNumber": 1,
                    "type": "delete",
                  },
                  Object {
                    "content": "+cenas com ananas",
                    "newNumber": 1,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+bananas",
                    "newNumber": 2,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "e9bd385",
            "checksumBefore": "4c679d7",
            "deletedLines": 1,
            "isCombined": false,
            "isGitDiff": true,
            "language": "scala",
            "mode": "100644",
            "newName": "	bla with 	tab.scala",
            "oldName": "	bla with 	tab.scala",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 0,
            "blocks": Array [
              Object {
                "header": "@@ -1,3 +0,0 @@",
                "lines": Array [
                  Object {
                    "content": "-define(() => {",
                    "newNumber": undefined,
                    "oldNumber": 1,
                    "type": "delete",
                  },
                  Object {
                    "content": "-  return typeof undefined;",
                    "newNumber": undefined,
                    "oldNumber": 2,
                    "type": "delete",
                  },
                  Object {
                    "content": "-});",
                    "newNumber": undefined,
                    "oldNumber": 3,
                    "type": "delete",
                  },
                ],
                "newStartLine": 0,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "0000000",
            "checksumBefore": "04e16b0",
            "deletedFileMode": "100644",
            "deletedLines": 3,
            "isCombined": false,
            "isDeleted": true,
            "isGitDiff": true,
            "language": "js",
            "newName": "/dev/null",
            "oldName": "src/var/strundefined.js",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 5,
            "blocks": Array [
              Object {
                "header": "@@ -0,0 +1,5 @@",
                "lines": Array [
                  Object {
                    "content": "+var parser = require('./source/git-parser');",
                    "newNumber": 1,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+",
                    "newNumber": 2,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+var patchLineList = [ false, false, false, false ];",
                    "newNumber": 3,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+",
                    "newNumber": 4,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+console.log(parser.parsePatchDiffResult(text, patchLineList));",
                    "newNumber": 5,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 0,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "e1e22ec",
            "checksumBefore": "0000000",
            "deletedLines": 0,
            "isCombined": false,
            "isGitDiff": true,
            "isNew": true,
            "language": "js",
            "newFileMode": "100644",
            "newName": "test.js",
            "oldName": "/dev/null",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 6,
            "blocks": Array [
              Object {
                "header": "@@ -1,6 +1,5 @@",
                "lines": Array [
                  Object {
                    "content": "+var parser = require('./source/git-parser');",
                    "newNumber": 1,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+",
                    "newNumber": 2,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+var text = 'diff --git a/components/app/app.html b/components/app/app.html\\\\nindex ecb7a95..027bd9b 100644\\\\n--- a/components/app/app.html\\\\n+++ b/components/app/app.html\\\\n@@ -52,0 +53,3 @@\\\\n+\\\\n+\\\\n+\\\\n@@ -56,0 +60,3 @@\\\\n+\\\\n+\\\\n+\\\\n'",
                    "newNumber": 3,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+var patchLineList = [ false, false, false, false ];",
                    "newNumber": 4,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+",
                    "newNumber": 5,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+console.log(parser.parsePatchDiffResult(text, patchLineList));",
                    "newNumber": 6,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "fa51f18",
            "checksumBefore": "cc6ffb4",
            "deletedLines": 0,
            "isCombined": false,
            "isGitDiff": true,
            "language": "js",
            "mode": "100644",
            "newName": "src/offset.js",
            "oldName": "src/offset.js",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 2,
            "blocks": Array [
              Object {
                "header": "@@ -1,10 +1,9 @@",
                "lines": Array [
                  Object {
                    "content": " define([",
                    "newNumber": 1,
                    "oldNumber": 1,
                    "type": "context",
                  },
                  Object {
                    "content": "   \\"../core\\",",
                    "newNumber": 2,
                    "oldNumber": 2,
                    "type": "context",
                  },
                  Object {
                    "content": "   \\"../var/rnotwhite\\",",
                    "newNumber": 3,
                    "oldNumber": 3,
                    "type": "context",
                  },
                  Object {
                    "content": "-  \\"../var/strundefined\\",",
                    "newNumber": undefined,
                    "oldNumber": 4,
                    "type": "delete",
                  },
                  Object {
                    "content": "   \\"../data/var/dataPriv\\",",
                    "newNumber": 4,
                    "oldNumber": 5,
                    "type": "context",
                  },
                  Object {
                    "content": "   \\"../core/init\\"",
                    "newNumber": 5,
                    "oldNumber": 6,
                    "type": "context",
                  },
                  Object {
                    "content": "-], function( jQuery, rnotwhite, strundefined, dataPriv ) {",
                    "newNumber": undefined,
                    "oldNumber": 7,
                    "type": "delete",
                  },
                  Object {
                    "content": "+], function( jQuery, rnotwhite, dataPriv ) {",
                    "newNumber": 6,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": " ",
                    "newNumber": 7,
                    "oldNumber": 8,
                    "type": "context",
                  },
                  Object {
                    "content": " var rclass = /[\\\\t\\\\r\\\\n\\\\f]/g;",
                    "newNumber": 8,
                    "oldNumber": 9,
                    "type": "context",
                  },
                  Object {
                    "content": " ",
                    "newNumber": 9,
                    "oldNumber": 10,
                    "type": "context",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
              Object {
                "header": "@@ -128,7 +127,7 @@ jQuery.fn.extend({",
                "lines": Array [
                  Object {
                    "content": "         }",
                    "newNumber": 127,
                    "oldNumber": 128,
                    "type": "context",
                  },
                  Object {
                    "content": " ",
                    "newNumber": 128,
                    "oldNumber": 129,
                    "type": "context",
                  },
                  Object {
                    "content": "       // Toggle whole class name",
                    "newNumber": 129,
                    "oldNumber": 130,
                    "type": "context",
                  },
                  Object {
                    "content": "-      } else if ( type === strundefined || type === \\"boolean\\" ) {",
                    "newNumber": undefined,
                    "oldNumber": 131,
                    "type": "delete",
                  },
                  Object {
                    "content": "+      } else if ( value === undefined || type === \\"boolean\\" ) {",
                    "newNumber": 130,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "         if ( this.className ) {",
                    "newNumber": 131,
                    "oldNumber": 132,
                    "type": "context",
                  },
                  Object {
                    "content": "           // store className if set",
                    "newNumber": 132,
                    "oldNumber": 133,
                    "type": "context",
                  },
                  Object {
                    "content": "           dataPriv.set( this, \\"__className__\\", this.className );",
                    "newNumber": 133,
                    "oldNumber": 134,
                    "type": "context",
                  },
                ],
                "newStartLine": 127,
                "oldStartLine": 128,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "c8d1393",
            "checksumBefore": "c617824",
            "deletedLines": 3,
            "isCombined": false,
            "isGitDiff": true,
            "language": "js",
            "mode": "100644",
            "newName": "src/attributes/classes.js",
            "oldName": "src/attributes/classes.js",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 1,
            "blocks": Array [
              Object {
                "header": "@@ -101,7 +101,7 @@ var rootjQuery,",
                "lines": Array [
                  Object {
                    "content": "     // HANDLE: $(function)",
                    "newNumber": 101,
                    "oldNumber": 101,
                    "type": "context",
                  },
                  Object {
                    "content": "     // Shortcut for document ready",
                    "newNumber": 102,
                    "oldNumber": 102,
                    "type": "context",
                  },
                  Object {
                    "content": "     } else if ( jQuery.isFunction( selector ) ) {",
                    "newNumber": 103,
                    "oldNumber": 103,
                    "type": "context",
                  },
                  Object {
                    "content": "-      return typeof rootjQuery.ready !== \\"undefined\\" ?",
                    "newNumber": undefined,
                    "oldNumber": 104,
                    "type": "delete",
                  },
                  Object {
                    "content": "+      return rootjQuery.ready !== undefined ?",
                    "newNumber": 104,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "         rootjQuery.ready( selector ) :",
                    "newNumber": 105,
                    "oldNumber": 105,
                    "type": "context",
                  },
                  Object {
                    "content": "         // Execute immediately if ready is not present",
                    "newNumber": 106,
                    "oldNumber": 106,
                    "type": "context",
                  },
                  Object {
                    "content": "         selector( jQuery );",
                    "newNumber": 107,
                    "oldNumber": 107,
                    "type": "context",
                  },
                ],
                "newStartLine": 101,
                "oldStartLine": 101,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "50f310c",
            "checksumBefore": "e49196a",
            "deletedLines": 1,
            "isCombined": false,
            "isGitDiff": true,
            "language": "js",
            "mode": "100644",
            "newName": "src/core/init.js",
            "oldName": "src/core/init.js",
          },
          Object {
            "addedLines": 0,
            "blocks": Array [
              Object {
                "header": "@@ -1,6 +1,5 @@",
                "lines": Array [
                  Object {
                    "content": " define([",
                    "newNumber": 1,
                    "oldNumber": 1,
                    "type": "context",
                  },
                  Object {
                    "content": "   \\"./core\\",",
                    "newNumber": 2,
                    "oldNumber": 2,
                    "type": "context",
                  },
                  Object {
                    "content": "-  \\"./var/strundefined\\",",
                    "newNumber": undefined,
                    "oldNumber": 3,
                    "type": "delete",
                  },
                  Object {
                    "content": "   \\"./var/rnotwhite\\",",
                    "newNumber": 3,
                    "oldNumber": 4,
                    "type": "context",
                  },
                  Object {
                    "content": "   \\"./var/hasOwn\\",",
                    "newNumber": 4,
                    "oldNumber": 5,
                    "type": "context",
                  },
                  Object {
                    "content": "   \\"./var/slice\\",",
                    "newNumber": 5,
                    "oldNumber": 6,
                    "type": "context",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "6183f70",
            "checksumBefore": "7336f4d",
            "deletedLines": 1,
            "isCombined": false,
            "isGitDiff": true,
            "language": "js",
            "mode": "100644",
            "newName": "src/event.js",
            "oldName": "src/event.js",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 9,
            "blocks": Array [
              Object {
                "header": "@@@ -98,20 -98,12 +98,20 @@@",
                "lines": Array [
                  Object {
                    "content": "   return (a_date > b_date) ? -1 : (a_date == b_date) ? 0 : 1;",
                    "newNumber": 98,
                    "oldNumber": 98,
                    "type": "context",
                  },
                  Object {
                    "content": "  }",
                    "newNumber": 99,
                    "oldNumber": 99,
                    "type": "context",
                  },
                  Object {
                    "content": "  ",
                    "newNumber": 100,
                    "oldNumber": 100,
                    "type": "context",
                  },
                  Object {
                    "content": "- static void describe(char *arg)",
                    "newNumber": undefined,
                    "oldNumber": 101,
                    "type": "delete",
                  },
                  Object {
                    "content": " -static void describe(struct commit *cmit, int last_one)",
                    "newNumber": undefined,
                    "oldNumber": 102,
                    "type": "delete",
                  },
                  Object {
                    "content": "++static void describe(char *arg, int last_one)",
                    "newNumber": 101,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "  {",
                    "newNumber": 102,
                    "oldNumber": 103,
                    "type": "context",
                  },
                  Object {
                    "content": " + unsigned char sha1[20];",
                    "newNumber": 103,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": " + struct commit *cmit;",
                    "newNumber": 104,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "   struct commit_list *list;",
                    "newNumber": 105,
                    "oldNumber": 104,
                    "type": "context",
                  },
                  Object {
                    "content": "   static int initialized = 0;",
                    "newNumber": 106,
                    "oldNumber": 105,
                    "type": "context",
                  },
                  Object {
                    "content": "   struct commit_name *n;",
                    "newNumber": 107,
                    "oldNumber": 106,
                    "type": "context",
                  },
                  Object {
                    "content": "  ",
                    "newNumber": 108,
                    "oldNumber": 107,
                    "type": "context",
                  },
                  Object {
                    "content": " + if (get_sha1(arg, sha1) < 0)",
                    "newNumber": 109,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": " +     usage(describe_usage);",
                    "newNumber": 110,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": " + cmit = lookup_commit_reference(sha1);",
                    "newNumber": 111,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": " + if (!cmit)",
                    "newNumber": 112,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": " +     usage(describe_usage);",
                    "newNumber": 113,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": " +",
                    "newNumber": 114,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "   if (!initialized) {",
                    "newNumber": 115,
                    "oldNumber": 108,
                    "type": "context",
                  },
                  Object {
                    "content": "       initialized = 1;",
                    "newNumber": 116,
                    "oldNumber": 109,
                    "type": "context",
                  },
                  Object {
                    "content": "       for_each_ref(get_name);",
                    "newNumber": 117,
                    "oldNumber": 110,
                    "type": "context",
                  },
                ],
                "newStartLine": 98,
                "oldStartLine": 98,
                "oldStartLine2": 98,
              },
            ],
            "checksumAfter": "fabadb8",
            "checksumBefore": Array [
              "cc95eb0",
              "4866510",
            ],
            "deletedLines": 2,
            "isCombined": true,
            "isGitDiff": true,
            "language": "c",
            "newName": "describe.c",
            "oldName": "describe.c",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 0,
            "blocks": Array [],
            "changedPercentage": 5,
            "deletedLines": 0,
            "isCopy": true,
            "isGitDiff": true,
            "newName": "more-index.js",
            "oldName": "index.js",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 0,
            "blocks": Array [],
            "deletedLines": 0,
            "isGitDiff": true,
            "isRename": true,
            "newName": "other-index.js",
            "oldName": "more-index.js",
            "unchangedPercentage": 86,
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 1,
            "blocks": Array [
              Object {
                "header": "@@ -1 +1,2 @@",
                "lines": Array [
                  Object {
                    "content": "-test",
                    "newNumber": undefined,
                    "oldNumber": 1,
                    "type": "delete",
                  },
                  Object {
                    "content": "+test1r",
                    "newNumber": 1,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "0ddf2ba",
            "checksumBefore": "0000001",
            "deletedLines": 1,
            "isCombined": false,
            "isGitDiff": true,
            "language": undefined,
            "newName": "sample",
            "oldName": "sample",
          },
        ]
      `);
          "+test2r",
          "+test2r"
      ].join("\n");
      const result = parse(diffs);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 2,
            "blocks": Array [
              Object {
                "header": "@@ -1 +1,2 @@",
                "lines": Array [
                  Object {
                    "content": "-test",
                    "newNumber": undefined,
                    "oldNumber": 1,
                    "type": "delete",
                  },
                  Object {
                    "content": "+test1r",
                    "newNumber": 1,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+test2r",
                    "newNumber": 2,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "deletedLines": 1,
            "isCombined": false,
            "language": "js",
            "newName": "sample.js",
            "oldName": "sample.js",
          },
          Object {
            "addedLines": 2,
            "blocks": Array [
              Object {
                "header": "@@ -1 +1,2 @@",
                "lines": Array [
                  Object {
                    "content": "-test",
                    "newNumber": undefined,
                    "oldNumber": 1,
                    "type": "delete",
                  },
                  Object {
                    "content": "+test1r",
                    "newNumber": 1,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+test2r",
                    "newNumber": 2,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "deletedLines": 1,
            "isCombined": false,
            "language": "js",
            "newName": "sample.js",
            "oldName": "sample.js",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 2,
            "blocks": Array [
              Object {
                "header": "@@ -1 +1,2 @@",
                "lines": Array [
                  Object {
                    "content": "-test",
                    "newNumber": undefined,
                    "oldNumber": 1,
                    "type": "delete",
                  },
                  Object {
                    "content": "+test1r",
                    "newNumber": 1,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+test2r",
                    "newNumber": 2,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "deletedLines": 1,
            "isCombined": false,
            "language": "js",
            "newName": "sample.js",
            "oldName": "sample.js",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 1,
            "blocks": Array [
              Object {
                "header": "@@ -1 +1,2 @@",
                "lines": Array [
                  Object {
                    "content": "-test",
                    "newNumber": undefined,
                    "oldNumber": 1,
                    "type": "delete",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
              Object {
                "header": "@@ -10 +20,2 @@",
                "lines": Array [
                  Object {
                    "content": "+test",
                    "newNumber": 20,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 20,
                "oldStartLine": 10,
                "oldStartLine2": null,
              },
            ],
            "deletedLines": 1,
            "isCombined": false,
            "language": "js",
            "newName": "sample.js",
            "oldName": "sample.js",
          },
          Object {
            "addedLines": 1,
            "blocks": Array [
              Object {
                "header": "@@ -1 +1,2 @@",
                "lines": Array [
                  Object {
                    "content": "+test1",
                    "newNumber": 1,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "deletedLines": 0,
            "isCombined": false,
            "language": "js",
            "newName": "sample1.js",
            "oldName": "sample1.js",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 3,
            "blocks": Array [
              Object {
                "header": "@@ -1,8 +1,8 @@",
                "lines": Array [
                  Object {
                    "content": " test",
                    "newNumber": 1,
                    "oldNumber": 1,
                    "type": "context",
                  },
                  Object {
                    "content": " ",
                    "newNumber": 2,
                    "oldNumber": 2,
                    "type": "context",
                  },
                  Object {
                    "content": "-- 1",
                    "newNumber": undefined,
                    "oldNumber": 3,
                    "type": "delete",
                  },
                  Object {
                    "content": "--- 1",
                    "newNumber": undefined,
                    "oldNumber": 4,
                    "type": "delete",
                  },
                  Object {
                    "content": "---- 1",
                    "newNumber": undefined,
                    "oldNumber": 5,
                    "type": "delete",
                  },
                  Object {
                    "content": " ",
                    "newNumber": 3,
                    "oldNumber": 6,
                    "type": "context",
                  },
                  Object {
                    "content": "++ 2",
                    "newNumber": 4,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+++ 2",
                    "newNumber": 5,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "++++ 2",
                    "newNumber": 6,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "deletedLines": 3,
            "isCombined": false,
            "language": "js",
            "newName": "sample.js",
            "oldName": "sample.js",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 0,
            "blocks": Array [
              Object {
                "header": "@@ @@",
                "lines": Array [
                  Object {
                    "content": " test",
                    "newNumber": 0,
                    "oldNumber": 0,
                    "type": "context",
                  },
                ],
                "newStartLine": 0,
                "oldStartLine": 0,
                "oldStartLine2": null,
              },
            ],
            "deletedLines": 0,
            "isCombined": false,
            "language": "js",
            "newName": "sample.js",
            "oldName": "sample.js",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 0,
            "blocks": Array [
              Object {
                "header": "Binary files differ",
                "lines": Array [],
                "newStartLine": 0,
                "oldStartLine": 0,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "56fc1f2",
            "checksumBefore": "322248b",
            "deletedLines": 0,
            "isCombined": false,
            "isGitDiff": true,
            "language": "png",
            "mode": "100644",
            "newName": "last-changes-config.png",
            "oldName": "last-changes-config.png",
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 1,
            "blocks": Array [
              Object {
                "header": "@@ -1,4 +1,32 @@",
                "lines": Array [
                  Object {
                    "content": " function foo() {",
                    "newNumber": 1,
                    "oldNumber": 1,
                    "type": "context",
                  },
                  Object {
                    "content": "-var bar = \\"Whoops!\\";",
                    "newNumber": undefined,
                    "oldNumber": 2,
                    "type": "delete",
                  },
                  Object {
                    "content": "+var baz = \\"Whoops!\\";",
                    "newNumber": 2,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": " }",
                    "newNumber": 3,
                    "oldNumber": 3,
                    "type": "context",
                  },
                  Object {
                    "content": " ",
                    "newNumber": 4,
                    "oldNumber": 4,
                    "type": "context",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "f14a870",
            "checksumBefore": "e01513b",
            "deletedLines": 1,
            "isCombined": false,
            "isGitDiff": true,
            "isRename": true,
            "language": "js",
            "mode": "100644",
            "newName": "src/test-baz.js",
            "oldName": "src/test-bar.js",
            "unchangedPercentage": 98,
          },
        ]
      `);
      const result = parse(diff);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 2,
            "blocks": Array [
              Object {
                "header": "@@ -1,6 +1,8 @@",
                "lines": Array [
                  Object {
                    "content": " class Test {",
                    "newNumber": 1,
                    "oldNumber": 1,
                    "type": "context",
                  },
                  Object {
                    "content": " ",
                    "newNumber": 2,
                    "oldNumber": 2,
                    "type": "context",
                  },
                  Object {
                    "content": "   def method1 = ???",
                    "newNumber": 3,
                    "oldNumber": 3,
                    "type": "context",
                  },
                  Object {
                    "content": "+",
                    "newNumber": 4,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": "+  def method2 = ???",
                    "newNumber": 5,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": " ",
                    "newNumber": 6,
                    "oldNumber": 4,
                    "type": "context",
                  },
                  Object {
                    "content": "   def myMethod = ???",
                    "newNumber": 7,
                    "oldNumber": 5,
                    "type": "context",
                  },
                  Object {
                    "content": " ",
                    "newNumber": 8,
                    "oldNumber": 6,
                    "type": "context",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
              Object {
                "header": "@@ -10,7 +12,6 @@ class Test {",
                "lines": Array [
                  Object {
                    "content": " ",
                    "newNumber": 12,
                    "oldNumber": 10,
                    "type": "context",
                  },
                  Object {
                    "content": "   def + = ???",
                    "newNumber": 13,
                    "oldNumber": 11,
                    "type": "context",
                  },
                  Object {
                    "content": " ",
                    "newNumber": 14,
                    "oldNumber": 12,
                    "type": "context",
                  },
                  Object {
                    "content": "-  def |> = ???",
                    "newNumber": undefined,
                    "oldNumber": 13,
                    "type": "delete",
                  },
                  Object {
                    "content": " ",
                    "newNumber": 15,
                    "oldNumber": 14,
                    "type": "context",
                  },
                  Object {
                    "content": " }",
                    "newNumber": 16,
                    "oldNumber": 15,
                    "type": "context",
                  },
                  Object {
                    "content": " ",
                    "newNumber": 17,
                    "oldNumber": 16,
                    "type": "context",
                  },
                ],
                "newStartLine": 12,
                "oldStartLine": 10,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "8b13271",
            "checksumBefore": "7d1f9bf",
            "deletedLines": 1,
            "isCombined": false,
            "isGitDiff": true,
            "isRename": true,
            "language": "scala",
            "mode": "100644",
            "newName": "	ScalaTest.scala",
            "oldName": "	Test.scala",
            "unchangedPercentage": 88,
          },
          Object {
            "addedLines": 0,
            "blocks": Array [
              Object {
                "header": "Binary file",
                "lines": Array [],
                "newStartLine": 0,
                "oldStartLine": 0,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "d503a29",
            "checksumBefore": "0000000",
            "deletedLines": 0,
            "isBinary": true,
            "isCombined": false,
            "isGitDiff": true,
            "isNew": true,
            "newFileMode": "100644",
            "newName": "	tardis.png",
            "oldName": "/dev/null",
          },
          Object {
            "addedLines": 1,
            "blocks": Array [
              Object {
                "header": "@@ -1,4 +1,32 @@",
                "lines": Array [
                  Object {
                    "content": " function foo() {",
                    "newNumber": 1,
                    "oldNumber": 1,
                    "type": "context",
                  },
                  Object {
                    "content": "-var bar = \\"Whoops!\\";",
                    "newNumber": undefined,
                    "oldNumber": 2,
                    "type": "delete",
                  },
                  Object {
                    "content": "+var baz = \\"Whoops!\\";",
                    "newNumber": 2,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": " }",
                    "newNumber": 3,
                    "oldNumber": 3,
                    "type": "context",
                  },
                  Object {
                    "content": " ",
                    "newNumber": 4,
                    "oldNumber": 4,
                    "type": "context",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "f14a870",
            "checksumBefore": "e01513b",
            "deletedLines": 1,
            "isCombined": false,
            "isGitDiff": true,
            "isRename": true,
            "language": "js",
            "mode": "100644",
            "newName": "src/test-baz.js",
            "oldName": "src/test-bar.js",
            "unchangedPercentage": 98,
          },
        ]
      `);
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addedLines": 0,
            "blocks": Array [
              Object {
                "header": "GIT binary patch",
                "lines": Array [],
                "newStartLine": 0,
                "oldStartLine": 0,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "0000000000000000000000000000000000000000",
            "checksumBefore": "2a9d516a5647205d7be510dd0dff93a3663eff6f",
            "deletedFileMode": "100644",
            "deletedLines": 0,
            "isBinary": true,
            "isCombined": false,
            "isDeleted": true,
            "isGitDiff": true,
            "newName": "favicon.png",
            "oldName": "favicon.png",
          },
          Object {
            "addedLines": 1,
            "blocks": Array [
              Object {
                "header": "@@ -1,4 +1,32 @@",
                "lines": Array [
                  Object {
                    "content": " function foo() {",
                    "newNumber": 1,
                    "oldNumber": 1,
                    "type": "context",
                  },
                  Object {
                    "content": "-var bar = \\"Whoops!\\";",
                    "newNumber": undefined,
                    "oldNumber": 2,
                    "type": "delete",
                  },
                  Object {
                    "content": "+var baz = \\"Whoops!\\";",
                    "newNumber": 2,
                    "oldNumber": undefined,
                    "type": "insert",
                  },
                  Object {
                    "content": " }",
                    "newNumber": 3,
                    "oldNumber": 3,
                    "type": "context",
                  },
                  Object {
                    "content": " ",
                    "newNumber": 4,
                    "oldNumber": 4,
                    "type": "context",
                  },
                ],
                "newStartLine": 1,
                "oldStartLine": 1,
                "oldStartLine2": null,
              },
            ],
            "checksumAfter": "f14a870",
            "checksumBefore": "e01513b",
            "deletedLines": 1,
            "isCombined": false,
            "isGitDiff": true,
            "isRename": true,
            "language": "js",
            "mode": "100644",
            "newName": "src/test-baz.js",
            "oldName": "src/test-bar.js",
            "unchangedPercentage": 98,
          },
        ]
      `);