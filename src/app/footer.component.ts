import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
        <p>© 2016 Company, Inc.</p>
        <app-nav>
        <ul class="nav nav-pills pull-right">
            <li role="presentation" class="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">Notes</a></li>
            <li role="presentation"><a href="#">Add a note</a></li>
          
          </ul>
          </app-nav>
    </footer> 
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
