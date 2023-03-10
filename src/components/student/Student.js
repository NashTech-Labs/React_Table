import React from 'react'
import StickyTable from '../table/StickyTable';
import { Box, Button, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import { alpha, styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { pink } from '@mui/material/colors';


const Student = () => {
  const columns = [
    { id: 'student_name', label: 'Name', minWidth: 300 },
    { id: 'student_course', label: 'Studio Code', minWidth: 300 },
    { id: 'student_email', label: 'Email', minWidth: 300 },
    { id: 'status', label: 'Status', minWidth: 300 },
    { id: 'actions', label: 'Actions', minWidth: 0 }
  ];
  const rows = [
    { student_name: 'Anuj', student_course: "MCA", student_email: 'anuj@gmail.com', status: 'enable' },
    { student_name: 'Rohan', student_course: "Btech", student_email: 'rohan@gmail.com', status: 'enable' },
    { student_name: 'Ayush', student_course: "BCA", student_email: 'ayush@gmail.com', status: 'disable' },
    { student_name: 'Shivam', student_course: "Bcom", student_email: 'shivam@gmail.com', status: 'enable' }
  ]


  let color = "#5cb85c"
  const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: `${color} !important`,
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: `${color} !important`,
    },

  }));
  let colorRed = "#c9302c";
  const RedSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: `${color} !important`,
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "#808080 !important",
    },
    '& .MuiSwitch-track': {
      backgroundColor: `${colorRed} !important`,
      border: "none !important"
    },

  }));

  let studioStateData = rows;
  let studioStateList = [];
  if (studioStateData != null) {
    studioStateList = studioStateData.map((item) => {
      const student_name = item.student_name;
      const student_course = item.student_course;
      const student_email = item.student_email;
      const status = item.status === 'enable' ? (
        <GreenSwitch defaultChecked />
      ) : (
        <RedSwitch />
      );
      return {
        ...item,
        student_name,
        student_course,
        student_email,
        status,
        actions: (
          <Box sx={{ marginLeft: "-1.2rem", display: 'flex' }}>
            <Button
              size="large"
              variant="text"
              color="info"
              sx={{ paddingTop: "0px", paddingBottom: "0px" }}
              aria-label="edit"
            >
              <Tooltip title={"Edit"}>
                <Box sx={{
                  width: "100%",
                  display: "inline-block",
                  padding: "0.5em 0.6em"
                }} >
                  <ModeRoundedIcon />
                </Box>
              </Tooltip>
            </Button>
            <Button
              size="large"
              variant="text"
              color="info"
              sx={{ paddingTop: "0px", paddingBottom: "0px", color: 'rgb(255, 86, 80)' }}
            >
              <Tooltip title={"Delete"}>
                <Box sx={{
                  display: "inline-block",
                  padding: "0.5em 0.6em"
                }} >
                  <DeleteIcon />
                </Box>
              </Tooltip>
            </Button>
          </Box>
        )
      };
    }
    )
  }
  return (
      <StickyTable columns={columns} rows={studioStateList} label="Student Management" tableName="Student" />
  )
}

export default Student;