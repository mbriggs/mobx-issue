///<reference path="./typings/index.d.ts"/>

import { observable } from 'mobx';

export class Foo {
    @observable
    bar: boolean = true;
}
