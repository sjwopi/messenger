import HomePage from "../pages/Home/Home";
import ProfilePage from "../pages/Profile/Profile";
import ProfileEditDataPage from "../pages/Profile/ProfileEditData";
import ProfileEditPasswordPage from "../pages/Profile/ProfileEditPassword";
import SignInPage from "../pages/Sign/SignIn";
import SignUpPage from "../pages/Sign/SignUp";
import Error404 from "../pages/Error/Error404";
import Error500 from "../pages/Error/Error500";
import MessengerPage from "../pages/Messenger/Messenger";
import MessengeActivePage from "../pages/Messenger/MessengerActive";


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
