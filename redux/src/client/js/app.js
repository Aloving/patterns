import {createElement} from './helpers';
import {store} from './store';
import {filterUsers, filteredUsers, fetchUsers} from './actions/users';
import {debounce} from './helpers';

const search = document.querySelector('.search');
const userContainer = document.querySelector('.user-container');
const counter = document.querySelector('.counter');
const loader = document.querySelector('.my-loader');
const errorBlock = document.querySelector('.error-block');
const tryAgain = document.querySelector('.try-again');
const notFound = document.querySelector('.not-found');

const userElements = [];

/**
 * Отображение или скрытие элемента по условию
 * @param {Element} element Элемент 
 * @param {boolean} condition Условие
 */
function visabilityToggler(element, condition) {
  if (condition) {
    element.classList.remove('display_none');
    return;
  }

  element.classList.add('display_none');
}

/**
 * Отображение или скрытие лоадера
 * @param {boolean} condition Условие
 */
function toggleLoader(condition) {
  visabilityToggler(loader, condition);
}

/**
 * Отображение или скрытие блока "Не найдено"
 * @param {boolean} condition Условие
 */
function toggleNotFound(condition) {
  visabilityToggler(notFound, condition);
}

/**
 * Отображение или скрытие блока ошибки
 * @param {boolean} condition Условие
 */
function toggleError(condition) {
  visabilityToggler(errorBlock, condition);
}

/**
 * Управление дизейблом поиска
 * @param {boolean} condition Условие
 */
function toggleSearch(condition) {
  search.disabled = !condition;
}

/**
 * 
 * @param {object} param Входные данные
 * @param {boolean} param.notFound Состояние блока notFound
 * @param {boolean} param.error Состояние блока ошибки
 * @param {boolean} param.loader Состояние лоадера
 */
function toggleStates({notFound, error, loader, search}) {
  toggleError(error);
  toggleNotFound(notFound);
  toggleLoader(loader);
  toggleSearch(search)
}

/**
 * Делает на основе массива с пользователями DOM список
 * @param {users} Массив с пользователями
 */
function createUserList(users) {
  userContainer.innerHTML = '';

  const fragment = document.createDocumentFragment();
  users.forEach((user) => {
    const avatarImage = createElement('img', {
      src: user.img,
    });

    const nameTag = createElement('p', {}, user.name);

    const avatarElement = createElement(
      'div',
      {
        className: 'avatar',
      },
      avatarImage,
    );

    const userElement = createElement(
      'div',
      {
        className: 'panel-block',
        id: user.id,
      },
      avatarElement,
      nameTag,
    );

    fragment.appendChild(userElement);
  });
  userContainer.appendChild(fragment);
}

function initListeners() {
  const onSearch = debounce(({target:{value}}) => {
    store.dispatch(filterUsers(store.getState().users.all, value));
    store.dispatch(filteredUsers(store.getState().users.filtered));
  }, 250)

  tryAgain.addEventListener('click', () => {
    store.dispatch(fetchUsers());
  });
  
  search.addEventListener('keydown', onSearch);
}

initListeners();

function render({users: {filtered}, ui}) {
  createUserList(filtered);
  toggleStates(ui);
}

export const app = {
    render
}
