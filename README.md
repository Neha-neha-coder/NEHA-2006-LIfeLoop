# LifeLoop

LifeLoop is a responsive frontend prototype that helps users decide what to do with items they already own: keep, repair, reuse, resell, donate, or recycle.

## Structure

- `index.html` - authenticated main application/landing experience
- `login.html` - frontend login flow
- `css/style.css` - main UI styles
- `css/login.css` - login page styles
- `css/responsive.css` - responsive navigation/layout adjustments
- `js/script.js` - main page interactions, scanner, account menu, theme, navigation
- `js/login.js` - login validation and demo sign-in flow
- `js/auth.js` - shared session helpers for future backend integration
- `assets/` - reserved for local images/icons

## Run locally

Open `login.html` in a browser. The login is intentionally a frontend demo: it stores only the user's name and email in `localStorage` or `sessionStorage`. It does not authenticate against a server and must not be treated as secure authentication.

After signing in, the main page personalizes the greeting and account area. Log out from the account menu to return to the login page.

The existing LifeLoop scanner demo remains a local interaction. The existing remote Unsplash images require an internet connection.

## Backend integration

The authentication UI is separated from the page so a backend can be added later. Replace the demo save/login logic in `js/login.js` with a request to the backend authentication endpoint, then store only the session information the backend provides. Keep password handling on the server.
