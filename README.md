# frontend-assessment

This client is built with reactjs. This is done using chakra-ui react component library
and everything is written in vanilla javascript. State management is mainly done with
redux-tool-kit and here I am using vite as the building tool and development server.

The react app only has three pages:

1. Signup page for registration
2. The login page for already registered users
3. The dashboard with five tabs for overview, users, admins and logout.
   NOTE: All tabs except logout are protected thus user has to be logged in before he or she
   can access the page, else user will be redirected to login page.

- Users and admins can be searched by their first name on both Users and Admins tabs
  respectively
