import { outputDiv } from "./ui";
import aboutData from "../data/about.json";
import contactData from "../data/contact.json";
import projectsData from "../data/projects.json";
import skillsData from "../data/skills.json";
import experienceData from "../data/experience.json";

interface CommandFunction {
  (): string | HTMLElement;
}

interface Commands {
  [key: string]: CommandFunction;
}

export const commands: Commands = {
  help: (): string => {
    return `<p>Available commands:</p>
            <ul>
                <li><span class="command">about</span>: Learn more about me.</li>
                <li><span class="command">projects</span>: View my projects.</li>
                <li><span class="command">skills</span>: See my technical skills.</li>
                <li><span class="command">contact</span>: Get in touch with me.</li>
                <li><span class="command">clear</span>: Clear the terminal.</li>
            </ul>`;
  },
  about: (): string => {
    return `<p class="typing-result">${aboutData.description}</p>`;
  },
  projects: (): string => {
    if (!projectsData || projectsData.length === 0) {
      return `<p>No projects to display yet.</p>`;
    }
    let projectsList = `<p>Here are some of ${aboutData.name}'s featured projects:</p>
                            <ul>`;
    projectsData.forEach((project) => {
      const links = [];
      if (project.github) {
        links.push(
          `<a href="${project.github}" target="_blank">GitHub</a>`
        );
      }
      projectsList += `<li><span class="command">${
        project.name
      }</span>: ${links.join(" | ")}</li>`;
    });
    projectsList += `</ul>`;
    return projectsList;
  },
  skills: (): string => {
    let skillsText = `<p>My key skills include:</p>
                          <ul class="typing-result">`;
    if (skillsData.languages && skillsData.languages.length > 0) {
      skillsText += `<li>Programming Languages: <span class="command">${skillsData.languages.join(
        ", "
      )}</span></li>`;
    }
    if (skillsData.frameworks && skillsData.frameworks.length > 0) {
      skillsText += `<li>Frameworks/Libraries: <span class="command">${skillsData.frameworks.join(
        ", "
      )}</span></li>`;
    }
    if (skillsData.databases && skillsData.databases.length > 0) {
      skillsText += `<li>Databases: <span class="command">${skillsData.databases.join(
        ", "
      )}</span></li>`;
    }
    if (skillsData.cloud && skillsData.cloud.length > 0) {
      skillsText += `<li>Cloud Technologies: <span class="command">${skillsData.cloud.join(
        ", "
      )}</span></li>`;
    }
    if (skillsData.other && skillsData.other.length > 0) {
      skillsText += `<li>Other: <span class="command">${skillsData.other.join(
        ", "
      )}</span></li>`;
    }
    skillsText += `</ul>`;
    return skillsText;
  },
  contact: (): string => {
    return `<p>You can reach me at:</p>
                <ul class="typing-result">
                    <li>Email: <span class="command">${contactData.email}</span></li>
                    <li>LinkedIn: <a href="${contactData.linkedin}">${contactData.linkedin}</a></li>
                    <li>GitHub: <a href="${contactData.github}">${contactData.github}</a></li>
                </ul>`;
  },
  experience: (): string => {
    if (!experienceData || experienceData.length === 0) {
      return `<p>No experience information available.</p>`;
    }
    let experienceList = `<p>My work experience:</p><ul>`;
    experienceData.forEach((exp) => {
      experienceList += `<li><span class="command">${exp.title}</span> at ${exp.company} (${exp.years}): ${exp.description}</li>`;
    });
    experienceList += `</ul>`;
    return experienceList;
  },
  clear: (): string => {
    outputDiv.innerHTML = "";
    return "";
  },
  "": (): string => {
    return "";
  },
};
