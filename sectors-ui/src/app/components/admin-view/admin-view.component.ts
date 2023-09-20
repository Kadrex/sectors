import { Component, OnInit } from '@angular/core';
import {SectorsService} from '../../service/sectors.service';
import {Sector} from '../../model/sector';
import {MatDialog} from '@angular/material/dialog';
import {SectorEditDialogComponent} from '../sector-edit-dialog/sector-edit-dialog.component';
import {
  SectorDeletionConfirmationDialogComponent
} from '../sector-deletion-confirmation-dialog/sector-deletion-confirmation-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  sectors: Sector[] = [];
  loading: boolean = true;

  displayedColumns: string[] = ['no',  'name', 'isParent','actions'];

  constructor(
    private sectorsService: SectorsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getSectors();
  }

  get isViewReady() {
    return !this.loading;
  }

  private getSectors() {
    this.sectorsService.getAllSectors().subscribe(sectors => {
      this.sectors = sectors
      this.loading = false;
    }, error => {
      this.loading = false;
      this.snackBar.open('Failed fetching sectors, please try again.', 'OK')
    });
  }

  async editClicked(sector: Sector) {
    const dialogConfig = this.constructDialogConfig(sector);
    const dialogResult: Sector = await this.dialog.open(SectorEditDialogComponent, dialogConfig).afterClosed().toPromise();
    if (!dialogResult) return;
    this.loading = true;
    this.sectorsService.save(dialogResult).subscribe(() => {
      this.getSectors();
      this.showSnackbar('Sector successfully updated!');
    }, error => {
      this.showSnackbar('Updating sector failed: ' + error);
    });
  }

  async deleteClicked(sector: Sector) {
    if (sector.children.length > 0) {
      const dialogConfig = {
        minWidth: '530px',
        maxWidth: '80%',
        minHeight: '200px',
        maxHeight: '500px',
        data: {
          sector
        }
      }
      const remove: boolean = await this.dialog.open(SectorDeletionConfirmationDialogComponent, dialogConfig).afterClosed().toPromise();
      if (!remove) {
        return;
      }
    }

    this.loading = true;
    this.sectorsService.delete(sector).subscribe(() => {
      this.getSectors();
      this.showSnackbar('Sector successfully deleted!');
    }, error => {
      this.loading = false;
      this.showSnackbar('Deleting sector failed: ' + error);
    });
  }

  async addNewClicked() {
    const dialogConfig = this.constructDialogConfig(null);
    const dialogResult: Sector = await this.dialog.open(SectorEditDialogComponent, dialogConfig).afterClosed().toPromise();
    if (!dialogResult) return;
    this.loading = true;
    this.sectorsService.save(dialogResult).subscribe(() => {
      this.getSectors();
      this.showSnackbar('Sector successfully added!');
    }, error => {
      this.showSnackbar('Adding sector failed: ' + error);
    });
  }

  private constructDialogConfig(sector: Sector | null) {
    return {
      width: '530px',
      minHeight: '320px',
      maxHeight: '500px',
      data: {
        sector,
        sectors: this.sectors
      }
    }
  }

  private showSnackbar(message: string) {
    this.snackBar.open(message, 'OK', {duration: 2000});
  }

}
