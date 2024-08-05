import { Typography } from "@mui/material";
import { ITeachersProps } from "components/IComponents";
import Attendance from "private/attendance/attendance";
import { urlOfTeacherAttendance } from "utils";

//
const Teachers: React.FC<ITeachersProps> = ({ urlAfterPrivate, userDetails }) => {
  return (
    <>
      <Typography>Welcome teacher: {userDetails?.name}</Typography>
      {urlAfterPrivate == urlOfTeacherAttendance && (
        <Attendance/>
      )}
    </>
  );
};
export default Teachers;
