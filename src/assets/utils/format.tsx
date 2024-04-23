import React from "react";

export function convertStringToJSX(string: string): string {
  // Split the string into parts based on '[' and ']'
  const parts = string.split(/[[\]]/);

  // Initialize an array to store JSX elements
  const jsxElements = [];

  console.log(parts);

  // Iterate through the parts
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part.startsWith("http")) {
      jsxElements.push(part);
    } else {
      const [link, name] = part.split(/[()]/);

      // console.log(username, link);
      jsxElements.push(
        ` <a href=${link}>
          ${name}
        </a>`
      );
    }
  }

  // Return the array of JSX elements
  return jsxElements.join(" ");
}
