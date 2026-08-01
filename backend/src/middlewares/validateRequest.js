const SUPPORTED_LANGUAGES = [
  "java",
  "python",
  "javascript",
  "typescript",
  "c",
  "cpp",
  "csharp",
  "go",
  "rust",

  "php",
  "html",
  "css",
  "json",
  "xml",
  "yaml",
  "markdown",
  "sql",
  "shell",
  "powershell",

  "kotlin",
  "swift",
  "ruby",
  "dart",
  "scala",
  "perl",
  "r",

  "lua",
  "objective-c",
  "groovy",
  "matlab",
  "vb",
  "vbnet",
  "assembly",
  "fortran",
  "pascal",
  "haskell",
  "elixir",
  "erlang",
  "clojure",
  "fsharp",
  "ocaml",
  "julia",
  "solidity",
  "dockerfile",
  "nginx",
  "ini",
  "toml",
];
export const validateReviewRequest = (req, res, next) => {
  const { code, language } = req.body;

  if (typeof code !== "string" || code.trim().length === 0) {
    return res.status(400).json({ success: false, message: "Field 'code' is required and cannot be empty." });
  }

  if (code.length > 20000) {
    return res.status(400).json({ success: false, message: "Code exceeds the 20,000 character limit." });
  }

  if (typeof language !== "string" || language.trim().length === 0) {
  return res.status(400).json({
    success: false,
    message: "Field 'language' is required.",
  });
}

  next();
};
