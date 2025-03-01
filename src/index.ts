import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import { funcs } from './messages';

dotenv.config();
const { env } = process;

(() => {
  if (!env.TELEGRAM_TOKEN || !env.NODE_ENV) return;

  const bot = new Telegraf(env.TELEGRAM_TOKEN, {
    telegram: {
      apiMode: 'bot',
      testEnv: env.NODE_ENV === 'development',
    },
  });

  bot.on('message', async (ctx) => {
    for (let i = 0; i < funcs.length; i++) {
      if (await funcs[i](ctx)) return;
    }
  });

  bot.launch();
})();
