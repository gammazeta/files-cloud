<template>
  <div>
    this is test page
    <pre id="txtAce"></pre>
  </div>
</template>

<script src = "~/modules/ace.js"></script>
<script>
import { Editor } from "~/modules/ace.js";
export default {
  mounted() {

    ace.config.set("basePath", "/");
    var editor = ace.edit("txtAce");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/html");
    editor.setOptions({
      fontSize: "12pt",
    });
  },
};
</script>

<style>
pre {
  width: 100%;
  height: 600px;
  padding: 5px;
  outline: none;
  border-style: solid;
  border-width: thin;
  border-color: #666e77;
  margin: 0;
}
</style>