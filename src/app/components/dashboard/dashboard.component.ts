import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/service/producto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  message: string = '';
  abc: any;
  public getproduct: any[] = [];

  constructor(
    private service: JwtService,

    private httpClient: HttpClient,
    private productService: ProductService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.hello();
    this.productService.getAllProduct().subscribe((data:any)=>{
      console.log(data)
      this.getproduct=data;
    })
  }

  goToProduct(pid:any){
    this.router.navigate(["detail/" + pid]);
  }


  hello() {
    this.service.hello().subscribe(
      (response) => {
        console.log(response);
        this.message = response.message;
      }
    );
  }
}
