import { Component, OnInit } from '@angular/core';
import { ChecklistService } from '../../services/checklist.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html'
})
export class ChecklistComponent implements OnInit {
  items: any[] = [];
  titulo = '';

  constructor(
    private checklist: ChecklistService,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.checklist.list().subscribe(res => this.items = res);
  }

  add() {
    this.checklist.create({ titulo: this.titulo }).subscribe(() => {
      this.titulo = '';
      this.load();
    });
  }

  toggle(item: any) {
    this.checklist.update(item.id, { concluido: !item.concluido })
      .subscribe(() => this.load());
  }

  remove(id: number) {
    this.checklist.remove(id).subscribe(() => this.load());
  }
}