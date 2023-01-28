import {
  CommandInteraction,
  Client,
  ApplicationCommandType,
  ApplicationCommandOptionType
} from "discord.js";
import { Command } from "src/Command";

export const echo: Command = {
  name: "echo",
  description: "Echoes the provided input",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: "message",
      description: "The message",
      type: ApplicationCommandOptionType.String,
      required: true
    }
  ],
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = `${interaction.options.get('message')?.value}`;
    await interaction.followUp({
      ephemeral: true,
      content
    });
  }
}