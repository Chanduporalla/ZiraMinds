import React from "react";
import { Button, Card, CardContent, Typography, Container } from "@mui/material";

const AISolutions = () => {
  return (
    <Container maxWidth="md" sx={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", py: 6, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "#42a5f5" }}>
        AI Solutions by ZiraMinds
      </Typography>
      
      <div>
        {[ 
          { title: "F.R.I.D.A.Y (AI Chatbot)", desc: "A free and privacy-focused AI assistant." },
          { title: "QuickTap AI", desc: "A complete suite of AI tools, all available for free." },
          { title: "Android & Web App Solutions", desc: "AI-powered applications that are user-friendly and free of charge." }
        ].map((item, index) => (
          <Card key={index} sx={{ backgroundColor: "#1e1e1e", color: "white", my: 2 }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: "#64b5f6" }}>{item.title}</Typography>
              <Typography variant="body2" sx={{ color: "#b0bec5" }}>{item.desc}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Button variant="contained" sx={{ mt: 4, backgroundColor: "#42a5f5", ":hover": { backgroundColor: "#1e88e5" } }}>
        Start Using Our AI Solutions Today!
      </Button>
    </Container>
  );
};

export default AISolutions;
