import { useDispatch } from "react-redux";
import Routing from "./Routing/Routing";
import { setUser } from "./Redux/Slice/Providerslice";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loaderAnimation from "./Animation/Home Icon Loading.json";
import loaderAnimation2 from "./Animation/Material wave loading.json";
import "./Css/Style.css";
function App() {
  const [loading, setLoading] = useState(true);
  let dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      dispatch(setUser({ access_token: token }));
    }
  }, [dispatch]);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      dispatch(
        setUser({
          user: parsed.user,
          role: parsed.role,
          is_provider: parsed.is_provider,
          is_customer: parsed.is_customer,
          is_admin: parsed.is_admin,
        })
      );
    }
  }, [dispatch]);

  //Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="splash-overlay">
        <div className="loader-container">
          <Lottie
            animationData={loaderAnimation}
            loop={true}
            className="lottie-main"
          />
          <h2 className="animated-text">
            <span> Home Buddy</span> <span className="emoji">😊</span>
          </h2>
          <Lottie
            animationData={loaderAnimation2}
            loop={true}
            className="lottie-secondary"
          />
        </div>
      </div>
    );
  }

  
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
