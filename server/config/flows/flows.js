const { addKeyword } = require("@bot-whatsapp/bot");
const { mi_once, xiaomi_doce, Poco_xcinco , realme9Proplus, realmeGT2Pro, realme9i} = require("../img/url");

const flowSaludar = addKeyword([
  "Hola",
  "Información",
  "Buenos dias",
  "que tal",
]).addAnswer(
  "¡Hola! ¿Que tal? Somos Fazt Phone, una empresa que busca \ndar el mejor celular a menor precio 📱✨. \nContamos con las mejores marcas: Xiaomi, Realme\nLista: \n.1️⃣ Xiaomi (Escribe 'Celulares Xiaomi' si quuieres verlo) \n2️⃣ Realme (Escribe 'Celulares Realme' si quieres verlo)"
);

//? Flujo de Xiaomi

const flowListaXiaomi = addKeyword(["Celulares xiaomi"]).addAnswer(
  `Tenemos tres celulares disponibles
   1️⃣ Mi 11 Lite 5G NE 📱✨
   2️⃣ Xiaomi 12 📱✨
   3️⃣ Poco X5 XG 📱✨`
);

const flowMi11lite5G = addKeyword([
  "Mi 11 lite 5g NE",
  "Mi 11 lite",
  "Mi 11",
]).addAnswer(
  'Mi 11 lite 5g NE \nEspecificaciones: \nRAM: 8GB \nROM: 128GB \nProcesador: Snapdragon 778 \nPantalla: AMOLED FHD+ 6.5"\nBateria: 4250 mAh \n Precio: 1349.00 soles\n¿Quieres comprarlo? (Si / No)',
  {
    capture: true,
    media: mi_once,
  },
  async (ctx, { flowDynamic, endFlow }) => {
    if (ctx.body.toLowerCase() === "si") {
      return endFlow("Se registro su registro de atención.");
    } else if (ctx.body.toLowerCase() === "no") {
      return endFlow(
   `Tenemos tres celulares disponibles
   1) Mi 11 Lite 5G NE 📱✨
   2) Xiaomi 12 📱✨
   3) Poco X5 5G 📱✨`
      );
    }
  }
);

const flowXiaomi12 = addKeyword(["Xiaomi 12"]).addAnswer(
  'Xiaomi 12 \nEspecificaciones: \nRAM: 8GB \nROM: 128GB \nProcesador: Snapdragon 8 Gen. 1 \nPantalla: AMOLED FHD+ 6.28"\nBateria: 4500 mAh\nPrecio: 2199.00 soles \n¿Quieres comprarlo? (Si / No)',
  {
    capture: true,
    media: xiaomi_doce,
  },
  async (ctx, { flowDynamic, endFlow }) => {
    if (ctx.body.toLowerCase() === "si") {
      return endFlow("Se registro su registro de atención.");
    } else if (ctx.body.toLowerCase() === "no") {
      return endFlow(
        `Tenemos tres celulares disponibles \n1) Mi 11 Lite 5G NE 📱✨ \n2) Xiaomi 12 📱✨ \n3) Poco X5 XG 📱✨`
      );
    }
  }
);

const flowPocoX5 = addKeyword(["Poco x5", "Poco x5 5G"]).addAnswer(
    'Poco x5 5G\nEspecificaciones: \nRAM: 6GB \nROM: 128GB \nProcesador: Snapdragon 778 \nPantalla: AMOLED FHD+ 6.67"\nBateria: 5000 mAh\nPrecio: 1199.00 soles \n¿Quieres comprarlo? (Si / No)',
    {
      capture: true,
      media: Poco_xcinco,
    },
    async (ctx, { flowDynamic, endFlow }) => {
      if (ctx.body.toLowerCase() === "si") {
        return endFlow("Se registro su registro de atención.");
      } else if (ctx.body.toLowerCase() === "no") {
        return endFlow(
          `Tenemos tres celulares disponibles \n1) Mi 11 Lite 5G NE 📱✨ \n2) Xiaomi 12 📱✨ \n3) Poco X5 XG 📱✨`
        );
      }
    }
  );


//? Flujo de Realme

const flowListaRealme = addKeyword(["Celulares Realme"]).addAnswer("Tenemos tres celulares disponibles \n3️1️⃣Realme 9 Pro+ \n2️⃣Realme GT 2 Pro \n3️⃣Realme 9i")


const flowRealme9 = addKeyword(["Realme 9 Pro+", "Realme 9"]).addAnswer(
    'Realme 9 Pro+\nEspecificaciones: \nRAM: 6GB \nROM: 128GB \nProcesador: Mediatek Dimensity 920 \nPantalla:Super AMOLED FHD+ 6.4"\nBateria: 4500 mAh\nPrecio: 1999.00 soles \n¿Quieres comprarlo? (Si / No)',
    {
      capture: true,
      media: realme9Proplus,
    },
    async (ctx, { flowDynamic, endFlow }) => {
      if (ctx.body.toLowerCase() === "si") {
        return endFlow("Se registro su registro de atención.");
      } else if (ctx.body.toLowerCase() === "no") {
        return endFlow(
          `Tenemos tres celulares disponibles \n3️1️⃣Realme 9 Pro+ \n2️⃣`
        );
      }
    }
  );

const flowRealmeGT = addKeyword(["Realme GT", "Realme GT 2 Pro"]).addAnswer(
    'Realme GT 2 Pro\nEspecificaciones: \nRAM: 6GB \nROM: 128GB \nProcesador: Snapdragon 8 Gen 1\nPantalla: AMOLED FHD+ 6.7"\nBateria: 5000 mAh\nPrecio: 2815.00 soles \n¿Quieres comprarlo? (Si / No)',
    {
      capture: true,
      media: realmeGT2Pro,
    },
    async (ctx, { flowDynamic, endFlow }) => {
      if (ctx.body.toLowerCase() === "si") {
        return endFlow("Se registro su registro de atención.");
      } else if (ctx.body.toLowerCase() === "no") {
        return endFlow(
          `Tenemos tres celulares disponibles \n3️1️⃣Realme 9 Pro+ \n2️⃣`
        );
      }
    }
  );
const flowRealme9i = addKeyword(["Realme 9i"]).addAnswer(
    'Realme 9i \nEspecificaciones: \nRAM: 4GB \nROM: 64GB \nProcesador: Snapdragon 680\nPantalla: LCD IPS FHD+ 6.6"\nBateria: 5000 mAh\nPrecio: 819.00 soles \n¿Quieres comprarlo? (Si / No)',
    {
      capture: true,
      media: realme9i,
    },
    async (ctx, { flowDynamic, endFlow }) => {
      if (ctx.body.toLowerCase() === "si") {
        return endFlow("Se registro su registro de atención.");
      } else if (ctx.body.toLowerCase() === "no") {
        return endFlow(
          `Tenemos tres celulares disponibles \n3️1️⃣Realme 9 Pro+ \n2️⃣`
        );
      }
    }
  );

module.exports = {
  flows: [flowSaludar, flowListaXiaomi, flowMi11lite5G, flowXiaomi12, flowPocoX5, flowListaRealme, flowRealme9, flowRealmeGT, flowRealme9i],
};
