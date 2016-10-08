      checkDiffSample(diff);
      checkDiffSample(diff);
      checkDiffSample(diff);
      checkDiffSample(diff);
      var result = DiffParser.generateDiffJson(diff, {'srcPrefix': '\t', 'dstPrefix': '\t'});
    it('should parse diff with --find-renames', function() {
      var diff =
        'diff --git a/src/test-bar.js b/src/test-baz.js\n' +
        'similarity index 98%\n' +
        'rename from src/test-bar.js\n' +
        'rename to src/test-baz.js\n' +
        'index e01513b..f14a870 100644\n' +
        '--- a/src/test-bar.js\n' +
        '+++ b/src/test-baz.js\n' +
        '@@ -1,4 +1,32 @@\n' +
        ' function foo() {\n' +
        '-var bar = "Whoops!";\n' +
        '+var baz = "Whoops!";\n' +
        ' }\n' +
        ' ';

      var result = DiffParser.generateDiffJson(diff);
      var file1 = result[0];
      assert.equal(1, result.length);
      assert.equal(1, file1.addedLines);
      assert.equal(1, file1.deletedLines);
      assert.equal('src/test-bar.js', file1.oldName);
      assert.equal('src/test-baz.js', file1.newName);
      assert.equal(1, file1.blocks.length);
      assert.equal(5, file1.blocks[0].lines.length);
      var linesContent = file1.blocks[0].lines.map(function(line) {
        return line.content;
      });
      assert.deepEqual(linesContent,
        [' function foo() {', '-var bar = "Whoops!";', '+var baz = "Whoops!";', ' }', ' ']);
    });

    it('should parse diff with prefix', function() {
      var diff =
        'diff --git "\tTest.scala" "\tScalaTest.scala"\n' +
        'similarity index 88%\n' +
        'rename from Test.scala\n' +
        'rename to ScalaTest.scala\n' +
        'index 7d1f9bf..8b13271 100644\n' +
        '--- "\tTest.scala"\n' +
        '+++ "\tScalaTest.scala"\n' +
        '@@ -1,6 +1,8 @@\n' +
        ' class Test {\n' +
        ' \n' +
        '   def method1 = ???\n' +
        '+\n' +
        '+  def method2 = ???\n' +
        ' \n' +
        '   def myMethod = ???\n' +
        ' \n' +
        '@@ -10,7 +12,6 @@ class Test {\n' +
        ' \n' +
        '   def + = ???\n' +
        ' \n' +
        '-  def |> = ???\n' +
        ' \n' +
        ' }\n' +
        ' \n' +
        'diff --git "\ttardis.png" "\ttardis.png"\n' +
        'new file mode 100644\n' +
        'index 0000000..d503a29\n' +
        'Binary files /dev/null and "\ttardis.png" differ\n';

      var result = DiffParser.generateDiffJson(diff, {'srcPrefix': '\t', 'dstPrefix': '\t'});
      assert.equal(2, result.length);

      var file1 = result[0];
      assert.equal(2, file1.addedLines);
      assert.equal(1, file1.deletedLines);
      assert.equal('Test.scala', file1.oldName);
      assert.equal('ScalaTest.scala', file1.newName);
      assert.equal(2, file1.blocks.length);
      assert.equal(8, file1.blocks[0].lines.length);
      assert.equal(7, file1.blocks[1].lines.length);

      var file2 = result[1];
      assert.equal('/dev/null', file2.oldName);
      assert.equal('tardis.png', file2.newName);
    });