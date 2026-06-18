import search from "@inquirer/search";
import input from "@inquirer/input";
import chalk from "chalk";

// Choice names carry chalk color codes; strip ANSI before matching on input.
const stripAnsi = s => String(s).replace(/\u001b\[[0-9;]*m/g, "");

const promptQuestion = async (extended = {}, message = "name it:", context) => {
  if (extended.message) {
    message = extended.message;
  }
  const styled = chalk.green.bold.underline(message);
  const { type } = extended;

  // Autocomplete / select-style picker -> @inquirer/search (type-to-filter list).
  if (type === "autocomplete" || type === "list" || type === "select") {
    const choices = (extended.choices || []).map(c => ({
      name: c.name ?? c.message,
      value: c.value
    }));
    const pageSize = extended.pageSize || extended.limit;
    return search(
      {
        message: styled,
        ...(pageSize ? { pageSize } : {}),
        source: term => {
          if (!term) return choices;
          const q = stripAnsi(term).toLowerCase();
          return choices.filter(c => stripAnsi(c.name).toLowerCase().includes(q));
        }
      },
      context
    );
  }

  // Free-text entry (e.g. custom path) -> @inquirer/input.
  return input({ message: styled }, context);
};

export default promptQuestion;
