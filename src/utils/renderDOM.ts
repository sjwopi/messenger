import HomePage from "../pages/Home/Home";
import ProfilePage from "../pages/Profile/Profile";
import ProfileEditDataPage from "../pages/Profile/ProfileEditData";
import ProfileEditPasswordPage from "../pages/Profile/ProfileEditPassword";
import SignInPage from "../pages/Sign/SignIn";
import SignUpPage from "../pages/Sign/SignUp";


const ROUTES = {
  home: HomePage,
  profile: ProfilePage,
  editProfile: ProfileEditDataPage,
  editPassword: ProfileEditPasswordPage,
  messenger: HomePage,
  messengerActive: HomePage,
  signIn: SignInPage,
  signUp: SignUpPage,
  err500: HomePage,
  err404: HomePage,
}

export default function renderDOM(route: keyof typeof ROUTES) {
  const root = document.querySelector('#root');
  root!.innerHTML = '';

  const PageComponent = ROUTES[route];
  const page = new PageComponent({});

  root!.appendChild(page.element);

  page.dispatchComponentDidMount();
}
