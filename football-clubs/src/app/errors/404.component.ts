import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'page-error',
    template: `
        <h1>404</h1>
    `
})

export class ErrorComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}