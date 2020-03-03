#!/usr/bin/env node
const { prompt } = require("enquirer");
const chalk = require("chalk");

const promptQuestion = async (extended = {}, message = `name it:`) => {
    if (extended.type === "list") {
        extended.type = "select";
    }
    if (extended.message) {
        message = extended.message;
    }
    if (extended.choices && extended.choices[0].value) {
        extended.choices = extended.choices.map(e => {
            return { message: e.name, value: e.value };
        });
    }
    if (extended.pageSize) {
        extended.limit = extended.pageSize;
    }
    const { answer } = await prompt({
        type: "input",
        message: `${chalk.green.bold.underline(message)}`,
        name: `answer`,
        ...extended
    });
    return answer;
};

module.exports = promptQuestion;
