import {Component, Inject, OnInit} from '@angular/core';
import {Sector} from '../../model/sector';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-sector-deletion-confirmation-dialog',
  templateUrl: './sector-deletion-confirmation-dialog.component.html',
  styleUrls: ['./sector-deletion-confirmation-dialog.component.css']
})
export class SectorDeletionConfirmationDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) data: {sector: Sector}
  ) {
    this.sector = data.sector;
  }

  sector: Sector;
  children: Sector[] = [];

  ngOnInit(): void {
    this.findChildren(this.sector.children, this.children);
  }

  private findChildren(sectors: Sector[], children: Sector[]) {
    for (const child of sectors) {
      if (child.children?.length > 0) {
        this.findChildren(child.children, children);
      } else {
        children.push(child);
      }
    }
  }

}
