import React from "react";

export function convertStringToJSX(string: string): string {
  // Split the string into parts based on '[' and ']'
  const parts = string.split(/[[\]]/);

  // Initialize an array to store JSX elements
  const jsxElements = [];

  // Iterate through the parts
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part.startsWith("http")) {
      jsxElements.push(part);
    } else {
      const [link, name] = part.split(/[()]/);

      jsxElements.push(
        ` <a href=${link} aria-label="Link to ${name}">
          ${name}
        </a>`
      );
    }
  }

  // Return the array of JSX elements
  return jsxElements.join(" ");
}
