import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HUNTER_PACKS } from '../../datas/packs';

@Component({
  selector: 'app-packs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packs.component.html',
  styleUrl: './packs.component.scss',
})
export class PacksComponent implements OnInit {
  hunterPacks = HUNTER_PACKS;

  ngOnInit(): void {
    for (const pack of this.hunterPacks) {
      pack.link =
        pack.link +
        '?text=Bonjour, je suis intéressé par le pack ' +
        pack.name +
        ' au prix de ' +
        pack.price +
        ' FCFA' +
        '. Merci de me fournir plus de détails. Je viens depuis le site du DevFest Douala.';
    }
  }
}
