import { Link, useNavigate } from "react-router-dom";
import * as S from "./authpage.style";
import { useEffect, useState, useContext } from "react";
import { getRegisterInSite, getLoginInSite } from '..//..//api';
import { UserContext } from "../../context";


export default function AuthPage({ isLoginMode = false}) {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [waitApiResponse,setWaitApiResponse] =useState(false);
  const [waitApiLoginResponse,setWaitApiLoginResponse] =useState(false);
  const navigate = useNavigate();
  const [isUser, setIsUser] = useContext(UserContext);

  const handleLogin = async ({ email, password }) => {
    if (email == ''){      
      setError('Поле Email не заполнено');
      return;
    }
    if (password == ''){      
      setError('Поле password не заполнено');
      return;
    }
    setWaitApiLoginResponse(true);
    getLoginInSite(email,password)
    .then((obj)=>{
      const status =obj.status;
      const data=obj.data;      
      if(status !==401){
        setError(null);
        setWaitApiLoginResponse(false);
        window.localStorage.setItem('user',data.username);
        setIsUser(data.username);
        navigate('/');
      } else{
        const message = data.detail;
        setError(message);
        setWaitApiLoginResponse(false);
      }   

    })
    .catch((error)=>{
      setError(`${error.message}`);
      setWaitApiLoginResponse(false);
    })
    
  };

  const handleRegister = async () => {
    if (email == ''){      
      setError('Поле Email не заполнено');
      return;
    }
    if (password == ''){      
      setError('Поле password не заполнено');
      return;
    }
    if (repeatPassword != password){
      setError('Неправильно введен повторный пароль');
      return;
    }   
    
    
    setWaitApiResponse(true);
    getRegisterInSite(email, password)

    .then((obj) => {
      const status =obj.status;
      const data=obj.data;
      console.log(status);
      console.log(data);
      if(status !==400){
        setError(null);              
        setWaitApiResponse(false);
        window.localStorage.setItem('user',data.username);
        setIsUser(data.username);        
        navigate('/');
      } else{
        const message = data.email || data.username || data.password[0]|| data.password[1]|| data.password[2];
        setError(message);
        setWaitApiResponse(false);
      }      

    })
    .catch((error)=>{      
      setError(`${error.message}`);
      setWaitApiResponse(false);
    });    
  };



  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton 
                onClick={() => handleLogin({ email, password })}
                disabled ={waitApiLoginResponse}
              >
                Войти
              </S.PrimaryButton>
              <Link to="/registration">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                onClick={handleRegister}
                disabled ={waitApiResponse}
                >
                Зарегистрироваться
              </S.PrimaryButton>
              <Link to="/login">
                <S.SecondaryButton>Авторизоваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}