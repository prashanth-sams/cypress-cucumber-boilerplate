import { WebClient, WebAPICallResult } from "@slack/web-api";

beforeEach(() => {
  cy.clearLocalStorage();
  cy.clearCookies();
});

afterEach(() => {
  cy.log("after each hook");
});

export function slackReport() {
  const web = new WebClient(process.env.SLACK_TOKEN);

  (async () => {
    // The result is cast to any
    const res = (await web.chat.postMessage({
      text: "Hello world",
      channel: "C012345",
    })) as any;

    // Properties of the result are not typed, but at least the typechecker doesn't label them as errors
    console.log(
      `A message was posed to conversation ${res.channel} with id ${res.ts} which contains the message ${res.message}`
    );
  })();
}
