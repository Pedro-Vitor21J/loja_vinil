import { Component, Input } from '@angular/core';
import { vinyl } from '../../../model/vinyl';
import { vinyl_info_mock } from '../../../../../mock/mocks';
import { vinyl_info } from '../../../model/vinyl-info';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vinly-information',
  imports: [],
  templateUrl: './vinly-information.component.html',
  styleUrl: './vinly-information.component.css'
})
export class VinlyInformationComponent {
  vinyl_info?: vinyl_info;
  

  constructor(private route: ActivatedRoute){}


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.vinyl_info = vinyl_info_mock.find(v => v.id === id!)
  }
}
