const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");
const { flows } = require("./flows/flows");

const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");

/**
 * !Necesito capturar el evento cuando se conecte :)
 */


const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([...flows]);
  const adapterProvider = createProvider(BaileysProvider);
  
  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

};

main();

