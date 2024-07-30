import { AnswerMessage } from '../types';
import { NICKNAMES } from '../constants';
import { hasInLine } from '../../utils';

export const jokesMessage: AnswerMessage = async (ctx) => {
  if (!ctx.text) return false;

  if (ctx.text.toLowerCase().indexOf('давай') >= 0) {
    await ctx.reply('Давай без давай');
    return true;
  }

  if (ctx.text.toLowerCase().indexOf('давайте') >= 0) {
    await ctx.reply('Давайте без давайте');
    return true;
  }

  if (ctx.text.toLowerCase().indexOf('давайте') >= 0) {
    await ctx.reply('Давайте без давайте');
    return true;
  }

  if (hasInLine(ctx.text.toLowerCase(), ['хаха', 'шутка', 'шучу'])) {
    await ctx.reply(`смешно - ps ${NICKNAMES.julia}`);
    return true;
  }

  if (ctx.text.indexOf('полако') >= 0) {
    await Promise.all([
      ctx.reply(`О, полако! Пора полежать`),
      ctx.replyWithSticker('CAACAgIAAxkBAAJqNGapQFnT2vE9JhvfCSHGiC9f2QPRAALUCAAC-gu2CH6Lt8yaNscnNQQ'),
    ]);
    return true;
  }

  return false;
};
