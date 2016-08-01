import 'reflect-metadata';
import 'zone.js';
import { Foo } from '../index.ts';
import * as test from 'tape';

test("mobx with reflect-metadata", t => {
    t.plan(1);

    let f = new Foo();

    t.equals(f.bar, true);
});
