import {BehaviorSubject, distinctUntilChanged, Observable, pluck} from "rxjs";
import {State} from "./state";

const state: State = {
  playlist: undefined
}

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    // @ts-ignore
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({
      ...this.value, [name]: state
    })
  }


}

