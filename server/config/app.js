const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");
const { flows } = require("./flows/flows");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");

const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([...flows]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

//   QRPortalWeb();
};

main();
