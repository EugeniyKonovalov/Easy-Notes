import React from "react";
import Card from "../components/UI/Card";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { isAuth } = useAuth();
  return (
    <Card>
      <h2 className="home">
        Keep your notes in order!
        {!isAuth && (
          <p>If you want to add folders or notes, you need to login!</p>
        )}
      </h2>
    </Card>
  );
};

export default Home;
