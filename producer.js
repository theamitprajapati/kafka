const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  const producer = kafka.producer();

  console.log("Connecting Producer");
  await producer.connect();
  console.log("Producer Connected Successfully");

  rl.setPrompt("> ");
  rl.prompt();

  rl.on("line", async function (line) {
    rl.setPrompt("> ");
  rl.prompt();

    const [riderName, location] = line.split(" ");
    await producer.send({
      topic: "rider-updates",
      messages: [
        {
          partition: Math.floor(Math.random()*10) > 5 ? 0:1          ,
          key: "location-update",
          value: JSON.stringify({ message: line }),
        },
      ],
    });
    
  }).on("close", async () => {
    console.log("Close..........")
    await producer.disconnect();
  });
}

init();
