export const detectLanguage = (code) => {
  const text = code.toLowerCase();

  // Java
  if (
    text.includes("public class") ||
    text.includes("system.out.println") ||
    text.includes("public static void main")
  ) {
    return "java";
  }

  // Python
  if (
    text.includes("def ") ||
    text.includes("import ") ||
    text.includes("print(")
  ) {
    return "python";
  }

  // JavaScript
  if (
    text.includes("console.log") ||
    text.includes("let ") ||
    text.includes("const ") ||
    text.includes("function ")
  ) {
    return "javascript";
  }

  // TypeScript
  if (
    text.includes("interface ") ||
    text.includes(": string") ||
    text.includes(": number")
  ) {
    return "typescript";
  }

  // C
  if (
    text.includes("#include<stdio.h>") ||
    text.includes("printf(")
  ) {
    return "c";
  }

  // C++
  if (
    text.includes("#include<iostream>") ||
    text.includes("cout <<")
  ) {
    return "cpp";
  }

  // C#
  if (
    text.includes("using system") ||
    text.includes("console.writeline")
  ) {
    return "csharp";
  }

  // Go
  if (
    text.includes("package main") &&
    text.includes("fmt.println")
  ) {
    return "go";
  }

  // Rust
  if (
    text.includes("fn main") ||
    text.includes("println!")
  ) {
    return "rust";
  }

  return "javascript";
};