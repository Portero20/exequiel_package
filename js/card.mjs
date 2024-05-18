#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
    padding: 1,
    width: 70,
    title: "Exequiel Portero",
    titleAlignment: "center",
    borderStyle: "double",
    borderColor: "#ffb626",
};

const intro = chalk.bold("I'm Frontend Developer and Sofware Developer Technician.\n\nFind me on the internet:\n\n");

const links = [
    {
        name: chalk.hex("#fff").bgHex("195faa")("LinkedIn:"),
        url: "https://www.linkedin.com/in/exequiel-portero"
    },
    {
        name: chalk.hex("#fff").bgHex("#6e5494")("GitHub:"),
        url: "  https://github.com/Portero20",
    },
    {
        name: chalk.hex("#fff").bgHex("#ffcf40")("Card:"),
        url: "    npx porterocard",
    },
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList, boxenOptions));