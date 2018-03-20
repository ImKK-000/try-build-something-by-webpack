import * as $ from 'jquery';

export namespace Config {
  export function loader() {
    $(function () {
      console.log('load by module');
    });
  }
}
