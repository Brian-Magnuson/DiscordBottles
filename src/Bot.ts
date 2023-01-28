import { Client, GatewayIntentBits } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
require('dotenv').config();

console.log("Bot is starting...");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

ready(client);
interactionCreate(client);
client.login(process.env.BOTTOKEN);

// console.log(client);

