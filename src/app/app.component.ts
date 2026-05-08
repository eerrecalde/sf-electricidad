import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sf-electricidad';

  services = [
    {
      icon: '01',
      title: 'Residencial',
      description: 'Instalación de lámparas, reparación de cortocircuitos, cambio de tableros eléctricos y cableado general.',
    },
    {
      icon: '02',
      title: 'Comercial / Industrial',
      description: 'Mantenimiento preventivo, instalaciones trifásicas y redes de alta demanda.',
    },
    {
      icon: '03',
      title: 'Planos eléctricos',
      description: 'Diseño de instalaciones para obras nuevas, relevamiento y actualización de planos.',
    },
    {
      icon: '04',
      title: 'Emergencias',
      description: 'Disponibilidad para reparaciones urgentes por cortes, fallas o problemas eléctricos.',
    },
  ];

  safetyPoints = [
    'Diseño de instalaciones para obras nuevas.',
    'Relevamiento de instalaciones existentes.',
    'Actualización de planos eléctricos.',
    'Redes trifásicas y de alta demanda.',
  ];

  areas = [
    'Hogares',
    'Comercios',
    'Industrias',
    'Obras nuevas',
    'Mantenimiento preventivo',
    'Reparaciones urgentes',
  ];
}
