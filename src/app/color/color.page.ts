import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from '../model/colors.model';
import { ColorsService } from '../services/colors.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage implements OnInit {
color:Color;
  constructor(private route: ActivatedRoute, private colorService: ColorsService) {
    this.route.params.subscribe(parameters=>{
      if(parameters.id){
        this.colorService.getSingleColor(parameters.id).subscribe(res =>{
          this.color=res.data;

        });

      }

    });
   }

  ngOnInit() {
  }

}
