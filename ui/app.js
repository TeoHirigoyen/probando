import { MDCList } from '@material/list';
import { MDCRipple } from '@material/ripple';

const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
const list = new MDCList(document.querySelector('.mdc-list'));
