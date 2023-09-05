import { Link, useNavigate } from "react-router-dom";
import * as S from "./authpage.style";
import { useEffect, useState } from "react";
import { getRegisterInSite, getLoginInSite } from '..//..//api';

export default function AuthPage({ isLoginMode = false }) {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [waitApiResponse,setWaitApiResponse] =useState(false);
  const [waitApiLoginResponse,setWaitApiLoginResponse] =useState(false);
  const navigate = useNavigate();

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
    .then((data)=>{
      if(data.id){
        console.log(data);
        setError(null);
        setWaitApiLoginResponse(false);
        navigate('/login');
      } else{
        console.log(data);
        const message = data.detail;
        setError(message);
        setWaitApiLoginResponse(false);
      }   

    })
    .catch((error)=>{
      setError(`${error.message}`);
      setWaitApiResponse(false);
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

    .then((data) => {
      if(data.id){
        setError(null);              
        setWaitApiResponse(false);
        navigate('/login');
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