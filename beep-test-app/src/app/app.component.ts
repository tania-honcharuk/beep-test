import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fullList = [
    {
      name: 'Nissan',
      count: 153,
      models: [
        {
          name: 'Rogue',
          count: 45,
        },
        {
          name: 'Altima',
          count: 33,
        },
        {
          name: 'Sentra',
          count: 21,
        },
        {
          name: 'Rogue Sport',
          count: 18,
        },
        {
          name: 'Murano',
          count: 9,
        },
        {
          name: 'Maxima',
          count: 8,
        },
        {
          name: 'Versa',
          count: 8,
        },
        {
          name: 'Kicks',
          count: 6,
        },
        {
          name: 'Pathfinder',
          count: 5,
        },
      ],
    },
    {
      name: 'Volvo',
      count: 1,
      models: [
        {
          name: 'S60 Inscription',
          count: 1,
        },
      ],
    },
  ];

  filteredList = [
    {
      name: 'Nissan',
      models: [
        {
          name: 'Rogue',
        },
        {
          name: 'Altima',
        },
        {
          name: 'Sentra',
        },
        {
          name: 'Rogue Sport',
        },
        {
          name: 'Murano',
        },
        {
          name: 'Maxima',
        },
        {
          name: 'Versa',
        },
        {
          name: 'Kicks',
        },
        {
          name: 'Pathfinder',
        },
      ],
    },
    {
      name: 'Volvo',
      models: [
        {
          name: 'S60 Inscription',
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void { }

  checkValue(event: any, main: string, data: { name: string }): void {
    const isChecked = event.target.checked;

    let arr = this.filteredList;

    let obj: any = {
      name: main,
      models: [],
    };

    obj.models = this.filteredList.filter((item) => item.name == main)[0].models;

    if (!isChecked) {
      let removeIndex = obj.models.findIndex((itm: any) => itm.name === data.name);
      if (removeIndex !== -1) obj.models.splice(removeIndex, 1);
    } else if (isChecked) {
      obj.models.push(data);
    }

    if (obj.models.length >= 0) {
      return console.log(arr);
    }
  }
}
