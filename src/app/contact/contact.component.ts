import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  mailSent = false;

  async sendMail() {

    let nameField = this.nameField.nativeElement;   //***document.getElementById(''); */
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    //Animtion
    this.mailSent = true;
    setTimeout(() => {
      this.mailSent = false;

      nameField.value = '';
      emailField.value = '';
      messageField.value = '';
      
      nameField.disabled = false;
      emailField.disabled = false;
      messageField.disabled = false;
      sendButton.disabled = false;
    }, 4000);

    await fetch('https://steven-munk.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    )
  }
}
