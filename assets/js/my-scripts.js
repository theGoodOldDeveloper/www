console.log("Hello World! From My Scripts");
/* const questions = document.getElementById("mySend").click(() => {
  console.log("Hello World! From My Scripts button click 😁");
});
questions; */
document.getElementById("mySend").addEventListener("click", () => {
  console.log("Hello World! From My Scripts button click 😁");
  (async () => {
    const gptResponse = await openai.complete({
      engine: "davinci",
      prompt: "What day is today?",
      maxTokens: 5,
      temperature: 0.9,
      topP: 1,
      presencePenalty: 0,
      frequencyPenalty: 0,
      bestOf: 1,
      n: 1,
      stream: false,
      stop: ["\n", "testing"],
    });

    console.log(gptResponse.data);
  })();
});

/* const gptResponse = await openai.complete({
      engine: "davinci",
      prompt: "What day is today?",
      maxTokens: 5,
      temperature: 0.9,
      topP: 1,
      presencePenalty: 0,
      frequencyPenalty: 0,
      bestOf: 1,
      n: 1,
      stream: false,
      stop: ["\n", "testing"],
    }); */
