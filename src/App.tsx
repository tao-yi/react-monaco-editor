import Editor from "@monaco-editor/react";
import React, { useRef } from "react";

function App() {
  return (
    <MyEditor />
  );
}


function MyEditor() {
  const editorRef1: any = useRef(null);
  const editorRef2: any = useRef(null);
  const editorRef3: any = useRef(null);
  const monacoRef = useRef(null);

  return (
    <>
      <div className="flex gap-4 justify-evenly bg-green-500">
        <span className="rounded bg-purple-400 px-4 m-2 hover:bg-purple-600" >script.js</span>
        <span className="rounded bg-purple-400 px-4 m-2 hover:bg-purple-600" >style.css</span>
        <span className="rounded bg-purple-400 px-4 m-2 hover:bg-purple-600" >index.html</span>
      </div>
      <div className="flex gap-4">
        <Editor
          height="80vh"
          width="40vw"
          theme="vs-dark"
          onChange={(value, event) => console.log(value, event)}
          path="script.js"
          defaultLanguage="javascript"
          defaultValue="const a = 5;"
          onMount={(editor, monaco) => {
            editorRef1.current = editor;
            monacoRef.current = editor
          }}
          beforeMount={(monaco) => console.log("beforeMount: the monaco instance:", monaco)}
        />
        <Editor
          height="80vh"
          width="40vw"
          theme="vs-dark"
          path="style.css"
          defaultLanguage="css"
          defaultValue="div { font-size: 24px }"
          onMount={(editor, monaco) => editorRef2.current = editor}
          beforeMount={(monaco) => console.log("beforeMount: the monaco instance:", monaco)}
        />
        <Editor
          height="80vh"
          width="40vw"
          theme="vs-dark"
          path="index.html"
          defaultLanguage="html"
          defaultValue="<div>hello world</div>"
          onMount={(editor, monaco) => editorRef3.current = editor}
          beforeMount={(monaco) => console.log("beforeMount: the monaco instance:", monaco)}
        />
      </div>
    </>
  );
}

export default App;
