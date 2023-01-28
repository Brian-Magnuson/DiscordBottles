import { Command } from "./Command";
import { echo } from "./commands/echo";
import { hello } from "./commands/hello";
import { user } from "./commands/user";

export const Commands: Command[] = [hello, user, echo];