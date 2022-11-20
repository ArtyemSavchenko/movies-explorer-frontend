import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { CurrentUser } from "../../contexts/CurrentUserContext";
import Preloader from "../ui/Preloader/Preloader";

const ProtectedAuthRoute = ({Component}) => {
  const { user } = useContext(CurrentUser);

  return user === null ? <Preloader /> : user._id ? <Component /> : <Navigate to='/signin' />
}

export default ProtectedAuthRoute
