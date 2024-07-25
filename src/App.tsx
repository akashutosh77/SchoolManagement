import React, { useEffect, useState } from "react";
// import { UploadButton } from "./components/UploadButton";
import { Container, ThemeProvider } from "@mui/material";
import { muiTheme } from "./styles/muiTheme";
import { Background } from "./components/Background";
import { fetchData } from "./services/masterService";
// import { Signup } from "./public/login/signup";
import AppRoutes from "./routes/appRoutes";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Header from "./public/header/header";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const clientId=process.env.REACT_APP_CLIENT_ID??'';
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    console.log("the data fetched is", data);
  }
  return (
    <ThemeProvider theme={muiTheme}>
      <Background>
        <Header />
        <div style={{ marginTop: "80px" }}>
          {/* <UploadButton /> */}
          {/* <Signup></Signup> */}
          <Container maxWidth="lg">
            <GoogleOAuthProvider clientId={clientId}>
              <AppRoutes />
            </GoogleOAuthProvider>
          </Container>
        </div>
      </Background>
    </ThemeProvider>
  );
}

export default App;
