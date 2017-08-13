import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  username = "Mathieu";

  messageToSend = '';

  messages = [
    {
      name: "Mathieu",
      timestamp:"1374745445627",
      content: "Salut !"
    },
    {
      name: "Florian",
      timestamp:"1474745445627",
      content: "Salut !"
    }
  ]

  public saveMessage() {
    this.messages.push({
      name: this.username,
      timestamp: Date.now().toString(),
      content: "Hello"
    })
  }
}
