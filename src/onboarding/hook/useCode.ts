import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function useCode() {
  const [searchParams] = useSearchParams();
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // "code" 쿼리 값을 읽어서 저장
    const accessToken = searchParams.get("accessToken");
    if (accessToken) {
      setCode(accessToken);
      // 로컬 스토리지 저장
      localStorage.setItem("accessToken", accessToken);

      // 메인 페이지로 리다이렉트
      navigate("/", { replace: true });
    }
  }, [searchParams, navigate]);

  return {
    code,
  };
}
