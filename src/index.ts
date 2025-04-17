import { commands } from "./modules/commands";
const commandInput = document.getElementById(
  "commandInput"
) as HTMLInputElement;
const outputDiv = document.getElementById("output") as HTMLDivElement;
const terminalDiv = document.getElementById("terminal") as HTMLDivElement;

import "./assets/styles/terminal.scss";

commandInput.addEventListener("keydown", function (event: KeyboardEvent) {
  if (event.key === "Enter") {
    const command = this.value.trim();
    this.value = "";

    const output = document.createElement("p");
    output.innerHTML = `<span class="prompt">guest@alexportfolio:~$</span> <span style="color: #eee;">${command}</span>`;
    outputDiv.appendChild(output);

    if (commands.hasOwnProperty(command)) {
      const commandOutput = commands[command]();
      const response = document.createElement("div");
      response.classList.add("output", "typing");
      response.innerHTML =
        typeof commandOutput === "string"
          ? commandOutput
          : commandOutput.innerHTML;
      outputDiv.appendChild(response);
    } else {
      const notFound = document.createElement("p");
      notFound.classList.add("output", "typing");
      notFound.innerHTML = `<span style="color: #ff6b6b;">Command not found: ${command}.</span> Type <span style="color: #d19a66;">help</span> for available commands.`;
      outputDiv.appendChild(notFound);
    }

    outputDiv.scrollTop = outputDiv.scrollHeight;
    terminalDiv.scrollTop = terminalDiv.scrollHeight;
  }
});

commandInput.addEventListener("blur", () => {
  commandInput.focus();
});

commandInput.focus();
