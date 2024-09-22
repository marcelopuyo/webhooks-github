import { envs } from "../../config";


export class DiscordService {

  private readonly dicordWebhookUrl: string = envs.DISCORD_WEBHOOK_URL

  constructor() {}

  async notify(message: string) {

    const body = {
      content: message,
      // embeds: [
      //   {
      //     image: {url: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmtvcHBxeWpnYnNhMXE2YmF4aXJkdWx5MjU5azF4MjY1MHBibHJjaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dxn6fRlTIShoeBr69N/giphy.gif'}
      //   }
      // ]
    }

    const resp = await fetch(this.dicordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    });

    if (!resp.ok) {
      console.log('Error enviando mensaje a discord');
      return false;
    } else {
      return true;
    }
  }







}
