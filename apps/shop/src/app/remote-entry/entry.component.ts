import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacksComponent } from '../components/packs/packs.component';

@Component({
  imports: [CommonModule, PacksComponent, PacksComponent],
  selector: 'app-shop-entry',
  template: `<app-packs />`,
})
export class RemoteEntryComponent {}
