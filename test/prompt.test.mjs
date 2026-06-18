// Functional tests for the prompt adapter (src/prompt.mjs) driven through the
// official @inquirer/testing harness — no real TTY, deterministic, offline.
import assert from "node:assert/strict";
import { render } from "@inquirer/testing";
import promptQuestion from "../src/prompt.js";

const flush = () => new Promise(r => setTimeout(r, 20));

// render() invokes the view as view(props, context); forward context so the
// mock streams reach the underlying inquirer prompt.
const view = (props, context) => promptQuestion(props, undefined, context);

let passed = 0;
const ok = name => {
  passed++;
  console.log(`  [ok] ${name}`);
};

// 1. Autocomplete: typing filters, Enter selects the highlighted match's value.
{
  const choices = [
    { name: "apple", value: "A" },
    { name: "banana", value: "B" },
    { name: "cherry", value: "C" }
  ];
  const { answer, events } = await render(view, { type: "autocomplete", choices });
  await flush();
  events.type("ban");
  await flush();
  events.keypress("enter");
  assert.equal(await answer, "B", "filtered selection should return banana's value");
  ok("autocomplete filters by typed text and returns the choice value");
}

// 2. Autocomplete with no filter: Enter selects the first choice.
{
  const choices = [
    { name: "first", value: "1" },
    { name: "second", value: "2" }
  ];
  const { answer, events } = await render(view, { type: "autocomplete", choices });
  await flush();
  events.keypress("enter");
  assert.equal(await answer, "1", "empty filter should select the first choice");
  ok("autocomplete with no input returns the first choice value");
}

// 3. Enquirer-style choices ({ message } instead of { name }) are mapped.
{
  const choices = [
    { message: "alpha", value: "x" },
    { message: "beta", value: "y" }
  ];
  const { answer, events } = await render(view, { type: "select", choices });
  await flush();
  events.type("bet");
  await flush();
  events.keypress("enter");
  assert.equal(await answer, "y", "message-shaped choices should still resolve their value");
  ok("select maps enquirer-style { message } choices");
}

// 4. Free-text input returns the typed string.
{
  const { answer, events } = await render(view, { type: "input" });
  await flush();
  events.type("/custom/path");
  events.keypress("enter");
  assert.equal(await answer, "/custom/path", "input should return the typed text");
  ok("input returns free-text entry");
}

console.log(`\nprompt adapter: ${passed}/4 passed`);
