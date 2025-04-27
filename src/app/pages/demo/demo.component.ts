import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // This should only appear once
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-demo',
  standalone: true,  // This makes the component standalone
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  imports: [CommonModule, HttpClientModule]  // Add HttpClientModule here
})
export class DemoComponent {

  selectedFile: File | null = null;
  imageURL: string | null = null;
  uploadProgress = 0;
  fileName = '';
  prediction: any = null;
  error: boolean = false;
  serverError: boolean =  false;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.error = false;
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
      const reader = new FileReader();
      reader.onload = () => (this.imageURL = reader.result as string);
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      this.selectedFile = event.dataTransfer.files[0];
      this.fileName = this.selectedFile.name;
      const reader = new FileReader();
      reader.onload = () => (this.imageURL = reader.result as string);
      reader.readAsDataURL(this.selectedFile);
    }
  }

  
  // onPredict() {
  //   if (!this.selectedFile) return;

  //   const formData = new FormData();
  //   formData.append('image', this.selectedFile);

  //   this.http.post<any>('http://127.0.0.1:5000/predict', formData, {
  //     reportProgress: true,
  //     observe: 'events'
  //   }).subscribe(event => {
  //     if (event.type === HttpEventType.UploadProgress && event.total) {
  //       this.uploadProgress = Math.round((event.loaded / event.total) * 100);
  //     } else if (event.type === HttpEventType.Response) {
  //       this.prediction = {
  //         label: event.body.class,
  //         confidence: event.body.confidence 
  //       };
  //       this.uploadProgress = 100;
  //     }
  //   });
  // }

  onPredict() {
  
  if (!this.selectedFile){
    this.error = true;
    console.log(this.error);
    return;
  } 

  this.error = false;
  console.log(this.error);
  
  const formData = new FormData();
  formData.append('image', this.selectedFile);

  this.http.post<any>(`${environment.apiUrl}/predict`, formData, {
    // reportProgress: true,
    // observe: 'events'
  }).subscribe(data=>{
    console.log(data);
    this.prediction = {
      class: data.class,
      confidence: data.confidence
    };
  }, error=>{
      this.serverError = true;
  });
}


  reset() {
    this.selectedFile = null;
    this.imageURL = null;
    this.prediction = null;
    this.fileName = '';
    this.uploadProgress = 0;
    this.error = false;
    this.serverError =  false;
  }

  // mapLabel(labelIndex: number): string {
  //   const labels = ['Actinic Keratoses', 'Basal Cell Carcinoma', 'Benign Keratosis',
  //                   'Dermatofibroma', 'Melanoma', 'Nevus', 'Vascular Lesion'];
  //   return labels[labelIndex] || 'Unknown';
  // }

}
