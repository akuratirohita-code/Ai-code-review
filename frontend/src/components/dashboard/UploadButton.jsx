import { useRef } from "react";
import { Upload } from "lucide-react";
import toast from "react-hot-toast";
import { LANGUAGES } from "../../constants/languages";

const EXTENSION_TO_LANGUAGE = LANGUAGES.reduce((acc, lang) => {
  acc[lang.extension] = lang.id;
  return acc;
}, {});

const UploadButton = ({ onFileLoaded }) => {
  const inputRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const extension = "." + file.name.split(".").pop();
    const language = EXTENSION_TO_LANGUAGE[extension];

    const reader = new FileReader();
    reader.onload = () => {
      onFileLoaded({ code: reader.result, language: language || null, fileName: file.name });
      toast.success(`Loaded ${file.name}`);
    };
    reader.onerror = () => toast.error("Could not read that file.");
    reader.readAsText(file);

    e.target.value = "";
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept=".java,.py,.js,.ts,.c,.cpp,.cs,.go,.rs,.txt"
        className="hidden"
        onChange={handleFile}
      />
      <button
        onClick={() => inputRef.current?.click()}
        className="flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-semibold text-ink shadow-soft transition hover:bg-background"
      >
        <Upload size={14} />
        Upload file
      </button>
    </>
  );
};

export default UploadButton;
