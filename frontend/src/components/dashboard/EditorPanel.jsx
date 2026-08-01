import Editor from "@monaco-editor/react";
import { getLanguageById } from "../../constants/languages";

/**
 * Thin wrapper around Monaco so the dashboard doesn't need to know
 * about editor-specific config (theme, minimap, font, etc).
 */
const EditorPanel = ({ code, onChange, language }) => {
  const lang = getLanguageById(language);

  return (
    <div className="h-full overflow-hidden rounded-2xl border border-border bg-ink shadow-card">
      <Editor
        height="100%"
        language={lang.monacoId}
        value={code}
        onChange={(value) => onChange(value ?? "")}
        theme="vs-dark"
        options={{
          fontSize: 14,
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          minimap: { enabled: false },
          padding: { top: 20, bottom: 20 },
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          cursorBlinking: "smooth",
          automaticLayout: true,
          tabSize: 2,
          wordWrap: "on",
          renderLineHighlight: "gutter",
        }}
      />
    </div>
  );
};

export default EditorPanel;
