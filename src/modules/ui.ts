export const commandInput = document.getElementById(
  "commandInput"
) as HTMLInputElement;
export const outputDiv = document.getElementById("output") as HTMLDivElement;

commandInput.addEventListener("blur", () => {
  commandInput.focus();
});

commandInput.focus();
