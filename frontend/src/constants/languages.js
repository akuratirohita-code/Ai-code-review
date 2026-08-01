// Supported languages: display label, Monaco language id, and a
// starter snippet shown when a user switches language with an empty editor.
export const LANGUAGES = [
  { id: "java", label: "Java", monacoId: "java", extension: ".java" },
  { id: "python", label: "Python", monacoId: "python", extension: ".py" },
  { id: "javascript", label: "JavaScript", monacoId: "javascript", extension: ".js" },
  { id: "typescript", label: "TypeScript", monacoId: "typescript", extension: ".ts" },
  { id: "c", label: "C", monacoId: "c", extension: ".c" },
  { id: "cpp", label: "C++", monacoId: "cpp", extension: ".cpp" },
  { id: "csharp", label: "C#", monacoId: "csharp", extension: ".cs" },
  { id: "go", label: "Go", monacoId: "go", extension: ".go" },
  { id: "rust", label: "Rust", monacoId: "rust", extension: ".rs" },
  { id: "php", label: "PHP", monacoId: "php", extension: ".php" },
{ id: "html", label: "HTML", monacoId: "html", extension: ".html" },
{ id: "css", label: "CSS", monacoId: "css", extension: ".css" },
{ id: "json", label: "JSON", monacoId: "json", extension: ".json" },
{ id: "xml", label: "XML", monacoId: "xml", extension: ".xml" },
{ id: "yaml", label: "YAML", monacoId: "yaml", extension: ".yaml" },
{ id: "markdown", label: "Markdown", monacoId: "markdown", extension: ".md" },
{ id: "sql", label: "SQL", monacoId: "sql", extension: ".sql" },
{ id: "shell", label: "Shell", monacoId: "shell", extension: ".sh" },
{ id: "powershell", label: "PowerShell", monacoId: "powershell", extension: ".ps1" },
{ id: "kotlin", label: "Kotlin", monacoId: "kotlin", extension: ".kt" },
{ id: "swift", label: "Swift", monacoId: "swift", extension: ".swift" },
{ id: "ruby", label: "Ruby", monacoId: "ruby", extension: ".rb" },
{ id: "dart", label: "Dart", monacoId: "dart", extension: ".dart" },
{ id: "scala", label: "Scala", monacoId: "scala", extension: ".scala" },
{ id: "perl", label: "Perl", monacoId: "perl", extension: ".pl" },
{ id: "r", label: "R", monacoId: "r", extension: ".r" },
];

export const getLanguageById = (id) => LANGUAGES.find((lang) => lang.id === id) || LANGUAGES[2];

export const DEFAULT_SNIPPETS = {
  java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Start typing your Java code...");\n    }\n}\n`,
  python: `def main():\n    print("Start typing your Python code...")\n\nif __name__ == "__main__":\n    main()\n`,
  javascript: `function main() {\n  console.log("Start typing your JavaScript code...");\n}\n\nmain();\n`,
  typescript: `function main(): void {\n  console.log("Start typing your TypeScript code...");\n}\n\nmain();\n`,
  c: `#include <stdio.h>\n\nint main() {\n    printf("Start typing your C code...\\n");\n    return 0;\n}\n`,
  cpp: `#include <iostream>\n\nint main() {\n    std::cout << "Start typing your C++ code..." << std::endl;\n    return 0;\n}\n`,
  csharp: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Start typing your C# code...");\n    }\n}\n`,
  go: `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Start typing your Go code...")\n}\n`,
  rust: `fn main() {\n    println!("Start typing your Rust code...");\n}\n`,
};
