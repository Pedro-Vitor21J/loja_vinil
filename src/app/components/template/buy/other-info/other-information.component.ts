import { Component, Input } from '@angular/core';
import { vinyl_other_info_mock } from '../../../../../mock/mocks';
import { vinyl_other_info } from '../../../model/vinyl-other-info';
import { vinyl } from '../../../model/vinyl';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-other-info',
  imports: [],
  templateUrl: './other-info.component.html',
  styleUrl: './other-info.component.css'
})
export class OtherInformationComponent {
  vinyl_other_info?:vinyl_other_info;

  constructor(private route: ActivatedRoute){}
  
  
    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      this.vinyl_other_info = vinyl_other_info_mock.find(v => v.id === id!)
    }
}
