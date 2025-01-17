'use client';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export default function Home() {
  const handleTestLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        "were02369@gmail.com", // 登録済みのメール
        "Koko10969"       // パスワード
      );
      console.log("ログイン成功:", userCredential.user);
    } catch (error) {
      if (error instanceof Error) {
        console.error("ログインエラー:", error.message);
      } else {
        console.error("予期しないエラー:", error);
      }
    }
  };

  return (
    <div>
      <h1>Firebase サインインテスト</h1>
      <button onClick={handleTestLogin}>テストログイン</button>
    </div>
  );
}
