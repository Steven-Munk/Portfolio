import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  async sendMail() {
    console.log('sending mail', this.myForm);

    let nameField = this.nameField.nativeElement;   //***document.getElementById(''); */
    let messageField = this.nameField.nativeElement;
    let sendButton = this.nameField.nativeElement;

    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

   //Animation anzeigen

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);

    //senden

    await fetch('https://steven-munk.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    )

    // Text anzeigen: Nachricht gesendet
    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;


  }
}
