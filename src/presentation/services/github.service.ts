import { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";




export class GitHubService {

  constructor() {}

  onStar(payload: GitHubStarPayload): string {

    let message: string = '';

    const { action, sender, repository, starred_at} = payload;

    if (starred_at){
      message = `User ${ sender.login } ha dejado una estrella a ${repository.full_name} on ${starred_at}`
    } else {
      message = `User ${ sender.login } ha quitado una estrella a ${repository.full_name} on ${starred_at}`
    }

    return message;
  }

  onIssue(payload: GitHubIssuePayload): string {

    let message: string = '';

    const { action, issue } = payload;

    message = `User ${ issue.user.login } ha desencadenado ${ issue.title } --> ${ action }`

    return message;
  }


}