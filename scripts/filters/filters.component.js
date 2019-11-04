import BaseComponent from '../shared/components/base.component.js';

class FiltersComponent extends BaseComponent {
  constructor ({ element }) {
    super({ element });
    this._render();

    this
      .on('input', '.search', ({ delegatedTarget: { value } }) => {
        this.emit('search', value);
      })
      .on('change', '.sort', ({ delegatedTarget: { value } }) => {
        this.emit('sort', value);
      });
  }

  _render () {
    this._element.innerHTML = `
    <p>
      Search:
      <input type="text" class="search">
    </p>

    <p>
      Sort by:
      <select class="sort">
        <option value="name">Alphabetical</option>
        <option value="age">Newest</option>
      </select>
    </p>
    `;
  }
}

export default FiltersComponent;
