#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

import boxen from "boxen";
import chalk from "chalk";
import { ABOUT } from "./utilities/about.mjs";

const boxenOptions = {
    padding: 1,
    width: 70,
    title: "Exequiel Portero / @Portero_DEV",
    titleAlignment: "center",
    borderStyle: "double",
    borderColor: "#ffb626",
};

const intro = chalk.bold("I'm Frontend Developer and Sofware Developer Technician.\n\nFollow me in:\n\n");

const links = [
    {
        name: chalk.hex("#fff").bgHex("195faa")("LinkedIn:"),
        url: "https://www.linkedin.com/in/exequiel-portero"
    },
    {
        name: chalk.hex("#fff").bgHex("#FF0000")("Youtube:"),
        url: " https://www.youtube.com/@PorteroDEV_"
    },
    {
        name: chalk.hex("#fff").bgHex("#6e5494")("GitHub:"),
        url: "  https://github.com/Portero20",
    },
    {
        name: chalk.hex("#fff").bgHex("#ffcf40")("Card:"),
        url: "   `npx` porterocard",
    },
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList + ABOUT.description, boxenOptions));