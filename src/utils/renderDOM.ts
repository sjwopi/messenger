import HomePage from "../pages/Home/Home";
import ProfilePage from "../pages/profile/Profile";
import ProfileEditDataPage from "../pages/profile/ProfileEditData";
import ProfileEditPasswordPage from "../pages/profile/ProfileEditPassword";
import SignInPage from "../pages/sign/SignIn";
import SignUpPage from "../pages/sign/SignUp";
import Error404 from "../pages/Error/Error404";
import Error500 from "../pages/Error/Error500";
import MessengerPage from "../pages/messenger/Messenger";
import MessengeActivePage from "../pages/messenger/MessengerActive";


const ROUTES = {
  home: HomePage,
  profile: ProfilePage,
  editProfile: ProfileEditDataPage,
  editPassword: ProfileEditPasswordPage,
  messenger: MessengerPage,
  messengerActive: MessengeActivePage,
  signIn: SignInPage,
  signUp: SignUpPage,
  err500: Error404,
  err404: Error500,
}

export default function renderDOM(route: keyof typeof ROUTES) {
  const root = document.querySelector('#root');
  root!.innerHTML = '';

  const PageComponent = ROUTES[route];
  const page = new PageComponent({});

  root!.appendChild(page.element);

  page.dispatchComponentDidMount();
}
