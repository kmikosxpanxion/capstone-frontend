import { Component, OnInit, OnDestroy } from '@angular/core';
import { Alias } from './alias';
import { AliasSearch } from './alias-search';
import { Subscription } from 'rxjs';
import { AliasService } from './alias.service';

@Component({
  selector: 'app-alias',
  templateUrl: './alias.component.html',
  styleUrls: ['./alias.component.css']
})
export class AliasComponent implements OnInit, OnDestroy {

  sub!: Subscription;

  aliasSearchInput!: string;
  reportSearchInput!: string;
  aliasSearches: AliasSearch[] = [];

  constructor(private aliasService: AliasService) { }

  ngOnInit(): void {
   
    }

  onClickSearchByAlias(text: string){
    this.aliasSearchInput = text;
    this.sub = this.aliasService.getAliasesByAlias(this.aliasSearchInput).subscribe({
      next: aliasSearches => {
        this.aliasSearches = aliasSearches;
      },
  })
  }

  onClickSearchByReportName(text: string){
    this.reportSearchInput = text;
    this.sub = this.aliasService.getAliasesByReportName(this.reportSearchInput).subscribe({
      next: aliasSearches => {
        this.aliasSearches = aliasSearches;
      },
  })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

