import {
  CommandInteraction,
  Client,
  ApplicationCommandType
} from "discord.js";
import { Command } from "src/Command";

export const user: Command = {
  name: "user",
  description: "Returns info about the user",
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = `User name is ${interaction.user.username}`;
    await interaction.followUp({
      ephemeral: true,
      content
    });
  }
}