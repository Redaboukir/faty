import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumericPad from "../components/NumericPad";

export default function Login() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const correctCode = "1234";

  const handleClick = (num) => {
    if (code.length < 4) {
      setCode((prev) => {
        const newCode = prev + num;
        if (newCode.length === 4) {
          if (newCode === correctCode) {
            navigate("/menu");
          } else {
            setTimeout(() => setCode(""), 500);
          }
        }
        return newCode;
      });
    }
  };

  const handleDelete = () => {
    setCode(code.slice(0, -1));
  };

  return (
    <div className="container">
      <h1>Entrez votre code</h1>
      <div className="code-dots">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`code-dot ${code.length > i ? "filled" : ""}`}
          ></div>
        ))}
      </div>
      <NumericPad onNumberClick={handleClick} onDelete={handleDelete} />
    </div>
  );
}
