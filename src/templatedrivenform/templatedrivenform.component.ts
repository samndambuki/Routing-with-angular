import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent {
  loginUser(item:any){
    console.warn(item)
  }
}
