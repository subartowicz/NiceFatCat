function copyCode() {
  const codeElement = document.getElementById('code');
  const code = codeElement.innerText;
  navigator.clipboard.writeText(code).then(() => {
    alert("Code copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy code: ", err);
  });
}
