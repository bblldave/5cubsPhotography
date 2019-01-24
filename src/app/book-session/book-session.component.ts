import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-session',
  templateUrl: './book-session.component.html',
  styleUrls: ['./book-session.component.scss']
})
export class BookSessionComponent implements OnInit {

  emailModel: any = {};
  constructor(private emailService: EmailService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.emailService.sendEmail(this.emailModel).subscribe((res) => {
      this.toastr.success('Your session was successfully Requested. Please allow 24 - 48 hours for a response.', 'Session Status');
    }, error => {
      this.toastr.error('An error occured while trying to request the session. Please try again later', 'Session Status');
    });
  }

}
