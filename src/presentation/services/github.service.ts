import { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";




export class GitHubService {

  constructor() {}

  onStar(payload: GitHubStarPayload): string {

    let message: string = '';

    const { sender, repository, starred_at} = payload;

    if (starred_at){
      message = `Usuario: ${ sender.login } ha dejado una estrella al repositorio: ${repository.name} el ${starred_at}`
    } else {
      message = `Usuario: ${ sender.login } ha quitado una estrella al repositorio: ${repository.name}`
    }

    return message;
  }

  onIssue(payload: GitHubIssuePayload): string {

    let message: string = '';

    const { action, issue } = payload;

    message = `Usuario: ${ issue.user.login } ha desencadenado ${ action } en issue ${ issue.title }`

    return message;
  }


}