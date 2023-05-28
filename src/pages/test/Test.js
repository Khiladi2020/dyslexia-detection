import React from "react";
// material
import {
    Card,
    Button,
    Table,
    Avatar,
    TableRow,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
  } from "@mui/material";
import { styled } from '@mui/material/styles';
import {
  Container,
} from "@mui/material";
import { sizing } from '@mui/system';

// components
import swal from 'sweetalert';

import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

//styles
const TestContainer = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    height: "90vh",
    padding: "8px",
}));

const QuestionTemplateContainer = styled('div')(({ theme }) => ({
    display: "flex",
    height: "100vh",
    padding: "8px",
}));

//conditional rendering
function loadQuestionTemplate() {
    const questionType = "";
    switch(questionType) {
        case 'MCQ':
            break;
        case 'speech-test':
            
            break;
        default:
    }
}
export default function Test() {
    const [isLoaded, setLoaded] = useState(false);

    return (
        <Container maxWidth="xl">
            <TestContainer >
                <QuestionTemplateContainer>
                    {(isLoaded)
                    ? (<div>Loaded</div>)
                    : (<div>Not Loaded</div>)
                    }
                </QuestionTemplateContainer>
                
                
                <div style={{display:"flex"}}>
                    <Button onClick="/" size="large" variant="contained" style={{width: "100%"}}>
                        Next
                    </Button>
                </div>
            </TestContainer>
        </Container>
    );
}
