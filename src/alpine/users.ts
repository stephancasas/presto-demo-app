import Spruce from '@ryangjchandler/spruce';

/**
 * Delay a synchronous operation via Promise resolution.
 * @param ms Time to delay in milliseconds
 */
function sleeper(ms: number) {
  return function (x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

// initialize selected user as wildcard proxy to suppress Alpine warnings
const userProxy = new Proxy(
  {},
  {
    get(target, name) {
      return '';
    }
  }
);

function fetchUsers() {
  fetch(Spruce.store('root').api).then((data) =>
    data
      .json()
      .then((data) => {
        data.forEach((d) => {
          // create fake array of logins for user record
          Object.defineProperty(d, 'logins', {
            get() {
              return d.company.catchPhrase
                .replace(/\s/g, '')
                .split('')
                .map((ch) => {
                  return ch.charCodeAt(0);
                });
            }
          });
        });
        this.users = data;
      })
      .then(() => {
        this.select(this.users[0]);
      })
  );
}

function searchResults() {
  if (!this.search.length) return this.users;
  const input = this.search.toLowerCase();
  const terms = input.split(' ');

  return this.users.filter((user) => {
    return terms.some((term) => user.name.toLowerCase().includes(term));
  });
}

function select(user) {
  this.selected = userProxy;
  this.loading = true;
  // simulate a delay while the user "loads"
  fetch(Spruce.store('root').api)
    .then(sleeper(1000))
    .then(() => {
      this.loading = false;
      this.selected = user;
    });
}

function dropSelectedUser() {
  this.droppingUser = true;
  // simulate a delay while the user "deletes"
  fetch(Spruce.store('root').api)
    .then(sleeper(2000))
    .then(() => {
      // get index and drop user from array
      const index = this.users.findIndex((u) => u.id === this.selected.id);
      this.users.splice(index, 1);
      // fill display with next user
      this.select(this.users[0]);
      // remove "loading" state from dropping action and kill modal
      this.droppingUser = false;
      Spruce.store('root').modal = '';
    });
}

const Users = {
  users: [],
  fetchUsers,
  searchResults,
  search: '',
  selected: userProxy,
  loading: false,
  select,
  droppingUser: false,
  dropSelectedUser
};

export default Users;